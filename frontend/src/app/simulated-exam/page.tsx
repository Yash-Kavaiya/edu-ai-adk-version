// app/simulado/page.tsx ou src/pages/simulado.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ApiService } from "@/services/api";
import {
  SimulatedExamResult,
  SimulatedQuestion,
} from "@/types/SimulatedExamResult";
import { parseADKResponse } from "@/utils/parseADKResponse";
import { ADKMessage } from "@/types/ADKMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "@/components/ui/motion";
import GradientText from "@/components/ui/gradient-text";
import {
  Clock,
  BookOpen,
  Brain,
  CheckCircle,
  XCircle,
  Trophy,
  ArrowRight,
  RotateCcw,
  Timer,
  Target,
  Zap,
  StopCircle,
  AlertTriangle,
  Home,
} from "lucide-react";

type QuizState = "form" | "loading" | "quiz" | "results";

interface QuizAnswer {
  questionIndex: number;
  selectedOption: string;
  isCorrect: boolean;
}

export default function SimulatedExam() {
  // Form state
  const [form, setForm] = useState({
    tema: "",
    area: "Ciências da Natureza",
    dificuldade: "Média",
    tempo: 30,
  });

  // Quiz state
  const [quizState, setQuizState] = useState<QuizState>("form");
  const [questoes, setQuestoes] = useState<SimulatedExamResult>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Timer state
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Stop confirmation state
  const [showStopConfirmation, setShowStopConfirmation] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setTimerActive(false);
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.tema.trim()) return;

    setLoading(true);
    setQuizState("loading");

    try {
      const payload = ApiService.createSimulatedExamPayload({
        tema: form.tema,
        area: form.area,
        dificuldade: form.dificuldade,
        tempo: Number(form.tempo),
      });

      const data: ADKMessage[] = await ApiService.runAgent(payload);
      const parsed = parseADKResponse<SimulatedExamResult>(data);

      if (parsed && parsed.questoes?.length > 0) {
        setQuestoes(parsed);
        setTimeLeft(form.tempo * 60); // Convert minutes to seconds
        setQuizState("quiz");
        setTimerActive(true);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedOption("");
      } else {
        throw new Error("Não foi possível gerar o simulado");
      }
    } catch (err) {
      alert("Erro ao gerar simulado. Tente novamente.");
      setQuizState("form");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (!selectedOption || !questoes) return;

    const currentQuestion = questoes.questoes[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.resposta_correta;

    const newAnswer: QuizAnswer = {
      questionIndex: currentQuestionIndex,
      selectedOption,
      isCorrect,
    };

    setAnswers((prev) => [...prev, newAnswer]);
    setSelectedOption("");

    if (currentQuestionIndex + 1 < questoes.questoes.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setTimerActive(false);
    setQuizState("results");
  };

  const handleStopQuiz = () => {
    setShowStopConfirmation(true);
  };

  const confirmStopQuiz = () => {
    setTimerActive(false);
    setQuizState("results");
    setShowStopConfirmation(false);
  };

  const cancelStopQuiz = () => {
    setShowStopConfirmation(false);
  };

  const resetQuiz = () => {
    setQuizState("form");
    setQuestoes(undefined);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOption("");
    setTimeLeft(0);
    setTimerActive(false);
    setForm({
      tema: "",
      area: "Ciências da Natureza",
      dificuldade: "Média",
      tempo: 30,
    });
    setShowStopConfirmation(false);
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
    const totalQuestions = questoes?.questoes.length || 0;
    return { correct: correctAnswers, total: totalQuestions };
  };

  if (quizState === "loading") {
    return (
      <div className="min-h-screen app-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary/30 rounded-full animate-spin border-t-primary mx-auto"></div>
            <Brain className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                Gerando seu simulado...
              </h2>
              <p className="text-white/70">
                Nossa IA está criando questões personalizadas para você
              </p>
            </div>
            <Link href="/">
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Cancelar e Voltar
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (quizState === "form") {
    return (
      <div className="min-h-screen app-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full border border-primary/30 mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-white">
                <GradientText
                  colors={["#7040ff", "#9c40ff", "#5640ff"]}
                  className="font-bold"
                >
                  Simulado ENEM
                </GradientText>
              </h1>
              <p className="text-white/70 text-lg">
                Configure seu simulado personalizado e teste seus conhecimentos
              </p>
            </div>

            {/* Form */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Configuração do Simulado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-white/90 font-medium">Tema</label>
                    <input
                      type="text"
                      name="tema"
                      placeholder="Ex: Ecologia urbana, Revolução Industrial..."
                      value={form.tema}
                      onChange={handleFormChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/90 font-medium">Área</label>
                      <select
                        name="area"
                        value={form.area}
                        onChange={handleFormChange}
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="Ciências da Natureza">
                          Ciências da Natureza
                        </option>
                        <option value="Ciências Humanas">
                          Ciências Humanas
                        </option>
                        <option value="Linguagens">Linguagens</option>
                        <option value="Matemática">Matemática</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/90 font-medium">
                        Dificuldade
                      </label>
                      <select
                        name="dificuldade"
                        value={form.dificuldade}
                        onChange={handleFormChange}
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="Fácil">Fácil</option>
                        <option value="Média">Média</option>
                        <option value="Difícil">Difícil</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/90 font-medium flex items-center gap-2">
                      <Timer className="w-4 h-4" />
                      Tempo (minutos)
                    </label>
                    <input
                      type="number"
                      name="tempo"
                      min="5"
                      max="120"
                      value={form.tempo}
                      onChange={handleFormChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Button
                      type="submit"
                      disabled={loading || !form.tema.trim()}
                      className="w-full button-primary flex items-center gap-2 group"
                    >
                      <Zap className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                      Gerar Simulado
                      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>

                    <Link href="/">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full text-white border-white/20 hover:bg-white/10 flex items-center gap-2"
                      >
                        <Home className="w-5 h-5" />
                        Voltar à Página Inicial
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  if (quizState === "quiz" && questoes) {
    const currentQuestion = questoes.questoes[currentQuestionIndex];
    const progress =
      ((currentQuestionIndex + 1) / questoes.questoes.length) * 100;

    return (
      <div className="min-h-screen app-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Timer and Progress Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8 p-4 glass-card border-white/10 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Início
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-mono text-lg font-semibold">
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="text-white/70">
                Questão {currentQuestionIndex + 1} de {questoes.questoes.length}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 max-w-xs">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <Button
                onClick={handleStopQuiz}
                variant="outline"
                size="sm"
                className="text-red-400 border-red-400/30 hover:bg-red-400/10 hover:border-red-400 transition-colors"
              >
                <StopCircle className="w-4 h-4 mr-2" />
                Parar
              </Button>
            </div>
          </motion.div>

          {/* Question Card */}
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl leading-relaxed">
                  {currentQuestion.pergunta}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(currentQuestion.alternativas).map(
                  ([letra, texto]) => (
                    <button
                      key={letra}
                      onClick={() => handleAnswerSelect(letra)}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                        selectedOption === letra
                          ? "bg-primary/20 border-primary border-2"
                          : "bg-white/5 border border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-primary bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                          {letra}
                        </span>
                        <span className="text-white">{texto as string}</span>
                      </div>
                    </button>
                  )
                )}

                <div className="pt-6 border-t border-white/10">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!selectedOption}
                    className="button-primary flex items-center gap-2 group"
                  >
                    {currentQuestionIndex + 1 === questoes.questoes.length ? (
                      <>
                        <Trophy className="w-5 h-5" />
                        Finalizar Simulado
                      </>
                    ) : (
                      <>
                        Próxima Questão
                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stop Confirmation Modal */}
          {showStopConfirmation && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-white/20 rounded-xl p-6 max-w-md mx-4 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Parar Simulado?
                </h3>
                <p className="text-white/70">
                  Tem certeza que deseja parar o simulado? Você pode ver os
                  resultados das questões respondidas ou voltar à página
                  inicial.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={cancelStopQuiz}
                    variant="outline"
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    Continuar
                  </Button>
                  <Button
                    onClick={confirmStopQuiz}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <StopCircle className="w-4 h-4 mr-2" />
                    Ver Resultados
                  </Button>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2 w-full sm:w-auto"
                    >
                      <Home className="w-4 h-4" />
                      Página Inicial
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (quizState === "results" && questoes) {
    const score = calculateScore();
    const percentage = Math.round((score.correct / score.total) * 100);

    return (
      <div className="min-h-screen app-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Results Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full border border-primary/30 mb-4">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-white">
                {answers.length === questoes.questoes.length
                  ? "Simulado Concluído!"
                  : "Simulado Interrompido"}
              </h1>
              <div className="text-6xl font-bold">
                <GradientText
                  colors={["#7040ff", "#9c40ff", "#5640ff"]}
                  className="font-bold"
                >
                  {percentage}%
                </GradientText>
              </div>
              <p className="text-white/70 text-lg">
                Você acertou {score.correct} de {answers.length} questões
                respondidas
                {answers.length < questoes.questoes.length && (
                  <span className="block text-sm mt-1 text-yellow-400">
                    ({questoes.questoes.length - answers.length} questões não
                    respondidas)
                  </span>
                )}
              </p>
            </div>

            {/* Detailed Results */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Revisão das Questões
              </h2>
              {questoes.questoes.map((question, index) => {
                const userAnswer = answers.find(
                  (a) => a.questionIndex === index
                );
                const isCorrect = userAnswer?.isCorrect || false;
                const wasAnswered = !!userAnswer;

                return (
                  <Card
                    key={index}
                    className={`glass-card border-white/10 ${
                      !wasAnswered ? "opacity-60" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {!wasAnswered ? (
                            <div className="w-8 h-8 bg-gray-500/20 border border-gray-500 rounded-full flex items-center justify-center">
                              <Clock className="w-5 h-5 text-gray-400" />
                            </div>
                          ) : isCorrect ? (
                            <div className="w-8 h-8 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-red-500/20 border border-red-500 rounded-full flex items-center justify-center">
                              <XCircle className="w-5 h-5 text-red-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="text-white font-medium">
                            {index + 1}. {question.pergunta}
                            {!wasAnswered && (
                              <span className="ml-2 text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded">
                                Não respondida
                              </span>
                            )}
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {Object.entries(question.alternativas).map(
                              ([letra, texto]) => {
                                const isUserAnswer =
                                  userAnswer?.selectedOption === letra;
                                const isCorrectAnswer =
                                  question.resposta_correta === letra;

                                return (
                                  <div
                                    key={letra}
                                    className={`p-2 rounded text-sm ${
                                      !wasAnswered
                                        ? isCorrectAnswer
                                          ? "bg-green-500/20 border border-green-500/50 text-green-200"
                                          : "text-white/40"
                                        : isCorrectAnswer
                                        ? "bg-green-500/20 border border-green-500/50 text-green-200"
                                        : isUserAnswer
                                        ? "bg-red-500/20 border border-red-500/50 text-red-200"
                                        : "text-white/60"
                                    }`}
                                  >
                                    <strong>{letra})</strong> {texto as string}
                                    {!wasAnswered && isCorrectAnswer && (
                                      <span className="ml-2 text-xs text-green-400">
                                        (Resposta correta)
                                      </span>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded text-blue-200 text-sm">
                            <strong>Explicação:</strong> {question.explicacao}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Página Inicial
                </Button>
              </Link>
              <Button
                onClick={resetQuiz}
                className="button-primary flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Novo Simulado
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}

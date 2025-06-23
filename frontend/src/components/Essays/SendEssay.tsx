"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ApiService } from "@/services/api";
import FeedbackBox from "@/components/Essays/FeedbackBox";
import { EssayEvaluationResult } from "@/types/EssayEvaluationResult";
import { ADKMessage } from "@/types/ADKMessage";
import { parseADKResponse } from "@/utils/parseADKResponse";
import {
  ArrowLeft,
  FileText,
  Upload,
  Zap,
  Bot,
  Sparkles,
  Target,
  PenTool,
} from "lucide-react";

export default function SendEssay() {
  const [essayMainSubject, setEssayMainSubject] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<EssayEvaluationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnviar = async () => {
    if (!text.trim() && !file) {
      alert("Por favor, insira uma redação ou selecione um arquivo.");
      return;
    }

    setIsLoading(true);

    try {
      let payload;

      if (file) {
        // Se for imagem, simula envio com URL mockada (em vez de upload real por enquanto)
        payload = ApiService.createImagePayload(
          "https://storage.googleapis.com/edu-ai-essays/essay_01.jpg"
        );
      } else {
        // Se for texto direto
        payload = ApiService.createEssayPayload(essayMainSubject, text);
      }

      const data: ADKMessage[] = await ApiService.runAgent(payload);
      const parsed = parseADKResponse<EssayEvaluationResult>(data);
      if (parsed) {
        setResponse(parsed);
      }
    } catch (error) {
      console.error("Erro ao enviar redação:", error);
      alert("Erro ao processar a redação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background similar to landing page */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-purple-700/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-pink-600/25 to-rose-600/25 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="button-secondary flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar à Página Inicial
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              variant="outline"
              className="button-secondary flex items-center gap-2"
            >
              <Bot className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          {!response ? (
            /* Essay input form */
            <div className="space-y-8">
              {/* Hero section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                  <FileText className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-sm font-medium text-white/80">
                    Essay Evaluator AI Agent
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                  ENEM Essay
                  <br />
                  <span className="gradient-text">AI Evaluation</span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Get detailed feedback on your ENEM essay with AI-powered
                  analysis across all 5 competencies. Upload an image or paste
                  your text to start.
                </p>
              </div>

              {/* Input form */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <PenTool className="h-6 w-6 text-purple-400" />
                    Submit Your Essay
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Enter your essay topic and content below. You can either
                    type your essay or upload an image.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Essay topic */}
                  <div className="space-y-2">
                    <label className="block text-white font-medium">
                      Essay Topic
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors"
                      placeholder="Enter the essay topic..."
                      value={essayMainSubject}
                      onChange={(e) => setEssayMainSubject(e.target.value)}
                    />
                  </div>

                  {/* Essay text */}
                  <div className="space-y-2">
                    <label className="block text-white font-medium">
                      Essay Content
                    </label>
                    <textarea
                      className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors resize-none"
                      rows={12}
                      placeholder="Paste your essay here or upload an image below..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>

                  {/* File upload */}
                  <div className="space-y-2">
                    <label className="block text-white font-medium">
                      Or Upload Image
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/40 transition-colors">
                      <Upload className="h-8 w-8 text-white/40 mx-auto mb-4" />
                      <input
                        type="file"
                        accept=".jpg,.png,.pdf"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="w-full text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20"
                      />
                      <p className="text-white/50 text-sm mt-2">
                        Supported formats: JPG, PNG, PDF
                      </p>
                    </div>
                  </div>

                  {/* Submit button */}
                  <Button
                    onClick={handleEnviar}
                    disabled={isLoading}
                    className={`w-full py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                      isLoading
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "button-primary hover:scale-105"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                        Processing Essay...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Evaluate Essay
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Results section */
            <div className="space-y-8">
              {/* Results header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                  <Target className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm font-medium text-white/80">
                    Evaluation Complete
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">
                  Your Essay
                  <br />
                  <span className="gradient-text">Results</span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setResponse(null)}
                    variant="outline"
                    className="button-secondary"
                  >
                    <PenTool className="w-4 h-4 mr-2" />
                    Evaluate Another Essay
                  </Button>

                  <Link href="/dashboard">
                    <Button className="button-primary">
                      <Bot className="w-4 h-4 mr-2" />
                      Try Other Agents
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Feedback results */}
              <FeedbackBox data={response} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

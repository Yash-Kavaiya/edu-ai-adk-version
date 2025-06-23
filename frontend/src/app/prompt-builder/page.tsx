"use client";

import { useState } from "react";
import { ApiService } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Sparkles, Bot, BookOpenText, Wand2 } from "lucide-react";
import Link from "next/link";
import { PromptBuilderOutput } from "@/types/PromptBuilderOutput";
import { ADKMessage } from "@/types/ADKMessage";
import { parseADKResponse } from "@/utils/parseADKResponse";

export default function PromptBuilder() {
  const [theme, setTheme] = useState("");
  const [result, setResult] = useState<PromptBuilderOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePrompt = async () => {
    if (!theme.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const payload = ApiService.createPromptPayload(theme);
      const response: ADKMessage[] = await ApiService.runAgent(payload);
      console.log(response);
      const parsed = parseADKResponse<PromptBuilderOutput>(response);
      setResult(parsed);
    } catch (error) {
      console.error("Erro ao gerar tema:", error);
      alert("Erro ao gerar tema. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 text-white relative overflow-hidden">
      {/* Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-24 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full animate-float" />
      </div>

      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 backdrop-blur-sm text-sm">
            <Wand2 className="h-4 w-4 text-purple-300" />
            AI Redação Prompt Builder
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Gere um <span className="gradient-text">tema de redação</span> com
            coletânea motivadora
          </h1>
          <p className="text-white/70">
            Informe uma área temática (ex: meio ambiente, saúde pública,
            tecnologia) e gere um tema no estilo ENEM com textos motivadores e
            instruções.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Digite uma área temática..."
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-white focus:outline-none focus:border-white/40 transition"
          />

          <Button
            className="w-full py-4 text-lg font-medium rounded-xl transition-all duration-300 button-primary hover:scale-105"
            onClick={handleGeneratePrompt}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                Gerando tema...
              </>
            ) : (
              <>
                <Bot className="h-5 w-5 mr-2" />
                Gerar Tema
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4 mt-8">
            <h2 className="text-2xl font-bold text-purple-300">
              {result.tema}
            </h2>

            <div className="space-y-3">
              {result.coletaneas.map((par, idx) => (
                <p key={idx} className="text-white/80 leading-relaxed">
                  {par}
                </p>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-white/90 mb-2">Instruções:</h3>
              <p className="text-white/80 leading-relaxed">
                {result.instrucoes}
              </p>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/dashboard">
            <Button variant="outline" className="text-white">
              <BookOpenText className="h-4 w-4 mr-2" />
              Voltar para o Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { ApiService } from "@/services/api";
import FeedbackBox from "@/components/Essays/FeedbackBox";
import { EssayEvaluationResult } from "@/types/EssayEvaluationResult";
import { ADKMessage } from "@/types/ADKMessage";
import { parseADKResponse } from "@/utils/parseADKResponse";

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
        payload = ApiService.createEssayPayload(text);
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
    <main className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Correção de Redação ENEM</h1>

      <label className="block font-medium">Tema da redação</label>
      <input
        type="text"
        className="w-full border p-2 rounded"
        placeholder="Tema da redação"
        value={essayMainSubject}
        onChange={(e) => setEssayMainSubject(e.target.value)}
      />

      <label className="block font-medium">Redação (Texto ou Arquivo)</label>

      <textarea
        className="w-full border p-2 rounded"
        rows={8}
        placeholder="Cole aqui sua redação..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <input
          type="file"
          accept=".jpg,.png,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>

      <button
        onClick={handleEnviar}
        disabled={isLoading}
        className={`px-4 py-2 rounded font-medium ${
          isLoading
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Processando..." : "Enviar para Correção"}
      </button>

      {response && (
        <div className="mt-6">
          <FeedbackBox data={response} />
        </div>
      )}
    </main>
  );
}

// app/simulado/page.tsx ou src/pages/simulado.tsx
"use client";

import { useState } from "react";
import { ApiService } from "@/services/api";
import {
  SimulatedExamResult,
  SimulatedQuestion,
} from "@/types/SimulatedExamResult";
import { parseADKResponse } from "@/utils/parseADKResponse";
import { ADKMessage } from "@/types/ADKMessage";

export default function SimulatedExam() {
  const [form, setForm] = useState({
    tema: "",
    area: "Ciências da Natureza",
    dificuldade: "Média",
    tempo: 30,
  });
  const [questoes, setQuestoes] = useState<SimulatedExamResult>();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = ApiService.createSimulatedExamPayload({
        tema: form.tema,
        area: form.area,
        dificuldade: form.dificuldade,
        tempo: Number(form.tempo),
      });
      console.log("PAYLOAD", payload);
      const data: ADKMessage[] = await ApiService.runAgent(payload);
      const parsed = parseADKResponse<SimulatedExamResult>(data);
      if (parsed) {
        setQuestoes(parsed);
      }
    } catch (err) {
      alert("Erro ao gerar simulado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">🧪 Gerar Simulado ENEM</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="tema"
          placeholder="Tema (ex: Ecologia urbana)"
          value={form.tema}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="area"
          value={form.area}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Ciências da Natureza</option>
          <option>Ciências Humanas</option>
          <option>Linguagens</option>
          <option>Matemática</option>
        </select>

        <select
          name="dificuldade"
          value={form.dificuldade}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Fácil</option>
          <option>Média</option>
          <option>Difícil</option>
        </select>

        <input
          type="number"
          name="tempo"
          placeholder="Tempo (min)"
          value={form.tempo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Gerando..." : "Gerar Simulado"}
        </button>
      </form>

      {questoes?.questoes && questoes.questoes.length > 0 && (
        <div className="space-y-6">
          {questoes.questoes.map((q: any, i: number) => (
            <div key={i} className="p-4 border rounded bg-white shadow">
              <p className="font-medium mb-2">
                {i + 1}. {q.pergunta}
              </p>
              <ul className="pl-4 list-disc space-y-1">
                {Object.entries(q.alternativas).map(([letra, texto]) => (
                  <li key={letra}>
                    <strong>{letra})</strong> {texto as string}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-green-600 font-semibold">
                ✅ Resposta correta: {q.resposta_correta}
              </p>
              <p className="text-sm text-gray-500">🧠 {q.explicacao}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

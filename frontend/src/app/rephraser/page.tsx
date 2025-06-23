"use client";

import { useState } from "react";
import { ApiService } from "@/services/api";
import { parseADKResponse } from "@/utils/parseADKResponse";
import { RephrasingSuggestion } from "@/types/RephrasingSuggestion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function RephraserPage() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<RephrasingSuggestion | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRephrase = async () => {
    setLoading(true);
    setResult(null);
    try {
      const payload = ApiService.createRephraserPayload(inputText);
      const response = await ApiService.runAgent(payload);
      const parsed = parseADKResponse<RephrasingSuggestion>(response);
      if (parsed) setResult(parsed);
    } catch (err) {
      alert("Error while rephrasing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-6">
      <h1 className="text-3xl font-bold text-center">Rephrase your text</h1>
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste your paragraph here..."
        className="min-h-[120px]"
      />
      <Button onClick={handleRephrase} disabled={loading || !inputText.trim()}>
        {loading ? "Rephrasing..." : "Improve my writing"}
      </Button>

      {result && (
        <div className="mt-8 space-y-4 p-6 border border-gray-700 rounded-lg bg-gray-900">
          <div>
            <h3 className="font-semibold text-primary">Original:</h3>
            <p className="text-white/80">{result.original}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Improved:</h3>
            <p className="text-green-400">{result.rewritten}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Explanation:</h3>
            <p className="text-white/70">{result.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

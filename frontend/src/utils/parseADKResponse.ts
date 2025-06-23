import { ADKMessage } from "@/types/ADKMessage";

export function parseADKResponse<T>(response: ADKMessage[]): T | null {
  const lastMessage = response[response.length - 1];
  let jsonText = lastMessage?.content?.parts?.[0]?.text;

  if (!jsonText) {
    console.error("❌ Nenhum JSON encontrado na resposta");
    return null;
  }

  try {
    // Faça um parse caso o JSON venha começando com ```json
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.slice(7);
    }
    if (jsonText.endsWith("```")) {
      jsonText = jsonText.slice(0, -3);
    }
    return JSON.parse(jsonText) as T;
  } catch (e) {
    console.error("❌ Erro ao fazer parse do JSON:", e);
    return null;
  }
}

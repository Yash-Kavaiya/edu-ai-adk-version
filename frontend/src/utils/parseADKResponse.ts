import { ADKMessage } from "@/types/ADKMessage";

export function parseADKResponse<T>(response: ADKMessage[]): T | null {
  const lastMessage = response[response.length - 1];
  const jsonText = lastMessage?.content?.parts?.[0]?.text;

  if (!jsonText) {
    console.error("❌ Nenhum JSON encontrado na resposta");
    return null;
  }

  try {
    return JSON.parse(jsonText) as T;
  } catch (e) {
    console.error("❌ Erro ao fazer parse do JSON:", e);
    return null;
  }
}

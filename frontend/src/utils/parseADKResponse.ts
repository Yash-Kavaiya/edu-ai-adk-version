import { ADKMessage } from "@/types/ADKMessage";

export function parseADKResponse<T>(response: ADKMessage[]): T | null {
  const lastMessage = response[response.length - 1];
  let jsonText = lastMessage?.content?.parts?.[0]?.text;

  if (!jsonText) {
    console.error("❌ No JSON found in the response");
    return null;
  }

  try {
    return JSON.parse(jsonText) as T;
  } catch (e) {
    console.error("❌ Error parsing JSON:", e);
    return null;
  }
}

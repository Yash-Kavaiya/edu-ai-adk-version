import { RunPayload } from "@/types";
import { USER_SESSION } from "@/constants/userSession";

const BASE_API_URL = "http://localhost:8080";

export class ApiService {
  static async runAgent(payload: RunPayload): Promise<any> {
    console.log("🔄 Enviando payload para API:", payload);
    try {
      const response = await fetch(`${BASE_API_URL}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error running agent:", error);
      throw error;
    }
  }

  static createEssayPayload(text: string): RunPayload {
    return {
      app_name: "orchestrator_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [{ text }],
      },
    };
  }

  static createImagePayload(imageUrl: string): RunPayload {
    return {
      app_name: "image_to_essay_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [{ text: imageUrl }],
      },
    };
  }
}

// Types are now exported from @/types

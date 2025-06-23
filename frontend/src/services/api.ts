import { RunPayload } from "@/types";
import { USER_SESSION } from "@/constants/userSession";

const BASE_API_URL = "http://localhost:8080";

export class ApiService {
  static async runAgent(payload: RunPayload): Promise<any> {
    console.log("🔄 Sending payload to API:", payload);
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

  static createEssayPayload(subject: string, text: string): RunPayload {
    const final_text = `
    The user uploaded an essay with the title/subject: ${subject} and the following text: ${text} and you need to evaluate it.
    `;
    return {
      app_name: "orchestrator_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [{ text: final_text }],
      },
    };
  }

  static createImagePayload(imageUrl: string): RunPayload {
    return {
      app_name: "orchestrator_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [
          {
            text: `The user uploaded an essay as image with the following URL: ${imageUrl} and you need to evaluate it.`,
          },
        ],
      },
    };
  }

  static createSimulatedExamPayload(options: {
    topic: string;
    area: string;
    difficulty: string;
    time: number;
  }): RunPayload {
    return {
      app_name: "orchestrator_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [
          {
            text: `The user wants a simulated exam about the topic "${options.topic}" in the area of "${options.area}" with difficulty "${options.difficulty}" and time of ${options.time} minutes.`,
          },
        ],
      },
      /*session_state: {
        tema: options.tema,
        area: options.area,
        dificuldade: options.dificuldade,
        tempo: options.tempo,
      },*/
    };
  }

  static createPromptPayload(topic: string): RunPayload {
    return {
      app_name: "orchestrator_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [{ text: `Generate an essay topic about: ${topic}` }],
      },
    };
  }

  static createInterdisciplinaryQuestionPayload(options: {
    area1: string;
    area2: string;
  }): RunPayload {
    return {
      app_name: "orchestrator_agent",
      user_id: USER_SESSION.userId,
      session_id: USER_SESSION.sessionId,
      new_message: {
        role: "user",
        parts: [
          {
            text: `Generate an interdisciplinary question about: ${options.area1} and ${options.area2}.`,
          },
        ],
      },
    };
  }
}

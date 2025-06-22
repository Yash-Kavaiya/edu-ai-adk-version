export interface ADKMessage {
  author: string;
  content: {
    role: "user" | "model";
    parts: {
      text?: string;
      // outros tipos: functionCall, functionResponse etc.
    }[];
  };
  timestamp: number;
  actions: {
    transferToAgent?: string;
    artifactDelta?: any;
    stateDelta?: any;
  };
}

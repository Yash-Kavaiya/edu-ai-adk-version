// Session Types
export interface SessionState {
  userId: string;
  sessionId: string | null;
  isSessionActive: boolean;
}

export interface SessionContextType {
  sessionState: SessionState;
  createSession: (appName?: AppType) => Promise<string>;
  clearSession: () => void;
  updateSession: (data: Partial<SessionState>) => void;
}

// API Types
export interface MessagePart {
  text: string;
}

export interface Message {
  role: "user" | "assistant";
  parts: MessagePart[];
}

export interface RunPayload {
  app_name: string;
  user_id: string;
  session_id: string;
  new_message: Message;
}

// Component Types
export interface EssayFormData {
  text: string;
  file: File | null;
}

export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// App Types
export type AppType =
  | "essay_evaluator_agent"
  | "image_to_essay_agent"
  | "content_generator_agent"
  | "personal_tutor_agent"
  | "progress_tracker_agent"
  | "interdisciplinary_agent"
  | "simulated_exam_agent"
  | "rephraser_agent"
  | "prompt_builder_agent";

export interface AppConfig {
  name: AppType;
  displayName: string;
  description: string;
  supportsFileUpload: boolean;
}

// Constants
export const APP_CONFIGS: Record<AppType, AppConfig> = {
  essay_evaluator_agent: {
    name: "essay_evaluator_agent",
    displayName: "Corretor de Redação",
    description: "Avalia e corrige redações do ENEM",
    supportsFileUpload: true,
  },
  image_to_essay_agent: {
    name: "image_to_essay_agent",
    displayName: "Imagem para Redação",
    description: "Converte imagens em texto de redação",
    supportsFileUpload: true,
  },
  content_generator_agent: {
    name: "content_generator_agent",
    displayName: "Gerador de Conteúdo",
    description: "Gera conteúdo educacional personalizado",
    supportsFileUpload: false,
  },
  personal_tutor_agent: {
    name: "personal_tutor_agent",
    displayName: "Tutor Pessoal",
    description: "Assistente de aprendizagem personalizado",
    supportsFileUpload: false,
  },
  progress_tracker_agent: {
    name: "progress_tracker_agent",
    displayName: "Acompanhamento de Progresso",
    description: "Monitora e analisa o progresso de aprendizagem",
    supportsFileUpload: false,
  },
  interdisciplinary_agent: {
    name: "interdisciplinary_agent",
    displayName: "Agente Interdisciplinar",
    description: "Conecta conhecimentos entre diferentes disciplinas",
    supportsFileUpload: false,
  },
  simulated_exam_agent: {
    name: "simulated_exam_agent",
    displayName: "Simulado de Prova",
    description: "Cria e avalia simulados de provas",
    supportsFileUpload: false,
  },
  rephraser_agent: {
    name: "rephraser_agent",
    displayName: "Reformulador de Texto",
    description: "Reformula e melhora textos",
    supportsFileUpload: false,
  },
  prompt_builder_agent: {
    name: "prompt_builder_agent",
    displayName: "Construtor de Prompts",
    description: "Ajuda a criar prompts eficazes",
    supportsFileUpload: false,
  },
};

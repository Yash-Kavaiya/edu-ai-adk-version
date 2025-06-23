export type InterdisciplinaryQuestion = {
  pergunta: string;
  alternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  resposta_correta: "A" | "B" | "C" | "D" | "E";
  justificativa: string;
};

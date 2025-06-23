export type SimulatedQuestion = {
  pergunta: string;
  alternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  resposta_correta: "A" | "B" | "C" | "D" | "E";
  explicacao: string;
};

export type SimulatedExamResult = {
  questoes: SimulatedQuestion[];
};

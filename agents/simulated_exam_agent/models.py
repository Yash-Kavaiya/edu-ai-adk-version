from pydantic import BaseModel, Field
from typing import List

class Alternativas(BaseModel):
    A: str
    B: str
    C: str
    D: str
    E: str

class SimulatedQuestion(BaseModel):
    pergunta: str
    alternativas: Alternativas
    resposta_correta: str = Field(..., pattern="^[A-E]$")
    explicacao: str

class SimulatedExamOutput(BaseModel):
    questoes: List[SimulatedQuestion]

from pydantic import BaseModel, Field
from typing import Dict, List

class SimulatedQuestion(BaseModel):
    pergunta: str = Field(..., description="Enunciado da questão estilo ENEM")
    alternativas: Dict[str, str] = Field(
        ..., 
        description="Dicionário com as alternativas A a E"
    )
    resposta_correta: str = Field(
        ..., 
        description="Letra da alternativa correta (ex: 'C')",
        pattern="^[A-E]$"
    )
    explicacao: str = Field(..., description="Justificativa para a resposta correta")


class SimulatedExamOutput(BaseModel):
    questoes: List[SimulatedQuestion] = Field(
        ..., description="Lista de questões geradas no estilo ENEM"
    )

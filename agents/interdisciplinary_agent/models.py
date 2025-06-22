from pydantic import BaseModel, Field
from typing import Dict

class InterdisciplinaryQuestion(BaseModel):
    pergunta: str = Field(..., description="Enunciado da questão interdisciplinar")
    alternativas: Dict[str, str] = Field(..., description="Alternativas A–E")
    resposta_correta: str = Field(..., pattern="^[A-E]$", description="Letra da resposta correta")
    justificativa: str = Field(..., description="Explicação para a resposta correta, considerando a interdisciplinaridade")

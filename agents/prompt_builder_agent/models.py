from pydantic import BaseModel, Field
from typing import List

class PromptOutput(BaseModel):
    tema: str = Field(..., description="Tema da redação no estilo ENEM")
    coletaneas: List[str] = Field(..., description="Coletâneas motivadoras com base no tema, com dados, citações ou contexto social")
    instrucoes: str = Field(..., description="Instruções para o aluno desenvolver o texto argumentativo")

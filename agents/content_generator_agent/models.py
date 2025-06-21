from pydantic import BaseModel, Field
from typing import List

class ContentOutput(BaseModel):
    explicacao_textual: str = Field(..., description="Explicação clara e acessível sobre o tema")
    lista_topicos: List[str] = Field(..., description="Resumo com tópicos principais do conteúdo")
    flashcards: List[str] = Field(..., description="Perguntas e respostas curtas para fixação rápida")

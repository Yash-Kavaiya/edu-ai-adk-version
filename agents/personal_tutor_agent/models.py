from pydantic import BaseModel, Field
from typing import List

class TutorRecommendation(BaseModel):
    prioridades: List[str] = Field(..., description="Tópicos ou competências que o aluno precisa revisar")
    recomendacao: str = Field(..., description="Sugestão pedagógica geral para o aluno")
    acionar_agentes: List[str] = Field(..., description="Lista de agentes que devem ser chamados para gerar conteúdo ou simulado")

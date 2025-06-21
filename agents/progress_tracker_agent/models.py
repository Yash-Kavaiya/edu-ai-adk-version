from pydantic import BaseModel, Field
from typing import List, Dict

class Redacao(BaseModel):
    competencias: Dict[str, int] = Field(..., description="Notas das competências 1 a 5")
    nota_total: int = Field(..., description="Nota final da redação")
    tema: str = Field(..., description="Tema da redação avaliada")

class Simulado(BaseModel):
    area: str = Field(..., description="Área do simulado (ex: Matemática, Humanas)")
    nota: int = Field(..., description="Nota final")
    data: str = Field(..., description="Data do simulado")

class Progresso(BaseModel):
    redacoes: List[Redacao] = Field(default=[], description="Histórico de redações")
    simulados: List[Simulado] = Field(default=[], description="Histórico de simulados")
    media_por_area: Dict[str, float] = Field(default={}, description="Médias calculadas por área")
    recomendacoes: List[str] = Field(default=[], description="Sugestões de próximos passos")

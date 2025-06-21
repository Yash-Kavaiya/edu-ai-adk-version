from pydantic import BaseModel, Field

class RephrasingSuggestion(BaseModel):
    original: str = Field(..., description="Texto original enviado pelo aluno")
    reescrita: str = Field(..., description="Sugestão de reescrita aprimorada")
    explicacao: str = Field(..., description="Explicação clara sobre as melhorias feitas")

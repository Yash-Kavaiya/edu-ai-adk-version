from pydantic import BaseModel, Field

class PromptOutput(BaseModel):
    tema: str = Field(..., description="Tema da redação no estilo ENEM")
    coletanea: str = Field(..., description="Coletânea motivadora com base no tema, com dados, citações ou contexto social")
    instrucoes: str = Field(..., description="Instruções para o aluno desenvolver o texto argumentativo")

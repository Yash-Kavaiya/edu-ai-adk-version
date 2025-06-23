from pydantic import BaseModel, Field

class Alternativas(BaseModel):
    A: str
    B: str
    C: str
    D: str
    E: str

class InterdisciplinaryQuestion(BaseModel):
    pergunta: str = Field(..., description="Enunciado da questão interdisciplinar")
    alternativas: Alternativas = Field(..., description="Alternativas A–E")
    resposta_correta: str = Field(..., pattern="^[A-E]$", description="Letra da resposta correta")
    explicacao: str = Field(..., description="Explicação para a resposta correta, considerando a interdisciplinaridade")

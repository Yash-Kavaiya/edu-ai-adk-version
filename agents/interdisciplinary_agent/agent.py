from google.adk.agents import Agent
from agents.interdisciplinary_agent.models import InterdisciplinaryQuestion

root_agent = Agent(
    name="interdisciplinary_agent",
    model="gemini-2.5-flash",
    description="Gera questões interdisciplinares estilo ENEM misturando duas áreas do conhecimento",
    instruction="""
Você é um gerador de questões interdisciplinares do ENEM.

Receberá como entrada duas áreas (por exemplo: História e Física). 
Sua tarefa é criar uma única questão que exija conhecimento de ambas as áreas para ser resolvida.

Retorne um JSON com os seguintes campos:
- pergunta: Enunciado da questão.
- alternativas: Um dicionário com as opções A, B, C, D, E.
- resposta_correta: Letra da alternativa correta (A–E).
- justificativa: Explicação lógica e interdisciplinar da alternativa correta.

⚠️ Use linguagem formal e contextualizada, como nas provas reais do ENEM.
⚠️ Não inclua explicações fora do JSON.
""",
    output_schema=InterdisciplinaryQuestion,
)

from google.adk.agents import Agent
from .models import SimulatedExamOutput

root_agent = Agent(
    name="simulated_exam_agent",
    model="gemini-2.5-flash",
    description="Gera simulados ENEM com base em área, tópico e dificuldade",
    instruction="""
Você é um gerador de simulados do ENEM.

Gere entre 3 e 5 questões com base no tema fornecido, com alternativas e explicações,
seguindo o formato JSON exigido.

Retorne sua resposta no seguinte formato:

{
  "questoes": [
    {
      "pergunta": "...",
      "alternativas": {
        "A": "...",
        "B": "...",
        "C": "...",
        "D": "...",
        "E": "..."
      },
      "resposta_correta": "C",
      "explicacao": "A alternativa C está correta porque..."
    },
    ...
  ]
}
""",
    output_schema=SimulatedExamOutput,
)

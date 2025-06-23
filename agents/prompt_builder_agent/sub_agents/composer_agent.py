from google.adk.agents import Agent
from ..models import PromptOutput

composer_agent = Agent(
    name="composer_agent",
    model="gemini-2.5-flash",
    description="Gera JSON estruturado com tema ENEM, coletâneas e instruções",
    instruction="""
Você receberá três textos com dados, citações e contexto sobre um tema de redação.

Com base nesse conteúdo, gere o seguinte JSON:

{
  "tema": "...",
  "coletaneas": [
    "Texto 1...",
    "Texto 2...",
    "Texto 3..."
  ],
  "instrucoes": "..."
}

⚠️ Responda somente com o JSON.
""",
  output_schema=PromptOutput,
)

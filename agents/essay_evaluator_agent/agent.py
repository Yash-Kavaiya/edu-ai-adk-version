from google.adk.agents import Agent
from .models import EssayEvaluationResult

root_agent = Agent(
    name="essay_evaluator_agent",
    model="gemini-2.5-flash",
    description="Avalia redações do ENEM com base nas 5 competências oficiais",
    instruction="""
Você é um corretor especializado do ENEM. Avalie a redação do aluno considerando as 5 competências:
1. Norma culta.
2. Repertório e proposta.
3. Argumentação.
4. Coesão e coerência.
5. Intervenção.

Responda no seguinte formato JSON:
{
  "comp1_score": 180,
  "comp2_score": 160,
  "comp3_score": 200,
  "comp4_score": 180,
  "comp5_score": 160,
  "total_score": 880,
  "feedback": "Sua redação apresenta ótimo domínio da norma culta, argumentos bem estruturados..."
}
""",
    output_schema=EssayEvaluationResult,
)

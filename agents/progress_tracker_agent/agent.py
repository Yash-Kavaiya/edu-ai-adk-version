from google.adk.agents import Agent
from agents.progress_tracker_agent.models import Progresso

root_agent = Agent(
    name="progress_tracker_agent",
    model="gemini-2.5-flash",
    description="Consolida e retorna o progresso do aluno em simulados e redações",
    instruction="""
Você é um rastreador de progresso educacional.

O aluno envia dados de desempenho em simulados e redações.

Sua função é:
- consolidar os dados recebidos
- calcular médias por área
- sugerir próximos passos com base nas dificuldades

Sua resposta deve ser um JSON com:
- redacoes: lista com competências, nota total e tema
- simulados: lista com área, nota e data
- media_por_area: dicionário com a média por área
- recomendacoes: lista textual com próximos passos sugeridos

Retorne somente o JSON, sem explicações adicionais.
""",
    output_schema=Progresso,
)

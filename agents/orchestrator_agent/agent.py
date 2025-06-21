from google.adk.agents import Agent
from essay_evaluator_agent.agent import root_agent as essay_agent
from simulated_exam_agent.agent import root_agent as exam_agent

root_agent = Agent(
    name="orchestrator_agent",
    model="gemini-2.5-flash",
    description="Orquestrador do sistema Edu.AI para decidir qual agente especializado acionar.",
    instruction="""
Você é um orquestrador inteligente. Sua função é entender a intenção do aluno
e delegar a tarefa ao agente especializado mais apropriado.

Se o aluno pedir para corrigir uma redação, use o agente `essay_evaluator_agent`.
Se o aluno pedir por um simulado, use o agente `simulated_exam_agent`.

Você NUNCA deve tentar responder por conta própria.
""",
    sub_agents=[essay_agent, exam_agent]
)

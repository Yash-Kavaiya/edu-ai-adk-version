from google.adk.agents import Agent
from essay_evaluator_agent.agent import root_agent as essay_agent
from simulated_exam_agent.agent import root_agent as exam_agent
from prompt_builder_agent.agent import root_agent as prompt_agent
from interdisciplinary_agent.agent import root_agent as inter_agent
from personal_tutor_agent.agent import root_agent as tutor_agent
from content_generator_agent.agent import root_agent as content_agent
from rephraser_agent.agent import root_agent as rephraser_agent
from progress_tracker_agent.agent import root_agent as tracker_agent
from image_to_essay_agent.agent import root_agent as image_to_essay_agent

root_agent = Agent(
    name="orchestrator_agent",
    model="gemini-2.5-flash",
    description="Orquestrador do sistema Edu.AI para decidir qual agente especializado acionar.",
    instruction="""
Você é um orquestrador inteligente. Sua função é entender a intenção do aluno
e delegar a tarefa ao agente especializado mais apropriado.
Delegue as tarefas da seguinte forma:
- Correção de redação textual → essay_evaluator_agent
- Correção de redação de imagem → image_to_essay_agent (depois de realizar o OCR, você deve enviar a redação para o essay_evaluator_agent)
- Geração de simulado → simulated_exam_agent
- Geração de tema de redação → prompt_builder_agent
- Questão interdisciplinar → interdisciplinary_agent
- Análise personalizada e recomendações → personal_tutor_agent
- Geração de conteúdo didático → content_generator_agent
- Reescrita assistida → rephraser_agent
- Consulta de progresso → progress_tracker_agent
Você NUNCA deve tentar responder por conta própria.

""",
    sub_agents=[
        image_to_essay_agent,
        essay_agent,
        exam_agent,
        prompt_agent,
        inter_agent,
        tutor_agent,
        content_agent,
        rephraser_agent,
        tracker_agent,
    ]
)

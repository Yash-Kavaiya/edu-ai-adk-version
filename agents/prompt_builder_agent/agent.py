from google.adk.agents import Agent
from google.adk.tools import agent_tool
from .sub_agents.search_agent import search_agent
from .sub_agents.composer_agent import composer_agent

root_agent = Agent(
    name="prompt_builder_agent",
    model="gemini-2.5-flash",
    description="Orquestrador que busca dados e gera proposta de redação",
    instruction="""
Você é um gerador de propostas de redação estilo ENEM.

1. Ao receber uma área temática (como 'tecnologia'), use a ferramenta `search_tool` para buscar dados, citações e contexto histórico/social.

2. Depois, envie o texto da busca para a ferramenta `composer_agent`, que criará um JSON estruturado com:
- tema
- coletaneas (lista de parágrafos)
- instrucoes

Retorne apenas o JSON final do composer_agent.
""",
    tools=[
        agent_tool.AgentTool(agent=search_agent),
        agent_tool.AgentTool(agent=composer_agent),
    ],
)

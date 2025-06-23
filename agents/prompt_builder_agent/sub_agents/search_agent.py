from google.adk.agents import Agent
from google.adk.tools import google_search

search_agent = Agent(
    name="search_agent",
    model="gemini-2.5-flash",
    description="Busca dados e citações para tema ENEM usando Google Search",
    tools=[google_search],
    instruction="""
Você é um especialista em busca de informações.

Ao receber uma área temática, use a ferramenta google_search para coletar:

- dados estatísticos
- citações de especialistas
- fatos históricos

Com base nesses dados, gere e retorne 3 textos diferentes, com dados, citações e contexto sobre o tema. Não invente dados.
"""
)

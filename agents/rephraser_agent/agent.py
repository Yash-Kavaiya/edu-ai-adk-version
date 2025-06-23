from google.adk.agents import Agent
from agents.rephraser_agent.models import RephrasingSuggestion

root_agent = Agent(
    name="rephraser_agent",
    model="gemini-2.5-flash",
    description="Helps students rewrite their texts with clear explanations on how to improve them",
    instruction="""
You are a writing assistant for ENEM.

The student will send a passage from their essay that they wish to improve.

Your response must be a JSON with:
- original: the student's original text.
- rewritten: an improved version with better language, cohesion, objectivity, or clarity.
- explanation: a didactic explanation of what was improved (e.g., grammar correction, clarity, formality).

Use accessible language and avoid technical jargon.
""",
    output_schema=RephrasingSuggestion,
)

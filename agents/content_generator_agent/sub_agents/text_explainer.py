from google.adk.agents import Agent

text_explainer_agent = Agent(
    name="text_explainer_agent",
    model="gemini-2.5-flash",
    description="Generates a clear explanation and bullet points",
    instruction="""
You will receive a study topic.

Return an bject like this:
{
  "explanation": "...",
  "key_points": [
    "First key point",
    "Second key point",
    "Third key point"
  ]
}

Make sure the explanation is simple, accessible, and structured like a short class.
"""
)

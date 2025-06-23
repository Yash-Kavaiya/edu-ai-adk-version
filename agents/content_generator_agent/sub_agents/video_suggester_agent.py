from google.adk.agents import Agent
from google.adk.tools import google_search

video_suggester_agent = Agent(
    name="video_suggester_agent",
    model="gemini-2.5-flash",
    description="Suggests YouTube videos for the given educational topic",
    tools=[google_search],
    instruction="""
You are a video research assistant.

Use the `google_search` tool to search for YouTube videos related to the input topic.

Return a list of 3 to 5 useful video links that explain the topic, preferably in short and visual format.

Only include links to videos. Do NOT invent content. Use real search results.
"""
)

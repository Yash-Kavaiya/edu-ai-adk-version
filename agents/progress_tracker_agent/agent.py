from google.adk.agents import Agent
from agents.progress_tracker_agent.models import Progress

root_agent = Agent(
    name="progress_tracker_agent",
    model="gemini-2.5-flash",
    description="Consolidates and returns the student's progress in practice exams and essays",
    instruction="""
You are an educational progress tracker.

The student will send performance data from practice exams and essays.

Your role is to:
- consolidate the received data
- calculate average scores by subject area
- suggest next steps based on the student's weaknesses

Your response must be a JSON with:
- essays: list of essay evaluations with competencies, total score, and topic
- practice_exams: list of exams with area, score, and date
- average_by_area: dictionary of average scores per area
- recommendations: textual list of suggested next steps

Return only the JSON, with no additional explanations.
""",
    output_schema=Progress,
)

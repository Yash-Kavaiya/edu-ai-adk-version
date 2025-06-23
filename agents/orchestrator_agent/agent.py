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
    description="Edu.AI orchestrator that decides which specialized agent to activate.",
    instruction="""
You are an intelligent orchestrator. Your job is to understand the student's intent
and delegate the task to the most appropriate specialized agent.
Delegate tasks as follows:
- Essay correction from text → essay_evaluator_agent
- Essay correction from image → image_to_essay_agent (after OCR, you must send the essay to essay_evaluator_agent)
- Simulated exam generation → simulated_exam_agent
- Essay prompt generation → prompt_builder_agent
- Interdisciplinary question generation → interdisciplinary_agent
- Personalized performance analysis and recommendations → personal_tutor_agent
- Didactic content generation → content_generator_agent
- Assisted rewriting → rephraser_agent
- Progress tracking and queries → progress_tracker_agent

You must NEVER attempt to answer the user yourself.
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

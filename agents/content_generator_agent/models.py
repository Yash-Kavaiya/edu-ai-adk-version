from pydantic import BaseModel, Field
from typing import List

class ContentOutput(BaseModel):
    text_explanation: str = Field(..., description="Clear and accessible explanation about the topic")
    topics_summary: List[str] = Field(..., description="Summary with the main points of the content")
    flashcards: List[str] = Field(..., description="Short questions and answers for quick retention")

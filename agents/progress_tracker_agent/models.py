from pydantic import BaseModel, Field
from typing import List, Dict

class Essay(BaseModel):
    competencies: Dict[str, int] = Field(..., description="Scores for writing competencies 1 through 5")
    total_score: int = Field(..., description="Final essay score")
    topic: str = Field(..., description="Topic of the evaluated essay")

class PracticeExam(BaseModel):
    subject_area: str = Field(..., description="Exam subject area (e.g., Mathematics, Humanities)")
    score: int = Field(..., description="Final exam score")
    date: str = Field(..., description="Date of the exam")

class Progress(BaseModel):
    essays: List[Essay] = Field(default=[], description="History of essay evaluations")
    practice_exams: List[PracticeExam] = Field(default=[], description="History of practice exams")
    average_by_area: Dict[str, float] = Field(default={}, description="Average scores by subject area")
    recommendations: List[str] = Field(default=[], description="Suggested next steps for improvement")

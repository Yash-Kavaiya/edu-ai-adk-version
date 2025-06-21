from pydantic import BaseModel, Field

class EssayEvaluationResult(BaseModel):
    comp1_score: int = Field(..., ge=0, le=200, description="Competência 1: Norma culta")
    comp2_score: int = Field(..., ge=0, le=200, description="Competência 2: Repertório e proposta")
    comp3_score: int = Field(..., ge=0, le=200, description="Competência 3: Argumentação")
    comp4_score: int = Field(..., ge=0, le=200, description="Competência 4: Coesão e coerência")
    comp5_score: int = Field(..., ge=0, le=200, description="Competência 5: Intervenção")
    total_score: int = Field(..., ge=0, le=1000, description="Nota final entre 0 e 1000")
    feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")

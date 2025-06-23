from pydantic import BaseModel, Field

class EssayEvaluationResult(BaseModel):
  extracted_essay: str = Field(..., description="Redação extraída do texto ou imagem")
  comp1_score: int = Field(..., ge=0, le=200, description="Competência 1: Norma culta")
  comp1_feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")
  comp2_score: int = Field(..., ge=0, le=200, description="Competência 2: Repertório e proposta")
  comp2_feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")
  comp3_score: int = Field(..., ge=0, le=200, description="Competência 3: Argumentação")
  comp3_feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")
  comp4_score: int = Field(..., ge=0, le=200, description="Competência 4: Coesão e coerência")
  comp4_feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")
  comp5_score: int = Field(..., ge=0, le=200, description="Competência 5: Intervenção")
  comp5_feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")
  total_score: int = Field(..., ge=0, le=1000, description="Nota final entre 0 e 1000")
  overall_feedback: str = Field(..., description="Feedback textual explicando os pontos fortes e fracos da redação")

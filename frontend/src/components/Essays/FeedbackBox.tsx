import { EssayEvaluationResult } from "@/types/EssayEvaluationResult";

export default function FeedbackBox({ data }: { data: EssayEvaluationResult }) {
  return (
    <div className="bg-white border shadow-sm p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-700">Resultado da Correção</h2>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="font-medium text-gray-900">Competência 1</p>
          <p>{data.comp1_score} / 200</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Competência 2</p>
          <p>{data.comp2_score} / 200</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Competência 3</p>
          <p>{data.comp3_score} / 200</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Competência 4</p>
          <p>{data.comp4_score} / 200</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Competência 5</p>
          <p>{data.comp5_score} / 200</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-gray-800 font-semibold text-lg">
          Nota Final: {data.total_score} / 1000
        </p>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-gray-600 whitespace-pre-wrap">
          {data.feedback}
        </p>
      </div>
    </div>
  );
}

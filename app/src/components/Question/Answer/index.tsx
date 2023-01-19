import { AnswerInterface } from "../../../interfaces/answer.interface";

export default function Answer({
  answer,
  index,
}: {
  answer: AnswerInterface;
  index: number;
}) {
  return (
    <button
      onClick={() => {
        answer.correct ? alert("Resposta correta") : alert("Resposta errada");
      }}
      className="bg-[#FA6E0F] w-full h-1/5 rounded-full flex items-center text-xl font-semibold hover:bg-[#fc893a] active:bg-[#c9590c]"
    >
      <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center  mx-4">
        {index + 1}
      </div>
      <p className="text-white">{answer.text}</p>
    </button>
  );
}

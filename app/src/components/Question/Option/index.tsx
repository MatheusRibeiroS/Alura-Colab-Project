import { GameOptionInterface } from "../../../interfaces/gameOption.interface";

interface Props {
  option: GameOptionInterface,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any
}

export default function Option({ option, onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-[#FA6E0F] w-[100px] h-[100px] p-6 flex flex-col justify-center items-center font-semibold hover:bg-[#fc893a] active:bg-[#c9590c]">
      <img src={option.icon} />
      <p className="text-white text-lg">{option.text}</p>
    </button>
  );
}

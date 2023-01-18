import { CardInteface } from "../../../interfaces/card.interface";

export default function Card({ card }: { card: CardInteface }) {
  return (
    <button className="bg-[#FA6E0F] w-[100px] h-[100px] p-6 flex flex-col justify-center items-center font-semibold hover:bg-[#fc893a] active:bg-[#c9590c]">
      <img src={card.icon} />
      <p className="text-white text-lg">{card.text}</p>
    </button>
  );
}

import Card from "./Card";
import { dashBoardCards } from "../../mocks/dashBoardCards";

export default function DashBoard() {
  return (
    <div className="flex flex-col justify-between space-y-10">
      <h2 className="text-white text-3xl font-bold">DashBoard</h2>
      <div className="flex space-x-10">
        {dashBoardCards.map((card, index) => (
          <Card key={index} title={card.title} Icon={card.icon} />
        ))}
      </div>
    </div>
  );
}

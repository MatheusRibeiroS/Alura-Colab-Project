import { respostasMock } from "../../mocks/respostasMock";
import { cardsMock } from "../../mocks/cardsMock";

import Answer from "./Answer";
import Statement from "./Statement";
import Card from "./Card";

export default function Question() {
  return (
    <div className="w-[80%] h-[90%] flex flex-col justify-between p-4">
      <Statement category="Cultura" statement="Alguma pergunta sobre cultura" />
      <section className="h-[45%] flex flex-col justify-between">
        {respostasMock.map((answer, index) => (
          <Answer key={index} index={index} answer={answer} />
        ))}
      </section>
      <section className="flex space-x-4 justify-center">
        {cardsMock.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </section>
    </div>
  );
}

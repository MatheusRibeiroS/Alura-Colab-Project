import { respostasMock } from "../../mocks/respostasMock";
import { gameOptions } from "../../mocks/gameOptionsMock";

import Answer from "./Answer";
import Statement from "./Statement";
import Option from "./Option";

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
        {gameOptions.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </section>
    </div>
  );
}

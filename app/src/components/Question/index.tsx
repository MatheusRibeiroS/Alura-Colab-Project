import { respostasMock } from "../../mocks/respostasMock";
import { gameOptions } from "../../mocks/gameOptionsMock";

import Answer from "./Answer";
import Statement from "./Statement";
import Option from "./Option";

export default function Question() {
  return (
    <div className="w-[80%] h-[95%] flex flex-col justify-between p-4">
      <Statement
        category="Cultura"
        statement="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "
      />
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

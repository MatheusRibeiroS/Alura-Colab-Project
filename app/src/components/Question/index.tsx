import { respostasMock } from "../../mocks/respostasMock";
import skipIcon from "../../assets/img/skip.svg";
import cardsIcon from "../../assets/img/cards.svg";
import stopIcon from "../../assets/img/stop.svg";
import Answer from "./Answer";
import Statement from "./Statement";
import Option from "./Option";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosService from "../../services/axiosService";
import { useUserAuth } from "../../hooks/useAuth";

export default function Question() {
  const navigate = useNavigate();
  const { getTokenPayload } = useUserAuth();

  const [question, setQuestion] = useState({});
  const [gameId, setGameId] = useState("");

  useEffect(() => {
    (async () => {
      const user = await getTokenPayload();
      const { data: activeGameRes } = await axiosService.get(
        `/game/active/${user.id}`
      );

      if (activeGameRes) {
        setGameId(activeGameRes.id);
      }
      console.log(activeGameRes);
    })();
  }, []);

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
        <Option
          onClick={() => {
            (async () => {
              axiosService.put(`/help/${gameId}`);
            })();
          }}
          option={{ icon: cardsIcon, text: "Cartas" }}
        />
        <Option
          onClick={() => {
            (async () => {
              axiosService.put(`/skip/${gameId}`);
            })();
          }}
          option={{ icon: skipIcon, text: "Pular" }}
        />
        <Option
          onClick={() => {
            (async () => {
              axiosService.put(`/finish/${gameId}`);
            })();
          }}
          option={{ icon: stopIcon, text: "Parar" }}
        />
      </section>
    </div>
  );
}

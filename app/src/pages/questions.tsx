import React from "react";

const respostas = [
  { answer: "Deve ser essa", correct: true},
  { answer: "Não deve ser essa", correct: false },
  { answer: "Não deve ser essa", correct: false },
  { answer: "Não deve ser essa", correct: false },
];

export default function Questions() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[80%] h-[80%] flex flex-col justify-between p-4">
        <section className="bg-[#263673] w-full h-[30%] text-left p-6 space-y-2">
          <h1 className="text-xl text-white font-bold">Categoria</h1>
          <p className="text-2xl text-white font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </section>
        <section className="h-[60%] flex flex-col justify-between">
          {respostas.map((resposta, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => {
                  resposta.correct
                    ? alert("Resposta correta")
                    : alert("Resposta errada");
                }}
                className="bg-[#FA6E0F] w-full h-1/5 rounded-full flex items-center text-xl font-semibold hover:bg-[#fc893a] active:bg-[#c9590c]"
              >
                <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center  mx-4">{index + 1}</div>
                <p className="text-white">{resposta.answer}</p>
              </button>
            </React.Fragment>
          ))}
        </section>
      </div>
    </div>
  );
}

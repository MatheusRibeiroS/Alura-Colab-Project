import DashBoard from "../components/DashBoard";

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-[88vh]">
        <div className="flex flex-col justify-between h-[50%] mt-20">
          <h1 className="text-center text-4xl text-white font-bold">Bem Vindo ao Show do Milhão!</h1>
          <DashBoard />
        </div> 
      </div>
    </>
  );
}

import ProfileForm from "../components/ProfileForm";
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";

export default function Profile() {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className="h-[88vh] flex justify-center items-center">
      <div
        className={
          edit
            ? "bg-[#263673] h-[90%] w-[35%] flex flex-col justify-between items-center p-8"
            : "bg-[#263673] w-[35%] flex flex-col p-8"
        }
      >
        <div className="flex w-full justify-between">
          <UserCircleIcon className="w-[100px] text-white" />
          <div className="flex items-center space-x-2 text-white">
            <p className="text-xl">Editar Informações</p>
            <button onClick={() => setEdit(!edit)}>
              <PencilSquareIcon className="w-[50px]" />
            </button>
          </div>
        </div>
        {edit ? (
          <ProfileForm />
        ) : (
          <>
            <ProfileInfo name="Gabriel Berti" email="gabriel@email.com" />
            <button className="font-semibold text-xl cursor-pointer self-end bg-red-600 h-16 hover:bg-red-500 text-white active:bg-red-700 w-[20%]">
              Excluir
            </button>
          </>
        )}
      </div>
    </div>
  );
}

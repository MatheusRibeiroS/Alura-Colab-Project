import ProfileForm from "../components/ProfileForm";
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import { useUserAuth } from "../hooks/useAuth";
import { UserInterface } from "../interfaces/user.interface";
import { getUserById } from "../services/getUserById";
import { deleteUser } from "../services/deleteUser";

export default function Profile() {
  const [edit, setEdit] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface>({
    name: "",
    email: "",
    password: "",
  });
  const { getTokenPayload, logout } = useUserAuth();

  const { id } = getTokenPayload();

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserById(id);
      setUser(user);
    };

    getUser();
  }, []);

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
            <ProfileInfo name={user.name} email={user.email} />
            <button
              onClick={async () => {
                const deletedUser = await deleteUser(id);
                console.log(deletedUser.status, deletedUser.message);
                deletedUser.status === 200
                  ? alert("Conta removida com sucesso!")
                  : alert("Ocorreu algum problema ao deletar conta.");
                logout();
              }}
              className="font-semibold text-xl cursor-pointer self-end bg-red-600 h-16 hover:bg-red-500 text-white active:bg-red-700 w-[20%]"
            >
              Excluir
            </button>
          </>
        )}
      </div>
    </div>
  );
}

import UserDropDown from "./UserDropDown";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { UserInterface } from "../../interfaces/user.interface";
import { useUserAuth } from "../../hooks/useAuth";
import { getUserById } from "../../services/getUserById";

export default function Header() {
  const [user, setUser] = useState<UserInterface>({
    name: "",
    email: "",
    password: "",
  });
  const { getTokenPayload } = useUserAuth();

  useEffect(() => {
    const { id } = getTokenPayload();
    
    const getUser = async () => {
      const user = await getUserById(id);
      setUser(user);
    };
    
    getUser();
  }, []);
  return (
    <>
      <header className="bg-[#263673] w-full h-[12vh] flex justify-between items-center p-10 px-32">
        <Logo/>
        <UserDropDown username={user.name} />
      </header>
    </>
  );
}

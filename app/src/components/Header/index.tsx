import UserDropDown from "./UserDropDown";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header className="bg-[#263673] w-full h-[12vh] flex justify-between items-center p-10 px-32">
        <Logo/>
        <UserDropDown />
      </header>
    </>
  );
}

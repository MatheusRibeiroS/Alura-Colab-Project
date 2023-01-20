import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.webp";

export default function Logo() {
  return (
    <div className="w-[200px] flex justify-center items-center hover:cursor-pointer">
      <Link to="/home">
        <img src={logo} alt="Logo do Show do Milhão" />
      </Link>
    </div>
  );
}

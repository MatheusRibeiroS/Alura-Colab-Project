import logo from "../../src/assets/img/logo.webp";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function NewAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleNomeChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setLoginForm({
      ...loginForm,
      name: e.target.value,
    });

  const handleLoginChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setLoginForm({
      ...loginForm,
      email: e.target.value,
    });

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) =>
    setLoginForm({
      ...loginForm,
      password: e.target.value,
    });

  const onSubmitLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const encrypted = CryptoJS.AES.encrypt(
      loginForm.password,
      `${process.env.REACT_APP_CRYPTO_SECRET}`
    ).toString();

    (async () => {
      axios.post("http://localhost:4000/user", {
        name: loginForm.name,
        email: loginForm.email,
        password: encrypted,
      });
      navigate("/login");
    })();
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-[20px]">
      <img src={logo} className="w-[290px] mb-[54px] mt-[86px]" />
      <form
        onSubmit={onSubmitLogin}
        className="flex flex-col gap-[20px] w-[340px] min-w-[280px]"
      >
        <div className="flex flex-col gap-[5px]">
          <label className="text-[#FDFDFD]">Nome</label>
          <label className="flex gap-[4px] p-[6px] border-solid border-[1px] border-[#DFDFDF] rounded-[4px] bg-[#fff] cursor-text">
            <input
              onChange={handleNomeChange}
              className="outline-none placeholder:text-[#9B9B9B] w-full"
            />
          </label>
        </div>
        <div className="flex flex-col gap-[5px]">
          <label className="text-[#FDFDFD]">Email</label>
          <label className="flex gap-[4px] p-[6px] border-solid border-[1px] border-[#DFDFDF] rounded-[4px] bg-[#fff] cursor-text">
            <input
              onChange={handleLoginChange}
              className="outline-none placeholder:text-[#9B9B9B] w-full"
            />
          </label>
        </div>
        <div className="flex flex-col">
          <label className="text-[#FDFDFD]">Senha</label>
          <label className="flex gap-[4px] p-[6px] border-solid border-[1px] border-[#DFDFDF] rounded-[4px] bg-[#fff] cursor-text">
            <input
              onChange={handlePasswordChange}
              type={showPassword ? "text" : "password"}
              className="outline-none placeholder:text-[#9B9B9B] w-full"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-6 w-6 text-[#131B3AB2]" />
              ) : (
                <EyeIcon className="h-6 w-6 text-[#131B3AB2]" />
              )}
            </div>
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#0084ff45] hover:bg-[#0085FF1A] transition-all duration-500 p-[10px_32px] rounded-[4px] text-[#FDFDFD] text-sm mt-[10px]"
          >
            CANCELAR
          </button>
          <button
            type="submit"
            className="w-full bg-[#0085FF1A] hover:bg-[#0084ff45] transition-all duration-500 p-[10px_32px] rounded-[4px] text-[#FDFDFD] text-sm mt-[10px]"
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </div>
  );
}

import logo from "../../src/assets/img/logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useUserAuth } from "../hooks/useAuth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useUserAuth();

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
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

    (async () => {
      login({
        email: loginForm.email,
        password: loginForm.password,
      });
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
          <label className="text-[#FDFDFD]">Email</label>
          <label className="flex gap-[4px] p-[6px] border-solid border-[1px] border-[#DFDFDF] rounded-[4px] bg-[#fff] cursor-text">
            <input
              onChange={handleEmailChange}
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
        <button
          type="submit"
          className="bg-[#0085FF1A] hover:bg-[#0084ff45] transition-all duration-500 p-[10px_32px] rounded-[4px] text-[#FDFDFD] text-sm mt-[10px]"
        >
          ENTRAR
        </button>
        <div
          onClick={() => navigate("/new-account")}
          className="flex flex-row-reverse mt-[-10px] text-[#FDFDFD] text-sm hover:text-[#0084ff45] cursor-pointer"
        >
          Não tem uma conta?
        </div>
      </form>
    </div>
  );
}

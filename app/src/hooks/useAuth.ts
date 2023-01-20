import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axiosService from "../services/axiosService";
import CryptoJS from "crypto-js";
import { Buffer } from "buffer";

import jwt from "jwt-decode";
import { useAuth } from "../context/AuthProvider";

export const useUserAuth = () => {
  const { setAuth } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const validateAccessToken = useCallback(async () => {
    try {
      const user: { [key: string]: string } = jwt(cookies?.access_token);
      setAuth({
        ...user,
        access_token: cookies?.access_token,
      });
      const { data } = await axiosService.post("/auth/token/validate", {
        access_token: cookies?.access_token,
      });

      return data === true && typeof data === "boolean" ? true : false;
    } catch (err){
      return false;
    }
  }, [cookies.access_token]);

  const login = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const encrypted = CryptoJS.AES.encrypt(
          values?.password,
          `${process.env.REACT_APP_CRYPTO_SECRET}`
        ).toString();

        const response = await axiosService.post("/auth/login", {
          email: values?.email,
          password: encrypted,
        });

        setCookie("access_token", response.data.access_token, { secure: true });
        const user: { [key: string]: string } = jwt(response.data.access_token);

        setAuth({
          ...user,
          access_token: cookies?.access_token,
        });
        navigate("/");
      } catch (err) {
        console.log(err);
        // ToDo: Adicionar Toast de Erro
        // toast.error("Verifique usuário e senha.");
        removeCookie("access_token");
      }
    },
    [setCookie, navigate, removeCookie]
  );

  const isLoggedIn = useCallback(async () => {
    try {
      let isLoggedIn = false;
      if (cookies?.access_token) isLoggedIn = true;
      if (!isLoggedIn) navigate("/login");
    } catch {
      navigate("/login");
    }
  }, [cookies.access_token, validateAccessToken, navigate]);

  const logout = useCallback(() => {
    removeCookie("access_token");
    navigate("/login");
  }, [navigate, removeCookie]);

  const getTokenPayload = useCallback(() => {
    if (cookies.access_token) {
      const payload = cookies.access_token.split(".")[1];
      const decodedPayload = Buffer.from(payload, "base64").toString();

      return JSON.parse(decodedPayload);
    }
    return null;
  }, []);

  const getToken = useCallback(async () => {
    if (cookies.access_token && cookies.access_token !== "undefined") {
      return cookies.access_token;
    }
    return false;
  }, []);

  return {
    validateAccessToken,
    login,
    logout,
    isLoggedIn,
    getTokenPayload,
    getToken,
  };
};

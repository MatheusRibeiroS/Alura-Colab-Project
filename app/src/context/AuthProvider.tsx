import { createContext, useState, useContext, useDebugValue } from "react";

export interface AuthContextProps {
  auth: { [key: string]: string };
  setAuth: (auth: { [key: string]: string }) => void;
}

const AuthContext: React.Context<AuthContextProps> = createContext({
  auth: {},
  setAuth: (auth: { [key: string]: string }) => {
    console.log(auth);
  },
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [auth, setAuth] = useState({});

  const setAuthFunc: (auth: { [key: string]: string }) => void = (auth) => {
    setAuth(auth);
  };

  const initialProps: AuthContextProps = { auth, setAuth: setAuthFunc };

  return (
    <AuthContext.Provider value={initialProps}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

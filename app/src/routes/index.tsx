import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Questions from "../pages/questions";
import NewAccount from "../pages/newAccount";
import DefaultLayout from "../layouts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/new-account" element={<NewAccount />} />
      <Route element={<DefaultLayout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
      </Route>
    </Routes>
  );
};

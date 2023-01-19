import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Questions from "../pages/questions";
import NewAccount from "../pages/newAccount";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/new-account' element={<NewAccount />} />
      <Route path='/questions' element={<Questions />} />
    </Routes>
  );
};

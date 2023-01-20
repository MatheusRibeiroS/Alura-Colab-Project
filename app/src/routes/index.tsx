import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Questions from "../pages/questions";
import NewAccount from "../pages/newAccount";
import DefaultLayout from "../layouts";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Profile from "../pages/profile";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/new-account" element={<NewAccount />} />
      <Route
        element={
          <ProtectedRoute>
            <DefaultLayout  />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/questions" element={<Questions />} />
      </Route>
    </Routes>
  );
};

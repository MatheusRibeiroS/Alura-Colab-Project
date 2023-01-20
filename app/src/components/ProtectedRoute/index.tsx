import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useAuth";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { validateAccessToken } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const isLoggedIn = await validateAccessToken();
      if (!isLoggedIn) {
        navigate("/login");
        return;
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <></>;

  return <>{children}</>;
};

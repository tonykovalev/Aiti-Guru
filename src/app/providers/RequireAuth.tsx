import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/shared/store";

export const RequireAuth = () => {
  const accessToken = useAppSelector(state => state.auth.accessToken);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/shared/store";

export const RequireGuest = () => {
  const accessToken = useAppSelector(state => state.auth.accessToken);

  if (accessToken) {
    return <Navigate to="/products" replace />;
  }

  return <Outlet />;
};

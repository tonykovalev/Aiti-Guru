import { useNavigate } from "react-router-dom";
import { logout } from "@/entities/session";
import { useAppDispatch } from "@/shared/store";
import { clearToken, clearRememberMe } from "@/shared/lib";
import styles from "./LogoutButton.module.css";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    clearToken();
    clearRememberMe();
    navigate("/login");
  };

  return (
    <button className={styles.button} onClick={handleLogout}>
      Выйти
    </button>
  );
};

import { LogoutButton } from "@/features/auth/logout";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Выйти из аккаунта</span>
      <LogoutButton />
    </footer>
  );
};

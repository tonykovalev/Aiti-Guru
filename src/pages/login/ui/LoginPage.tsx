import { LoginForm } from "@/features/auth/login-form";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <main className={styles.wrapper}>
      <LoginForm />
    </main>
  );
};

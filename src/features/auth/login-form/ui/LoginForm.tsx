import { Link } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "@/shared/ui/Checkbox";
import { logoIcon } from "@/shared/assets";
import { useLoginForm } from "../model/useLoginForm";
import { UsernameField } from "./UsernameField";
import { PasswordField } from "./PasswordField";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    resetField,
    rememberMe,
    isLoading,
  } = useLoginForm();

  return (
    <div className={styles.wrapper}>
      <div className={styles.border}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          <div className={styles.header}>
            <img src={logoIcon} alt="logo" />
            <div className={styles.title}>
              <h1 className={styles.greeting}>Добро пожаловать!</h1>
              <p className={styles.info}>Пожалуйста, авторизуйтесь</p>
            </div>
          </div>

          <div className={styles.body}>
            <UsernameField
              register={register}
              resetField={resetField}
              error={errors.username}
            />
            <PasswordField
              register={register}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              error={errors.password}
            />
            <Checkbox
              {...register("rememberMe")}
              checked={rememberMe}
              label="Запомнить данные"
            />
            <button
              aria-label="Войти"
              className={styles.submitButton}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Вход..." : "Войти"}
            </button>
            <div className={styles.divider}>или</div>
          </div>
          <p>
            Нет аккаунта?{" "}
            <Link className={styles.link} to="/register">
              Создать
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

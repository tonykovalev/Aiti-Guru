import type { FieldError, UseFormRegister } from "react-hook-form";
import { Lock, Eye, EyeOff } from "lucide-react";
import type { LoginFormValues } from "../model/schema";
import styles from "./InputField.module.css";

interface PasswordFieldProps {
  register: UseFormRegister<LoginFormValues>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  error: FieldError | undefined;
}

export const PasswordField = ({
  register,
  showPassword,
  setShowPassword,
  error,
}: PasswordFieldProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="password">Пароль</label>
      <div className={styles.inputWrapper}>
        <Lock className={styles.leftIcon} />
        <input
          id="password"
          className={styles.input}
          {...register("password")}
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
        />
        <button
          aria-label="Показать пароль"
          onClick={() => setShowPassword(prev => !prev)}
          type="button"
          className={styles.rightIcon}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

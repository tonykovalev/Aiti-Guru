import type {
  FieldError,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";
import { User, X } from "lucide-react";
import type { LoginFormValues } from "../model/schema";
import styles from "./InputField.module.css";

interface UserameFieldProps {
  register: UseFormRegister<LoginFormValues>;
  resetField: UseFormResetField<LoginFormValues>;
  error: FieldError | undefined;
}

export const UsernameField = ({
  register,
  resetField,
  error,
}: UserameFieldProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="username">Логин</label>
      <div className={styles.inputWrapper}>
        <User className={styles.leftIcon} />
        <input
          id="username"
          className={styles.input}
          {...register("username")}
          autoComplete="username"
        />
        <button
          aria-label="Очистить"
          type="button"
          className={styles.rightIcon}
          onClick={() => resetField("username")}
        >
          <X />
        </button>
      </div>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

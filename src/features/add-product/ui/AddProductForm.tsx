import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { addProductSchema, type AddProductFormValues } from "../model/schema";
import { ADD_PRODUCT_FIELDS } from "../lib/constants";
import styles from "./AddProductForm.module.css";

interface AddProductFormProps {
  onClose: () => void;
}

export const AddProductForm = ({ onClose }: AddProductFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmit = (values: AddProductFormValues) => {
    console.log("Новый товар:", values);
    toast.success("Товар успешно добавлен");
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {ADD_PRODUCT_FIELDS.map(({ label, field, valueAsNumber }) => (
        <div className={styles.field} key={field}>
          <label className={styles.label}>{label}</label>
          <input
            className={styles.input}
            {...register(field, { valueAsNumber })}
            placeholder="Введите значение"
          />
          {errors[field] && (
            <span className={styles.error}>{errors[field].message}</span>
          )}
        </div>
      ))}
      <div className={styles.buttons}>
        <button className={styles.button} type="button" onClick={onClose}>
          Отмена
        </button>
        <button className={styles.button} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};

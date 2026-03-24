import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Введите логин")
    .refine(val => !val.includes(" "), "Логин не должен содержать пробелы"),
  password: z
    .string()
    .min(1, "Введите пароль")
    .refine(val => !val.includes(" "), "Пароль не должен содержать пробелы"),
  rememberMe: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

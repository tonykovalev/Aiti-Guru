import { z } from "zod";

export const addProductSchema = z.object({
  title: z.string().min(1, "Обязательное поле"),
  price: z
    .number({ error: "Введите число" })
    .positive("Цена должна быть больше 0"),
  brand: z.string().min(1, "Обязательное поле"),
  sku: z.string().min(1, "Обязательное поле"),
});

export type AddProductFormValues = z.infer<typeof addProductSchema>;

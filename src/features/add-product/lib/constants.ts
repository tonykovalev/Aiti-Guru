import type { AddProductFormValues } from "../model/schema";

export const ADD_PRODUCT_FIELDS: {
  label: string;
  field: keyof AddProductFormValues;
  valueAsNumber?: boolean;
}[] = [
  { label: "Наименование", field: "title" },
  { label: "Вендор", field: "brand" },
  { label: "Артикул", field: "sku" },
  { label: "Цена, ₽", field: "price", valueAsNumber: true },
];

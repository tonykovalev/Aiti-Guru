import type { ProductsQueryParams } from "@/entities/product";

export type SortableColumn = NonNullable<ProductsQueryParams["sortBy"]>;

export const COLUMNS: {
  label: string;
  field: SortableColumn;
  hideBelow?: number;
}[] = [
  { label: "Наименование", field: "title", hideBelow: 0 },
  { label: "Вендор", field: "brand", hideBelow: 670 },
  { label: "Артикул", field: "sku", hideBelow: 768 },
  { label: "Оценка", field: "rating", hideBelow: 0 },
  { label: "Цена, ₽", field: "price", hideBelow: 0 },
];

export const PAGE_SIZE = 5;

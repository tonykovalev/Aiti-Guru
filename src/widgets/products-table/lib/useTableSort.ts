import { useSearchParams } from "react-router-dom";
import type { ProductsQueryParams } from "@/entities/product";
import type { SortableColumn } from "./constants";

export const useTableSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = (searchParams.get("sortBy") as SortableColumn) || undefined;
  const order =
    (searchParams.get("order") as ProductsQueryParams["order"]) || undefined;
  const handleSort = (field: SortableColumn) => {
    setSearchParams(prev => {
      const currentOrder = prev.get("order");
      const currentField = prev.get("sortBy");
      prev.set("sortBy", field);
      prev.set(
        "order",
        currentField === field && currentOrder === "asc" ? "desc" : "asc",
      );
      prev.set("page", "1");
      return prev;
    });
  };

  return { handleSort, sortBy, order };
};

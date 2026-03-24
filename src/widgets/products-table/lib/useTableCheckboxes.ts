import { useCallback, useState } from "react";
import type { Product } from "@/entities/product";

export const useTableCheckboxes = (products: Product[]) => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const toggleAll = useCallback(() => {
    setSelectedIds(prev => {
      const allSelected = products.every(p => prev.has(p.id));
      const next = new Set(prev);
      if (allSelected) {
        products.forEach(p => next.delete(p.id));
      } else {
        products.forEach(p => next.add(p.id));
      }
      return next;
    });
  }, [products]);

  const toggleOne = useCallback((id: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const allChecked =
    products.length > 0 && products.every(p => selectedIds.has(p.id));
  const someChecked = products.some(p => selectedIds.has(p.id)) && !allChecked;

  return { selectedIds, toggleAll, toggleOne, allChecked, someChecked };
};

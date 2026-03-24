import { useSearchParams } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import { AddProductModal } from "@/features/add-product";
import type { SortableColumn } from "../lib/constants";
import styles from "./TableToolbar.module.css";

interface TableToolbarProps {
  refetch: () => void;
  sortBy: SortableColumn;
}

export const TableToolbar = ({ refetch, sortBy }: TableToolbarProps) => {
  const [, setSearchParams] = useSearchParams();

  const handleSortReset = () => {
    setSearchParams(prev => {
      prev.delete("sortBy");
      prev.delete("order");
      prev.set("page", "1");
      return prev;
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Все позиции</h2>
      <div className={styles.buttons}>
        <button className={styles.refreshButton} onClick={refetch}>
          <RefreshCw size={20} color={"var(--color-blue)"} />
        </button>
        <button
          disabled={!sortBy}
          className={styles.cancelSortButton}
          onClick={handleSortReset}
        >
          Сбросить сортировку
        </button>
        <AddProductModal />
      </div>
    </div>
  );
};

import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { getPageRange } from "../../lib/getPageRange";
import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  total: number;
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
  onPageClick: (page: number) => void;
  color?: string;
}

export const Pagination = ({
  page,
  totalPages,
  pageSize,
  total,
  onPrevPageClick,
  onNextPageClick,
  onPageClick,
  color = "var(--color-dark-gray)",
}: PaginationProps) => {
  const productStartCount = (page - 1) * pageSize + 1;
  const productEndCount = productStartCount + pageSize - 1;
  
  return (
    <div className={styles.wrapper}>
      <div>
        <span style={{ color }}>Показано </span>
        <span>
          {`${productStartCount}-${productEndCount > total ? total : productEndCount}`}
        </span>
        <span style={{ color }}> из </span>
        <span>{total}</span>
      </div>

      <div className={styles.pagination}>
        <button
          aria-label="Первая страница"
          className={styles.button}
          onClick={() => onPageClick(1)}
          disabled={page === 1}
        >
          <ChevronsLeft size={20} color={color} />
        </button>
        <button
          aria-label="Предыдущая страница"
          className={styles.button}
          onClick={onPrevPageClick}
          disabled={page === 1}
        >
          <ChevronLeft size={20} color={color} />
        </button>
        {getPageRange(page, totalPages).map(p => (
          <button
            aria-label={`Страница ${p}`}
            aria-current={p === page ? "page" : undefined}
            style={p === page ? { color: "white" } : { color }}
            className={clsx(styles.button, p === page && styles.active)}
            key={p}
            onClick={() => onPageClick(p)}
            disabled={p === page}
          >
            {p}
          </button>
        ))}
        <button
          aria-label="Следующая страница"
          className={styles.button}
          onClick={onNextPageClick}
          disabled={page >= totalPages}
        >
          <ChevronRight size={20} color={color} />
        </button>
        <button
          aria-label="Последняя страница"
          className={styles.button}
          onClick={() => onPageClick(totalPages)}
          disabled={page >= totalPages}
        >
          <ChevronsRight size={20} color={color} />
        </button>
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { parsePage } from "@/shared/lib";

export const useTablePagination = (totalPages: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { page, rawPage } = parsePage(searchParams);

  const handlePageClick = (p: number) => {
    setSearchParams(prev => {
      prev.set("page", String(p));
      return prev;
    });
  };

  useEffect(() => {
    if (page !== rawPage) {
      setSearchParams(
        prev => {
          prev.set("page", "1");
          return prev;
        },
        { replace: true },
      );
    } else if (totalPages > 0 && page > totalPages) {
      setSearchParams(
        prev => {
          prev.set("page", String(totalPages));
          return prev;
        },
        { replace: true },
      );
    }
  }, [page, rawPage, totalPages, setSearchParams]);

  return handlePageClick;
};

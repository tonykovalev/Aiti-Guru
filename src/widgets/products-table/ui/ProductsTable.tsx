import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery, type Product } from "@/entities/product";
import { parsePage } from "@/shared/lib";
import { Pagination } from "@/shared/ui/Pagination";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
import { TableToolbar } from "./TableToolbar";
import { PAGE_SIZE } from "../lib/constants";
import { useTableSort } from "../lib/useTableSort";
import { useTablePagination } from "../lib/useTablePagination";
import { useTableCheckboxes } from "../lib/useTableCheckboxes";
import styles from "./ProductsTable.module.css";

export const ProductsTable = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q") || undefined;
  const { handleSort, sortBy, order } = useTableSort();
  const { page } = parsePage(searchParams);

  const { data, isFetching, refetch, isError } = useGetProductsQuery({
    limit: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE,
    sortBy,
    order,
    q: search,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const handlePageClick = useTablePagination(totalPages);

  const { selectedIds, toggleAll, toggleOne, allChecked, someChecked } =
    useTableCheckboxes(products);

  if (products.length === 0 && !isFetching)
    return <div className={styles.wrapper}>Нет товаров</div>;

  return (
    <div className={styles.wrapper}>
      {isFetching && (
        <>
          <div>Загрузка...</div>
          <div className={styles.progressBar} />
        </>
      )}
      {isError ? (
        <div>
          Не удалось загрузить товары. Проверьте соединение и попробуйте снова.
        </div>
      ) : (
        <div className={styles.container}>
          <TableToolbar refetch={refetch} sortBy={sortBy} />

          <table>
            <TableHead
              checked={allChecked}
              onChange={toggleAll}
              indeterminate={someChecked}
              handleSort={handleSort}
              sortBy={sortBy}
              order={order}
            />

            <tbody>
              {products.map((product: Product) => (
                <TableRow
                  key={product.id}
                  selected={selectedIds.has(product.id)}
                  product={product}
                  checked={selectedIds.has(product.id)}
                  onToggle={toggleOne}
                />
              ))}
            </tbody>
          </table>

          <Pagination
            page={page}
            totalPages={totalPages}
            pageSize={PAGE_SIZE}
            total={total}
            onPrevPageClick={() => handlePageClick(page - 1)}
            onNextPageClick={() => handlePageClick(page + 1)}
            onPageClick={handlePageClick}
          />
        </div>
      )}
    </div>
  );
};

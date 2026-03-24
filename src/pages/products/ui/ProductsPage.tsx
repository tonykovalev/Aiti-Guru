import { ProductsTable } from "@/widgets/products-table";
import { Footer } from "@/widgets/footer";
import { ProductsSearchBar } from "@/features/products-search";
import styles from "./ProductsPage.module.css";

export const ProductsPage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.searchbar}>
          <h1 className={styles.title}>Товары</h1>
          <ProductsSearchBar />
        </div>
      </div>
      <div className={styles.body}>
        <ProductsTable />
      </div>
      <Footer />
    </main>
  );
};

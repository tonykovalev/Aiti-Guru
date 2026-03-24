import type { Product } from "@/entities/product";
import { Thumbnail } from "@/shared/ui/Thumbnail";
import type { SortableColumn } from "./constants";
import styles from "./renderCell.module.css";

export const renderCell = (product: Product, field: SortableColumn) => {
  switch (field) {
    case "title":
      return (
        <div className={styles.wrapper}>
          <Thumbnail alt="Превью товара" />
          <div className={styles.info}>
            <span className={styles.title}>{product.title}</span>
            <span className={styles.category}>{product.category}</span>
          </div>
        </div>
      );
    case "brand":
      return product.brand;
    case "sku":
      return product.sku;
    case "rating":
      return (
        <span className={product.rating < 3 ? styles.rating : ""}>
          {product.rating}
        </span>
      );
    case "price":
      return product.price;
  }
};

import { Search } from "lucide-react";
import { useProductSearch } from "../model/useProductSearch";
import styles from "./ProductsSearchBar.module.css";
import { DEBOUNCE_TIME } from "../lib/constants";

export const ProductsSearchBar = () => {
  const { value, setValue } = useProductSearch(DEBOUNCE_TIME);

  return (
    <div className={styles.wrapper}>
      <Search className={styles.searchIcon} />
      <input
        className={styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Найти"
      />
    </div>
  );
};

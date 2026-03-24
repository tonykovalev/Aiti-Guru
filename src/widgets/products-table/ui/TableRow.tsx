import { memo } from "react";
import { CircleEllipsis, Plus } from "lucide-react";
import clsx from "clsx";
import { Checkbox } from "@/shared/ui/Checkbox";
import type { Product } from "@/entities/product";
import { COLUMNS } from "../lib/constants";
import { renderCell } from "../lib/renderCell";
import styles from "./TableRow.module.css";

interface TableRowProps {
  product: Product;
  checked: boolean;
  selected: boolean;
  onToggle: (id: number) => void;
}

export const TableRow = memo(({
  product,
  checked,
  selected = false,
  onToggle,
}: TableRowProps) => {
  return (
    <tr className={clsx(selected && styles.selected, styles.row)}>
      <td className={styles.checkbox}>
        <Checkbox checked={checked} onChange={() => onToggle(product.id)} />
      </td>
      {COLUMNS.map(({ field, hideBelow }) => (
        <td
          key={field}
          className={clsx(
            styles.cell,
            hideBelow && styles[`hideBelow${hideBelow}`],
          )}
        >
          {renderCell(product, field)}
        </td>
      ))}
      <td className={styles.cell}>
        <div className={styles.buttons}>
          <button className={styles.addButton} title="Добавить">
            <Plus size={20} color="white" />
          </button>
          <button className={styles.moreButton} title="Ещё">
            <CircleEllipsis size={27} color="var(--color-dark-gray)" />
          </button>
        </div>
      </td>
    </tr>
  );
});

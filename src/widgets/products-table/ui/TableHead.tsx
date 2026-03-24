import { Checkbox } from "@/shared/ui/Checkbox";
import { COLUMNS, type SortableColumn } from "../lib/constants";
import { MoveDown, MoveUp } from "lucide-react";
import clsx from "clsx";
import styles from "./TableHead.module.css";

interface TableHeadProps {
  checked: boolean;
  onChange: () => void;
  indeterminate: boolean;
  handleSort: (field: SortableColumn) => void;
  sortBy: SortableColumn | undefined;
  order: "asc" | "desc" | undefined;
}

export const TableHead = ({
  checked,
  onChange,
  indeterminate,
  handleSort,
  sortBy,
  order,
}: TableHeadProps) => {
  const sortArrow = (field: SortableColumn) =>
    sortBy === field &&
    (order === "asc" ? <MoveUp size={14} /> : <MoveDown size={14} />);

  return (
    <thead>
      <tr>
        <th className={clsx(styles.cell, styles.checkbox)}>
          <Checkbox
            checked={checked}
            onChange={onChange}
            indeterminate={indeterminate}
          />
        </th>
        {COLUMNS.map(({ label, field, hideBelow }, i) => (
          <th
            key={field}
            onClick={() => handleSort(field)}
            className={clsx(
              hideBelow && styles[`hideBelow${hideBelow}`],
              styles.cell,
            )}
          >
            <div className={clsx(styles.label, i === 0 && styles.labelFirst)}>
              {label}
              {sortArrow(field)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

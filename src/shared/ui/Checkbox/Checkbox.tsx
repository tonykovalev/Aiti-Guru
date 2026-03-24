import clsx from "clsx";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Minus } from "lucide-react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  checked?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, checked, indeterminate = false, ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => internalRef.current!);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    return (
      <label className={styles.checkboxLabel}>
        <input
          ref={internalRef}
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          {...props}
        />
        <div
          className={clsx(
            styles.customCheckbox,
            checked && styles.checkboxChecked,
            indeterminate && styles.checkboxIntermediate,
          )}
        >
          {indeterminate && (
            <Minus size={16} color={`var(--color-dark-blue)`} />
          )}
        </div>
        {label && <span>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

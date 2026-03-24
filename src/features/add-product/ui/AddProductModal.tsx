import { useState } from "react";
import { createPortal } from "react-dom";
import { AddProductForm } from "./AddProductForm";
import { CirclePlus } from "lucide-react";
import styles from "./AddProductModal.module.css";

export const AddProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        <CirclePlus size={20} color="white" />
        <span className={styles.add}>Добавить</span>
      </button>

      {isOpen &&
        createPortal(
          <div className={styles.wrapper} onClick={() => setIsOpen(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              <h3 className={styles.title}>Добавить товар</h3>
              <AddProductForm onClose={() => setIsOpen(false)} />
            </div>
          </div>,
          document.getElementById("modal-root")!,
        )}
    </>
  );
};

"use client";

import styles from "./modal.module.css";
import { BsXLg } from "react-icons/bs";

const Modal = ({ open, onClose, children, title }) => {
  return (
    // backdrop
    <div
      className={`${styles.container} ${
        open ? styles.active : styles.inactive
      }`}
      onClick={onClose}
    >
      {/* modal */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <p>{title}</p>
          <button onClick={onClose}>
            <BsXLg className={styles.icon} />
          </button>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};

export default Modal;

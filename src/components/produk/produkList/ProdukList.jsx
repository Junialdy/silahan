"use client";

import { useState } from "react";
import ProdukCard from "./produkCard/ProdukCard";
import styles from "./produkList.module.css";
import { BsChevronDown, BsSliders, BsSearch } from "react-icons/bs";
import Modal from "@/components/modal/Modal";
import HargaInput from "@/components/iklanForm/hargaInput/hargaInput";

const ProdukList = () => {
  const [openHarga, setOpenHarga] = useState(false);
  const [openLuas, setOpenLuas] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <button>
          <BsSliders className={styles.icons} />
        </button>
        <button onClick={() => setOpenHarga(true)}>
          Harga <BsChevronDown className={styles.icons} />
        </button>
        <button onClick={() => setOpenLuas(true)}>
          Luas Tanah <BsChevronDown className={styles.icons} />
        </button>
        <Modal
          open={openHarga}
          onClose={() => setOpenHarga(false)}
          title="Harga"
        >
          <div className={styles.modalContainer}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum a
              sequi vero quam enim at cupiditate, architecto cumque possimus
              velit. Suscipit, recusandae quas dignissimos nihil officiis saepe
              quis id ratione?
            </p>
          </div>
        </Modal>
        <Modal
          open={openLuas}
          onClose={() => setOpenLuas(false)}
          title="Luas Tanah"
        >
          <div className={styles.modalContainer}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum a
              sequi vero quam enim at cupiditate, architecto cumque possimus
              velit. Suscipit, recusandae quas dignissimos nihil officiis saepe
              quis id ratione?
            </p>
          </div>
        </Modal>
        <div className={styles.searchContainer}>
          <form action="">
            <input type="text" name="q" />
            <button type="submit">
              <BsSearch className={styles.icons} />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
        <div className={styles.item}>
          <ProdukCard />
        </div>
      </div>
    </div>
  );
};

export default ProdukList;

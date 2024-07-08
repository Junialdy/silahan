"use client";

import styles from "./singleProduct.module.css";
import {
  BsThreeDots,
  BsHeart,
  BsHeartFill,
  BsFlag,
  BsPencil,
  BsTrash,
} from "react-icons/bs";

import { useState } from "react";
import Modal from "@/components/modal/Modal";
import { deleteLahan } from "@/lib/action";
import Link from "next/link";

const Icon = ({ idlahan, slug }) => {
  const [others, setOthers] = useState(false);
  const [hapusModal, setHapusModal] = useState(false);

  const showHapusModal = () => {
    setOthers(false);
    setHapusModal(true);
  };

  const handleDelete = () => {
    setOthers(false);
    setHapusModal(false);
  };
  return (
    <>
      <div className={styles.icons}>
        <BsHeart className={styles.icon} />
      </div>
      <div
        className={styles.icons}
        onClick={() => setOthers((others) => !others)}
      >
        <BsThreeDots className={styles.icon} />
      </div>
      {others && (
        <div className={styles.otherContainer}>
          <div>
            <BsFlag />
            <span> Laporkan Iklan</span>
          </div>
          <hr />
          <Link href={`/lahan/${slug}/edit`}>
            <BsPencil />
            <span> Edit</span>
          </Link>
          <hr />
          <div onClick={showHapusModal}>
            <BsTrash />
            <span> Hapus</span>
          </div>
        </div>
      )}
      <Modal
        title="Hapus Iklan"
        open={hapusModal}
        onClose={() => setHapusModal(false)}
      >
        <div className={styles.modalContainer}>
          <span>Apakah kamu yakin ingin menghapus iklan ini?</span>
          <form action={deleteLahan}>
            <input type="hidden" name="idlahan" value={idlahan} />
            <button onClick={handleDelete}>Hapus</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Icon;

import Image from "next/image";
import styles from "./produkCard.module.css";
import Link from "next/link";

const ProdukCard = () => {
  return (
    <Link href={`/lahan/1`}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/imgCard.png  " alt="" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.price}>Rp. 25 Juta per tahun</span>
          <span className={styles.desc}>
            Disewakan Lahan Sawah di Kec. Jatidingin
          </span>
          <span className={styles.location}>Aceh, Lhokseumawe</span>
          <span className={styles.detail}>LT : 12.000 m²</span>
        </div>
      </div>
    </Link>
  );
};

export default ProdukCard;

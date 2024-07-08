import Image from "next/image";
import styles from "./produkCard.module.css";
import Link from "next/link";

const ProdukCard = ({ lahan }) => {
  return (
    <Link href={`/lahan/${lahan.slug}`}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/imgCard.png"
            alt=""
            fill
            className={styles.img}
            sizes="(max-width: 640px) 80vw,(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.price}>
            Rp.{" "}
            {(lahan.hargamin / 1000000).toLocaleString("id-ID", {
              maximumFractionDigits: 2,
            })}{" "}
            Juta per {lahan.lamasewa} bulan
          </span>
          <span className={styles.desc}>{lahan.judul}</span>
          <span className={styles.location}>
            {lahan.kecamatan}, {lahan.kabkota}, {lahan.provinsi}
          </span>
          <span className={styles.detail}>
            LT : {lahan.luas.toLocaleString("id-ID")} m²
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProdukCard;

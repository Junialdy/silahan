import styles from "./produk.module.css";
import ProdukList from "./produkList/ProdukList";

const Produk = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Jelajahi Lahan Pertanian yang Tersedia</h2>
        <p className={styles.desc}>
          Temukan lahan pertanian ideal Anda dari berbagai pilihan yang
          tersedia. <br />
          Mulai petani-petani sukses di sini!
        </p>
      </div>
      <ProdukList />
    </div>
  );
};

export default Produk;

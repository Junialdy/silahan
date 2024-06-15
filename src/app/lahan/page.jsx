import ProdukList from "@/components/produk/produkList/ProdukList";
import styles from "./lahan.module.css";

const LahanPage = () => {
  return (
    <div className={styles.container}>
      <h1>Cari Lahan</h1>
      <hr />
      <ProdukList />
    </div>
  );
};

export default LahanPage;

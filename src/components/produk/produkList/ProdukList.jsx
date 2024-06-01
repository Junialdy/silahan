import ProdukCard from "./produkCard/ProdukCard";
import styles from "./produkList.module.css";

const ProdukList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <button>ASC</button>
        <select name="kecamatan">
          <option value="kecamatan">Kecamatan</option>
        </select>
        <select name="kabupatenkota">
          <option value="kabupatenkota">Kabupaten/Kota</option>
        </select>
        <select name="provinsi">
          <option value="provinsi">Provinsi</option>
        </select>
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

import ProdukCard from "./produkCard/ProdukCard";
import styles from "./produkList.module.css";
import Filter from "./filter/Filter";
import { getLahans } from "@/lib/data";

const ProdukList = async () => {
  const lahans = await getLahans();
  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.list}>
        {/* {console.log(lahans[0].id)} */}
        {lahans.map((lahan) => (
          <div className={styles.item} key={lahan.id}>
            <ProdukCard lahan={lahan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukList;

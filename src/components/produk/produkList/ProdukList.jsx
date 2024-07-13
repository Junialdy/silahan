import styles from "./produkList.module.css";
import Filter from "./filter/Filter";
import { getLahans } from "@/lib/data";
import ProdukRender from "./produkRender/ProdukRender";

const ProdukList = async () => {
  const lahans = await getLahans();
  return (
    <div className={styles.container}>
      <Filter />
      <ProdukRender lahans={JSON.parse(JSON.stringify(lahans))} />
    </div>
  );
};

export default ProdukList;

import styles from "./produkList.module.css";
import Filter from "./filter/Filter";
import ProdukRender from "./produkRender/ProdukRender";
import { fetchLahans } from "@/lib/data";

const ProdukList = async () => {
  const lahans = await fetchLahans();
  // const lahans = await getLahans();
  return (
    <div className={styles.container}>
      <Filter />
      <ProdukRender lahans={JSON.parse(JSON.stringify(lahans))} />
    </div>
  );
};

export default ProdukList;

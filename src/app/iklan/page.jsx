import IklanForm from "@/components/iklanForm/iklanForm";
import styles from "./iklan.module.css";
import { addLahan } from "@/lib/action";

const IklanPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Pengisian Data Lahan</h1>
      </div>
      <IklanForm aksi={addLahan} />
    </div>
  );
};

export default IklanPage;

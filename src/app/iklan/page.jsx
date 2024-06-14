import IklanForm from "@/components/iklanForm/iklanForm";
import styles from "./iklan.module.css";

const IklanPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Pengisian Data Lahan</h1>
      </div>
      <IklanForm />
    </div>
  );
};

export default IklanPage;

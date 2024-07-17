import IklanForm from "@/components/iklanForm/iklanForm";
import styles from "./edit.module.css";
import { updateLahan } from "@/lib/action";
import fetchLahan from "@/lib/data";

const EditPage = async ({ params }) => {
  const { slug } = params;
  const data = await fetchLahan(slug);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit Data Lahan</h1>
      </div>
      <IklanForm data={data} aksi={updateLahan} />
    </div>
  );
};

export default EditPage;

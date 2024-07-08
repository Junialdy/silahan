import IklanForm from "@/components/iklanForm/iklanForm";
import styles from "./edit.module.css";
import { getLahan } from "@/lib/data";
import { addIklan } from "@/lib/action";

const EditPage = async ({ params }) => {
  const { slug } = params;
  const data = await getLahan(slug);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit Data Lahan</h1>
      </div>
      <IklanForm data={JSON.parse(JSON.stringify(data))} aksi={addIklan} />
    </div>
  );
};

export default EditPage;

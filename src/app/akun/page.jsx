import { fetchLahans } from "@/lib/data";
import styles from "./akun.module.css";
import Content from "./Content";

const AkunPage = async () => {
  const lahans = await fetchLahans();
  const session = await auth();

  return (
    <div className={styles.container}>
      <h1>My Profile</h1>
      <hr />
      <Content lahans={data} />
    </div>
  );
};

export default AkunPage;

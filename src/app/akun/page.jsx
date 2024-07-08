import { getLahans } from "@/lib/data";
import styles from "./akun.module.css";
import Content from "./Content";

const AkunPage = async () => {
  const lahans = await getLahans();
  const data = JSON.parse(JSON.stringify(lahans));

  return (
    <div className={styles.container}>
      <h1>My Profile</h1>
      <hr />
      <Content lahans={data} />
    </div>
  );
};

export default AkunPage;

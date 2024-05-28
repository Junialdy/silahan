import Produk from "@/components/produk/Produk";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Solusi Online untuk Petani dan Pemilik Lahan
          </h1>
          <p className={styles.desc}>
            Temukan dan sewakan lahan pertanian dengan mudah melalui platform
            web kami. Mempercepat proses, meningkatkan hasil, dan menghubungkan
            Anda dengan peluang baru dalam pertanian. Bergabunglah sekarang
            untuk memulai!
          </p>
        </div>
        <div className={styles.imgContainer}></div>
      </div>
      <Produk />
    </>
  );
};

export default Home;

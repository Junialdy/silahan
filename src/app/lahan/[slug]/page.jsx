import Image from "next/image";
import styles from "./singleProduct.module.css";

const singleProductPage = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.parentImgContainer}>
            <Image src="/imgCard.png" alt="" fill className={styles.img} />
          </div>
          <div className={styles.otherImgContainer}>
            <div className={styles.childImgContainer}>
              <Image src="/imgCard.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.childImgContainer}>
              <Image src="/imgCard.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.childImgContainer}>
              <Image src="/imgCard.png" alt="" fill className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.top}>
            <div className={styles.headline}>
              <h1 className={styles.title}>Tanah Sawah Godzilla</h1>
              <p className={styles.price}>
                Rp 10.900.000 <span className={styles.time}>/ 6 Bulan</span>
              </p>
            </div>
            <div className={styles.details}>
              <p>
                Luas: <span>5.700m²</span>
              </p>
              <p>
                Lokasi: <span>Muara Satu, Lhokseumawe, Aceh</span>
              </p>
              <p>
                Sertifikasi: <span>SHM - Sertifikat Hak Milik</span>
              </p>
            </div>
            <div className={styles.profile}>
              <Image
                className={styles.avatar}
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
              />
              <p className={styles.username}>Muhammad Abrar Siddiq</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button>Hubungi Penjual</button>
            <button>WhatsApp</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.bottomTitle}>Deskripsi</h2>
        <hr />
        <p className={styles.bottomDesc}>
          Dijual tanah murah dengan view gunung Arjuna di lokasi strategis Kota
          Batu. Luas 5.700m², SHM, harga 3,3 juta/m². Dekat jalan raya, wisata,
          pusat perbelanjaan, sekolah, tempat ibadah, dan kuliner. Hubungi:
          Gresia Dewi Global sukses properti. Kode iklan: bude pipa Vr L2 7419
          Apr24.
        </p>
      </div>
    </>
  );
};

export default singleProductPage;

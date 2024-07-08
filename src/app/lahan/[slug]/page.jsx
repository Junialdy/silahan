import Image from "next/image";
import styles from "./singleProduct.module.css";
import { getLahan } from "@/lib/data";

import Icon from "./Icon";

const singleProductPage = async ({ params }) => {
  const { slug } = params;

  const lahan = await getLahan(slug);

  return (
    <>
      {/* {console.log(lahan.desc)} */}
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
            <>
              <h1 className={styles.title}>{lahan.judul}</h1>
              <p className={styles.price}>
                Rp {lahan.hargamin.toLocaleString("id-ID")}{" "}
                <span className={styles.time}>/ {lahan.lamasewa} Bulan</span>
              </p>
            </>
            <div className={styles.details}>
              <p>
                Luas: <span>{lahan.luas.toLocaleString("id-ID")} m²</span>
              </p>
              <p>
                Lokasi:{" "}
                <span>
                  {lahan.kecamatan}, {lahan.kabkota}, {lahan.provinsi}
                </span>
              </p>
              <p>
                Sertifikasi: <span>SHM - Sertifikat Hak Milik</span>
              </p>
            </div>
            <div className={styles.middle}>
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
              <Icon idlahan={lahan.id} slug={slug} />
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
        <p className={styles.bottomDesc}>{lahan.desc}</p>
      </div>
    </>
  );
};

export default singleProductPage;

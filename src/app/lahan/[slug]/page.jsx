import Image from "next/image";
import styles from "./singleProduct.module.css";

import Icon from "./Icon";
import Slider from "@/components/slider/Slider";
import { auth } from "@/lib/auth";
import { fetchLahan, getUser } from "@/lib/data";

const singleProductPage = async ({ params }) => {
  const { slug } = params;

  const lahan = await fetchLahan(slug);
  const owner = await getUser(lahan.userId);
  // console.log(session.user.id);
  return (
    <>
      {/* {console.log(lahan.desc)} */}
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.sliderContainer}>
            <Slider />
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
                  src={owner.img || "/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                />
                <p className={styles.username}>{owner.name}</p>
              </div>
              <Icon idlahan={lahan._id} slug={slug} />
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

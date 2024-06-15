// "use client";

import HargaInput from "./hargaInput/hargaInput";
import ImgInput from "./imgInput/imgInput";
import ProfileInput from "./profileInput/profileInput";
import styles from "./iklanForm.module.css";

import { addIklan } from "@/lib/action";

const IklanForm = () => {
  return (
    <form action={addIklan} className={styles.form}>
      <div className={styles.formSection}>
        <h2>Detail Lahan</h2>
        <hr />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <label>
              Luas lahan (m²)<em>*</em>
              <input type="text" name="luas" placeholder="cth: 5700" />
            </label>
            <label>
              Judul iklan<em>*</em>
              <input
                type="text"
                name="judul"
                placeholder="cth: Disewakan Lahan Sawah di Kec. Jatidingin"
              />
            </label>
            <label>
              Deskripsi iklan<em>*</em>
              <textarea
                type="text"
                name="desc"
                placeholder="cth: Dijual tanah murah dengan view gunung Arjuna di lokasi strategis Kota Batu. Luas 5.700m², SHM, harga 3,3 juta/m². Dekat jalan raya, wisata, pusat perbelanjaan, sekolah, tempat ibadah, dan kuliner. Hubungi: Gresia Dewi Global sukses properti. Kode iklan: bude pipa Vr L2 7419 Apr24."
                rows={10}
              />
            </label>
          </div>
          <div className={styles.formInputCol}>
            <label>
              Jenis sertifikasi<em>*</em>
              <br />
              <label htmlFor="shm">
                <input
                  type="radio"
                  id="shm"
                  name="sertifikasi"
                  value="shm"
                  defaultChecked
                />
                <span>SHM - Sertifikat Hak Milik</span>
              </label>
              <br />
              <label htmlFor="hgb">
                <input type="radio" id="hgb" name="sertifikasi" value="hgb" />
                <span>HGB - Hak Guna Bangun</span>
              </label>
              <br />
              <label htmlFor="lainnya">
                <input
                  type="radio"
                  id="lainnya"
                  name="sertifikasi"
                  value="lainnya"
                />
                <span>Lainnya (PPJB, Girik, Adat, dll)</span>
              </label>
            </label>
            <ImgInput />
          </div>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Detail Harga</h2>
        <hr />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <HargaInput />
            <label>
              Lama Sewa (Bulan)<em>*</em>
              <input type="text" name="durasi" placeholder="cth: 6" />
            </label>
          </div>
          <div className={styles.formInputCol}></div>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Detail Lokasi</h2>
        <hr />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <label>
              Provinsi<em>*</em>
              <select name="provinsi">
                <option value="aceh">Aceh</option>
                <option value="sumut">Sumatera Utara</option>
                <option value="sumbar">Sumatera Barat</option>
                <option value="sumsel">Sumatera Selatan</option>
                <option value="riau">Riau</option>
                <option value="jambi">Jambi</option>
                <option value="bengkulu">Bengkulu</option>
                <option value="bangka">Bangka Belitung</option>
                <option value="lampung">Lampung</option>
              </select>
            </label>
            <label>
              Kabupaten/Kota<em>*</em>
              <select name="kabupaten">
                <option value="lhokseumawe">Lhokseumawe</option>
                <option value="acehbarat">Aceh Barat</option>
                <option value="acehjaya">Aceh Jaya</option>
                <option value="acehtamiang">Aceh Tamiang</option>
                <option value="acehtengah">Aceh Tengah</option>
                <option value="acehutara">Aceh Utara</option>
                <option value="acehutara">Pidie</option>
              </select>
            </label>
            <label>
              Kecamatan<em>*</em>
              <select name="kecamatan">
                <option value="bandasakti">Banda Sakti</option>
                <option value="blangmangat">Blang Mangat</option>
                <option value="muaradua">Muara Dua</option>
                <option value="muarasatu">Muara Satu</option>
              </select>
            </label>
          </div>
          <div className={styles.formInputCol}></div>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Detail Kontak</h2>
        <hr />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <ProfileInput />
            <label>
              Nomor telepon<em>*</em>
              <input type="text" name="nohp" placeholder="cth: 081234567890" />
            </label>
            <label>
              Nomor whatsapp<em>*</em>
              <input type="text" name="nowa" placeholder="cth: 081234567890" />
            </label>
          </div>
          <div className={styles.formInputCol}></div>
        </div>
      </div>
      <hr />
      <button className={styles.button} type="submit">
        Pasang Iklan
      </button>
      {/* <div className={styles.formSection}></div>
      <div className={styles.formSection}></div>
      <div className={styles.formSection}></div> */}
    </form>
  );
};

export default IklanForm;

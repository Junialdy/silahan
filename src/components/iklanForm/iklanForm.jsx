// "use client";

import HargaInput from "./hargaInput/hargaInput";
import ImgInput from "./imgInput/imgInput";
import ProfileInput from "./profileInput/profileInput";
import styles from "./iklanForm.module.css";

const IklanForm = ({ data, aksi }) => {
  return (
    <form action={aksi} className={styles.form}>
      <div className={styles.formSection}>
        <h2>Detail Lahan</h2>
        <hr />
        <input type="hidden" name="id" defaultValue={data?._id || ""} />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <label>
              Luas lahan (m²)<em>*</em>
              <input
                required
                type="number"
                name="luas"
                placeholder="cth: 5700"
                defaultValue={data?.luas || ""}
              />
            </label>
            <label>
              Judul iklan<em>*</em>
              <input
                required
                type="text"
                name="judul"
                placeholder="cth: Disewakan Lahan Sawah di Kec. Jatidingin"
                defaultValue={data?.judul || ""}
              />
            </label>
            <label>
              Deskripsi iklan<em>*</em>
              <textarea
                required
                type="text"
                name="desc"
                placeholder="cth: Dijual tanah murah dengan view gunung Arjuna di lokasi strategis Kota Batu. Luas 5.700m², SHM, harga 3,3 juta/m². Dekat jalan raya, wisata, pusat perbelanjaan, sekolah, tempat ibadah, dan kuliner. Hubungi: Gresia Dewi Global sukses properti. Kode iklan: bude pipa Vr L2 7419 Apr24."
                rows={10}
                defaultValue={data?.desc || ""}
              />
            </label>
          </div>
          <div className={styles.formInputCol}>
            <label>
              Jenis sertifikasi<em>*</em>
              <br />
              <label htmlFor="shm">
                <input
                  required
                  type="radio"
                  id="shm"
                  name="sertifikat"
                  value="shm"
                  defaultChecked={data?.sertifikat == "shm" || true}
                />
                <span>SHM - Sertifikat Hak Milik</span>
              </label>
              <br />
              <label htmlFor="hgb">
                <input
                  required
                  type="radio"
                  id="hgb"
                  name="sertifikat"
                  value="hgb"
                  defaultChecked={data?.sertifikat == "hgb"}
                />
                <span>HGB - Hak Guna Bangun</span>
              </label>
              <br />
              <label htmlFor="lainnya">
                <input
                  required
                  type="radio"
                  id="lainnya"
                  name="sertifikat"
                  value="lainnya"
                  defaultChecked={data?.sertifikat == "lainnya"}
                />
                <span>Lainnya (PPJB, Girik, Adat, dll)</span>
              </label>
            </label>
            <ImgInput data={data} />
          </div>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Detail Harga</h2>
        <hr />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <HargaInput data={data} />
            <label>
              Lama Sewa (Bulan)<em>*</em>
              <input
                required
                type="number"
                name="lamasewa"
                placeholder="cth: 6"
                defaultValue={data?.lamasewa || ""}
              />
            </label>
          </div>
          {/* DIV FOR SPLIT */}
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
              <select name="provinsi" defaultValue={data?.provinsi || ""}>
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
              <select name="kabkota" defaultValue={data?.kabkota || ""}>
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
              <select name="kecamatan" defaultValue={data?.kecamatan || ""}>
                <option value="bandasakti">Banda Sakti</option>
                <option value="blangmangat">Blang Mangat</option>
                <option value="muaradua">Muara Dua</option>
                <option value="muarasatu">Muara Satu</option>
              </select>
            </label>
          </div>
          {/* DIV FOR SPLIT */}
          <div className={styles.formInputCol}></div>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Detail Kontak</h2>
        <hr />
        <div className={styles.formInput}>
          <div className={styles.formInputCol}>
            <ProfileInput data={data} />
          </div>
          {/* DIV FOR SPLIT */}
          <div className={styles.formInputCol}></div>
        </div>
      </div>
      <hr />
      <button className={styles.button} type="submit">
        Pasang Iklan
      </button>
    </form>
  );
};

export default IklanForm;

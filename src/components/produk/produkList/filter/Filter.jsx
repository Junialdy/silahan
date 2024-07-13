"use client";

import { useState, useCallback, useEffect } from "react";
import { BsChevronDown, BsSliders, BsSearch } from "react-icons/bs";
import { useSearchParams, useRouter } from "next/navigation";
import Modal from "@/components/modal/Modal";
import styles from "../produkList.module.css";
import ReactSlider from "react-slider";

const Filter = () => {
  const MIN_HARGA = 0,
    MAX_HARGA = 999;
  const MIN_LAHAN = 100,
    MAX_LAHAN = 9999;
  const [openHarga, setOpenHarga] = useState(false);
  const [openLuas, setOpenLuas] = useState(false);
  const [harga, setHarga] = useState([MIN_HARGA, MAX_HARGA]);
  const [lahan, setLahan] = useState([MIN_LAHAN, MAX_LAHAN]);
  const [cari, setCari] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      setOpenHarga(false);
      setOpenLuas(false);
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // useEffect(() => {
  //   const timeOutId = setTimeout(
  //     () =>
  //       searchParams.get("q") &&
  //       router.push("/lahan?" + createQueryString("q", cari)),
  //     1000
  //   );
  //   return () => clearTimeout(timeOutId);
  // }, [cari]);

  return (
    <div className={styles.filters}>
      {/* {console.log(searchParams.has("edit"))} */}
      <button>
        <BsSliders className={styles.icons} />
      </button>
      <button onClick={() => setOpenHarga(true)}>
        Harga <BsChevronDown className={styles.icons} />
      </button>
      <button onClick={() => setOpenLuas(true)}>
        Luas Tanah <BsChevronDown className={styles.icons} />
      </button>
      <Modal open={openHarga} onClose={() => setOpenHarga(false)} title="Harga">
        <div className={styles.modalContainer}>
          <p className={styles.sliderText}>
            Rp {harga[0]} Juta - {harga[1]} Juta
          </p>
          <ReactSlider
            className={styles.slider}
            thumbClassName={styles.sliderThumb}
            trackClassName={styles.sliderTrack}
            min={MIN_HARGA}
            max={MAX_HARGA}
            defaultValue={[MIN_HARGA, MAX_HARGA]}
            step={10}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            pearling
            minDistance={50}
            onChange={setHarga}
          />
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push("/lahan?" + createQueryString("harga", harga));
            }}
          >
            Filter
          </button>
        </div>
      </Modal>
      <Modal
        open={openLuas}
        onClose={() => setOpenLuas(false)}
        title="Luas Tanah"
      >
        <div className={styles.modalContainer}>
          <p className={styles.sliderText}>
            {lahan[0]} m² - {lahan[1]} m²
          </p>
          <ReactSlider
            className={styles.slider}
            thumbClassName={styles.sliderThumb}
            trackClassName={styles.sliderTrack}
            min={MIN_LAHAN}
            max={MAX_LAHAN}
            defaultValue={[MIN_LAHAN, MAX_LAHAN]}
            step={100}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            pearling
            minDistance={50}
            onChange={setLahan}
          />
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push("/lahan?" + createQueryString("lahan", lahan));
            }}
          >
            Filter
          </button>
        </div>
      </Modal>
      <div className={styles.searchContainer}>
        <input
          type="search"
          onChange={(e) => setCari(e.target.value)}
          defaultValue={searchParams.get("q") || ""}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? router.push("/lahan?" + createQueryString("q", cari))
              : ""
          }
        />
        <button
          type="submit"
          onClick={() => {
            router.push("/lahan?" + createQueryString("q", cari));
          }}
        >
          <BsSearch className={styles.icons} />
        </button>
      </div>
    </div>
  );
};

export default Filter;

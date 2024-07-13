"use client";

import styles from "./../produkList.module.css";
import ProdukCard from "./../produkCard/ProdukCard";
import { Suspense, useMemo } from "react";
import Loading from "@/app/loading";
import { useSearchParams } from "next/navigation";

const ProdukRender = ({ lahans }) => {
  const searchParams = useSearchParams();
  const [hargamin, hargamax] = searchParams.get("harga")?.split(",") || [
    "0",
    "999",
  ];
  const [lahanmin, lahanmax] = searchParams.get("lahan")?.split(",") || [
    "100",
    "9999",
  ];
  const lahanQ = searchParams.get("lahan")?.split(",") || ["100", "9999"];
  const cariQ = searchParams.get("q") || "";

  const filteredLahans = useMemo(() => {
    return lahans.filter((item) => {
      return (
        hargamin.concat("000000") <= item.hargamin &&
        hargamax.concat("000000") >= item.hargamax &&
        lahanmin <= item.luas &&
        lahanmax >= item.luas &&
        item.judul.toLowerCase().includes(cariQ)
      );
    });
  }, [hargamin, hargamax, lahanQ, cariQ]);
  return (
    <div className={styles.list}>
      {/* {console.log(lahanmin)} */}
      {filteredLahans.map((lahan) => (
        <div className={styles.item} key={lahan._id}>
          <Suspense fallback={<Loading />}>
            <ProdukCard lahan={lahan} />
          </Suspense>
        </div>
      ))}
      {filteredLahans.length == 0 && (
        <p className={styles.emptyList}>Lahan Tidak ditemukan</p>
      )}
    </div>
  );
};

export default ProdukRender;

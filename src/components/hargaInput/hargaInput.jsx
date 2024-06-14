"use client";

import { useState } from "react";

const HargaInput = () => {
  const [hargaFix, setHargaFix] = useState(true);
  return (
    <>
      <label>
        Jenis Harga<em>*</em>
        <br />
        <label htmlFor="fix">
          <input
            type="radio"
            id="fix"
            name="jenisharga"
            value="fix"
            defaultChecked
            onChange={() => setHargaFix((hargaFix) => !hargaFix)}
          />
          <span>Harga Tetap</span>
        </label>
        <label htmlFor="range">
          <input
            type="radio"
            id="range"
            name="jenisharga"
            value="range"
            onChange={() => setHargaFix((hargaFix) => !hargaFix)}
          />
          <span>Harga Kisaran</span>
        </label>
      </label>
      {hargaFix ? (
        <label>
          Harga (Rp)<em>*</em>
          <input type="text" name="harga" placeholder="cth: 12.000.000" />
        </label>
      ) : (
        <>
          <label>
            Harga Minimal (Rp)<em>*</em>
            <input type="text" name="hargamin" placeholder="cth: 12.000.000" />
          </label>
          <label>
            Harga Maximal (Rp)<em>*</em>
            <input type="text" name="hargamax" placeholder="cth: 12.000.000" />
          </label>
        </>
      )}
    </>
  );
};

export default HargaInput;

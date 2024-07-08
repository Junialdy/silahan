"use client";

import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const HargaInput = ({ data }) => {
  const [hargaFix, setHargaFix] = useState(
    data?.jenisharga == undefined
      ? true
      : data?.jenisharga == "fix"
      ? true
      : false
  );
  return (
    <>
      <label>
        Jenis Harga<em>*</em>
        <br />
        <label htmlFor="fix">
          <input
            required
            type="radio"
            id="fix"
            name="jenisharga"
            value="fix"
            defaultChecked={data?.jenisharga == "fix" || true}
            onChange={() => setHargaFix((hargaFix) => !hargaFix)}
          />
          <span>Harga Tetap</span>
        </label>
        <label htmlFor="range">
          <input
            required
            type="radio"
            id="range"
            name="jenisharga"
            value="range"
            defaultChecked={data?.jenisharga == "range" || ""}
            onChange={() => setHargaFix((hargaFix) => !hargaFix)}
          />
          <span>Harga Kisaran</span>
        </label>
      </label>
      {hargaFix ? (
        <label>
          Harga (Rp)<em>*</em>
          <CurrencyInput
            required
            name="harga"
            placeholder="cth: 12.000.000"
            decimalSeparator=","
            groupSeparator="."
            defaultValue={data?.hargamin || ""}
          />
        </label>
      ) : (
        <>
          <label>
            Harga Minimal (Rp)<em>*</em>
            <CurrencyInput
              required
              name="hargamin"
              placeholder="cth: 12.000.000"
              decimalSeparator=","
              groupSeparator="."
              defaultValue={data?.hargamin || ""}
            />
          </label>
          <label>
            Harga Maximal (Rp)<em>*</em>
            <CurrencyInput
              required
              name="hargamax"
              placeholder="cth: 12.000.000"
              decimalSeparator=","
              groupSeparator="."
              defaultValue={data?.hargamax || ""}
            />
          </label>
        </>
      )}
    </>
  );
};

export default HargaInput;

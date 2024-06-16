"use client";

import Image from "next/image";
import styles from "./akun.module.css";
import { BsPencil } from "react-icons/bs";
import { userInfo } from "@/lib/data";

import { useState } from "react";
import ProdukCard from "@/components/produk/produkList/produkCard/ProdukCard";

const DataCol = ({ label, value, isEdit, type }) => {
  return (
    <div className={styles.dataContainer}>
      <p className={styles.dataLabel}>{label}</p>
      {isEdit ? (
        <input
          name={label.toLowerCase().replace(/\s/g, "")}
          type={type || "text"}
          defaultValue={value}
        />
      ) : (
        <p className={styles.dataValue}>{value}</p>
      )}
    </div>
  );
};

const SectionDetail = ({ title, children, data }) => {
  const handleEdit = async (e) => {
    // "use server";
    e.preventDefault();

    const formData = new FormData(e.target);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.detailSection}>
        {title && <h2>{title}</h2>}
        <form className={styles.desc} onSubmit={handleEdit}>
          {data && (
            <>
              <div className={styles.info}>
                <div className={styles.leftInfo}>
                  <DataCol label="Nama" value={data.nama} isEdit={edit} />
                  <DataCol label="Nomor HP" value={data.nohp} isEdit={edit} />
                </div>
                <div className={styles.rightInfo}>
                  <DataCol
                    label="Email"
                    value={data.email}
                    isEdit={edit}
                    type="email"
                  />
                  <DataCol label="Nomor WA" value={data.nowa} isEdit={edit} />
                </div>
              </div>
              {edit && (
                <div className={styles.buttons}>
                  <button onClick={() => setEdit(false)}>Cancel</button>
                  <button>Save</button>
                </div>
              )}
            </>
          )}
        </form>
        {children}
      </div>
      <div className={styles.editSection}>
        <button onClick={() => setEdit((edit) => !edit)}>
          <BsPencil /> Edit
        </button>
      </div>
    </div>
  );
};

const AkunPage = () => {
  const [open, setOpen] = useState(1);

  return (
    <div className={styles.container}>
      <h1>My Profile</h1>
      <hr />
      <div className={styles.content}>
        <div className={styles.sideNav}>
          <div
            className={`${open == 1 && styles.sideNavActive}`}
            onClick={() => setOpen(1)}
          >
            Informasi User
          </div>
          <div
            className={`${open == 2 && styles.sideNavActive}`}
            onClick={() => setOpen(2)}
          >
            Lahan User
          </div>
        </div>
        <div className={styles.details}>
          {open == 1 && (
            <>
              <SectionDetail>
                <div className={styles.profileContainer}>
                  <Image
                    src="/noavatar.png"
                    width={90}
                    height={90}
                    alt="Profile Picture"
                    className={styles.profilePic}
                  />
                  <div className={styles.userDetails}>
                    <p className={styles.userName}>John Doe</p>
                    <p className={styles.userRole}>Landowner</p>
                  </div>
                </div>
              </SectionDetail>
              <SectionDetail title="Informasi Personal" data={userInfo} />
              <SectionDetail title="Data lainnya">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                exercitationem nostrum magni ullam consequuntur similique, ut
                officiis obcaecati impedit dolorem praesentium quibusdam commodi
                libero unde ipsum vero ipsam a atque.
              </SectionDetail>
            </>
          )}
          {open == 2 && (
            <>
              <SectionDetail title="Data Lahan">
                <div className={styles.lahanUser}>
                  <div className={styles.lahanContainer}>
                    <ProdukCard />
                  </div>
                  <div className={styles.lahanContainer}>
                    <ProdukCard />
                  </div>
                  <div className={styles.lahanContainer}>
                    <ProdukCard />
                  </div>
                </div>
              </SectionDetail>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AkunPage;

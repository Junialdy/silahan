"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const left = [
  {
    title: "Beranda",
    path: "/",
  },
  {
    title: "Lahan Sewa",
    path: "/lahan",
  },
  {
    title: "Hubungi Kami",
    path: "/kontak",
  },
];

const right = [
  {
    title: "Pasang Iklan",
    path: "/iklan",
  },
  {
    title: "Akun",
    path: "/akun",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Image src="/logo.png" alt="" width={125} height={45} />
        {left.map((link) => (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        ))}
        <div>
          <input type="search" name="searchbar" className={styles.searchBar} />
          <span>X</span>
        </div>
      </div>
      <div className={styles.buttons}>
        {right.map((link) => (
          <Link href={link.path} key={link.title} className={styles.button}>
            {link.title}
          </Link>
        ))}
      </div>
      <Image
        src="/logo.png"
        alt=""
        width={125}
        height={45}
        className={styles.menuLogo}
      />
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {left.map((link) => (
            <Link href={link.path} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

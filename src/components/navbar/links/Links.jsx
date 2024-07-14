"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./links.module.css";
import Image from "next/image";

const links = [
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
  // {
  //   title: "Pasang Iklan",
  //   path: "/iklan",
  // },
  // {
  //   title: "Akun",
  //   path: "/akun",
  // },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const isAdmin = false;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.path} key={link.title} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Link href="/iklan" className={styles.ctaDark}>
          Pasang Iklan
        </Link>
        {isAdmin ? (
          <Link href="/admin" className={styles.ctaWhite}>
            Admin
          </Link>
        ) : (
          <></>
        )}
        {session ? (
          <Link href="/akun" className={styles.link}>
            <Image
              className={styles.profilePic}
              src="https://avatars.githubusercontent.com/u/100945120?v=4"
              alt="Profile Picture"
              width={50}
              height={50}
            />
          </Link>
        ) : (
          <Link href="/login" className={styles.ctaWhite}>
            Login
          </Link>
        )}
      </div>
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
          {links.map((link) => (
            <Link href={link.path} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

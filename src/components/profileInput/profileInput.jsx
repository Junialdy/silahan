"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./profileInput.module.css";

const ProfileInput = () => {
  const [files, setFiles] = useState();
  const [profilePreview, setProfilePreview] = useState();

  useEffect(() => {
    if (!files) return;
    // console.log(files);
    let temp = URL.createObjectURL(files[0]);
    setProfilePreview(temp);

    // free memory
    return () => {
      URL.revokeObjectURL(temp[0]);
    };
  }, [files]);
  return (
    <div className={styles.container}>
      <label>
        <Image
          src={profilePreview ? profilePreview : "/noavatar.png"}
          alt=""
          width={95}
          height={95}
        />
        {/* <div className={styles.photoContainer}>
        </div> */}
        <input
          type="file"
          name="userimg"
          accept="image/jpg, image/jpeg, image/png"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFiles(e.target.files);
            }
          }}
        />
      </label>
      <label className={styles.fullwidth}>
        Nama<em>*</em>
        <input type="text" name="username" placeholder="cth: John doe" />
      </label>
    </div>
  );
};

export default ProfileInput;

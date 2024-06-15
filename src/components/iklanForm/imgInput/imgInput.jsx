"use client";

import styles from "./imgInput.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

const ImgInput = () => {
  const [files, setFiles] = useState();
  const [imgPreviews, setImgPreviews] = useState();
  const [vidPreviews, setVidPreviews] = useState();

  //   rendering previews
  useEffect(() => {
    if (!files) return;
    let img = [];
    let vid = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image")) {
        img.push(URL.createObjectURL(files[i]));
      } else {
        vid.push(URL.createObjectURL(files[i]));
      }
    }
    setImgPreviews(img.length ? img : "");
    setVidPreviews(vid.length ? vid : "");
    const objectUrls = img.concat(vid);
    // console.log(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);
  return (
    <>
      <label>
        Gambar/Video lahan<em>*</em>
        <input
          type="file"
          name="media"
          accept="image/jpg, image/jpeg, image/png, video/mp4, video/mov"
          multiple
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFiles(e.target.files);
            }
          }}
        />
      </label>
      <div className={styles.fileList}>
        {imgPreviews && (
          <>
            <p>Gambar</p>
            <div className={styles.imgList}>
              {imgPreviews.map((pic) => {
                return (
                  <div className={styles.fileContainer} key={pic}>
                    <Image src={pic} alt="" fill />
                  </div>
                );
              })}
            </div>
          </>
        )}
        {vidPreviews && (
          <>
            <p>Video</p>
            <div className={styles.imgList}>
              {vidPreviews.map((vid) => {
                return (
                  <div className={styles.fileContainer} key={vid}>
                    <video className={styles.fileContainer} src={vid} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImgInput;

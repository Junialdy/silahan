"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Lahan } from "./models";
import { connectToDb } from "./utils";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { signIn, signOut } from "./auth";

export const addIklan = async (formData) => {
  // const medias = formData.getAll("media");
  // const arrImg = [];
  // const nanoid = customAlphabet("1234567890abcdef", 5);
  // const idSlug = nanoid();
  // medias.forEach(async (media) => {
  //   await media
  //     .arrayBuffer()
  //     .then((result) =>
  //       fs.writeFile(
  //         `${process.cwd()}/tmp/${idSlug}-${media.name}`,
  //         Buffer.from(result)
  //       )
  //     );
  // });
  // medias.forEach((media) => {
  //   arrImg.push(`${process.cwd()}/tmp/${idSlug}-${media.name}`);
  // });

  // medias.forEach((media) => {});
  // console.log(arrImg);
  // fs.unlink(`${process.cwd()}/public/tmp/6a8a1-Chaos.png`);
  console.log(Object.fromEntries(formData));
  const media = formData.getAll("media");
  if (media[0].size > 0) {
    console.log(`media: ${media}`);
  } else {
    console.log(`media: isEmpty`);
  }
};

export const addLahan = async (formData) => {
  const {
    luas,
    judul,
    desc,
    sertifikat,
    userimg,
    jenisharga,
    harga,
    lamasewa,
    provinsi,
    kabkota,
    kecamatan,
    username,
    nohp,
    nowa,
  } = Object.fromEntries(formData);

  const nanoid = customAlphabet("1234567890abcdef", 5);
  const slug = judul
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .concat(`-${nanoid()}`);

  const medias = formData.getAll("media");
  const arrImg = [];
  const idSlug = nanoid();
  medias.forEach(async (media) => {
    await media
      .arrayBuffer()
      .then((result) =>
        fs.writeFile(
          `${process.cwd()}/public/tmp/${idSlug}-${media.name}`,
          Buffer.from(result)
        )
      );
  });
  medias.forEach((media) => {
    arrImg.push(`/tmp/${idSlug}-${media.name}`);
  });

  try {
    connectToDb();
    const newLahan = new Lahan({
      luas,
      judul,
      desc,
      sertifikat,
      media: arrImg,
      jenisharga,
      hargamin: harga.replace(/\./g, ""),
      hargamax: harga.replace(/\./g, ""),
      lamasewa,
      provinsi,
      kabkota,
      kecamatan,
      userId: "667029651bff571377669c35",
      slug,
    });
    await newLahan.save();
    console.log("saved to db");
    revalidatePath("/lahan");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
  redirect("/lahan");
};

export const updateLahan = async (formData) => {
  const {
    luas,
    judul,
    desc,
    sertifikat,
    jenisharga,
    harga,
    lamasewa,
    provinsi,
    kabkota,
    kecamatan,
    userimg,
    username,
    nohp,
    nowa,
    id,
  } = Object.fromEntries(formData);

  const nanoid = customAlphabet("1234567890abcdef", 5);
  const slug = judul
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .concat(`-${nanoid()}`);

  const medias = formData.getAll("media");
  const isImgChange = medias[0].size > 0;
  const arrImg = [];
  if (isImgChange) {
    // console.log(`media: ${media}`);
    const idSlug = nanoid();
    medias.forEach(async (media) => {
      await media
        .arrayBuffer()
        .then((result) =>
          fs.writeFile(
            `${process.cwd()}/public/tmp/${idSlug}-${media.name}`,
            Buffer.from(result)
          )
        );
    });
    medias.forEach((media) => {
      arrImg.push(`/tmp/${idSlug}-${media.name}`);
    });
  }

  try {
    connectToDb();
    const currentLahan = await Lahan.findOne({ _id: id });
    if (isImgChange) {
      await currentLahan.media.forEach((img) => {
        fs.unlink(`${process.cwd()}/public${img}`);
      });
    }
    await currentLahan.updateOne({
      luas,
      judul,
      desc,
      sertifikat,
      media: isImgChange ? arrImg : currentLahan.media,
      jenisharga,
      hargamin: harga.replace(/\./g, ""),
      hargamax: harga.replace(/\./g, ""),
      lamasewa,
      provinsi,
      kabkota,
      kecamatan,
      userId: "667029651bff571377669c35",
      slug,
    });
    console.log("updated to db");
    revalidatePath("/lahan");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
  redirect("/lahan");
};

export const deleteLahan = async (formData) => {
  const { idlahan } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Lahan.findByIdAndDelete(idlahan).then((res) =>
      res.media.forEach((img) => {
        fs.unlink(`${process.cwd()}/public${img}`);
      })
    );
    console.log("deleted from db");
    revalidatePath("/lahan");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
  redirect("/lahan");
};

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

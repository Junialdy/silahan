import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    nomorhp: {
      type: String,
      min: 10,
      max: 14,
    },
    nomorwa: {
      type: String,
      min: 10,
      max: 14,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const lahanSchema = new mongoose.Schema(
  {
    luas: {
      type: Number,
      required: true,
    },
    judul: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    sertifikat: {
      type: String,
      required: true,
    },
    media: {
      type: [String],
      required: true,
    },
    jenisharga: {
      type: String,
      required: true,
    },
    hargamin: {
      type: Number,
      required: true,
    },
    hargamax: {
      type: Number,
      required: true,
    },
    lamasewa: {
      type: String,
      required: true,
    },
    provinsi: {
      type: String,
      required: true,
    },
    kabkota: {
      type: String,
      required: true,
    },
    kecamatan: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Lahan =
  mongoose.models?.Lahan || mongoose.model("Lahan", lahanSchema);

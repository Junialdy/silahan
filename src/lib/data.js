import { Lahan, User } from "./models";
import { connectToDb } from "./utils";

export const userInfo = {
  nama: "John doe",
  email: "johndoe@gmail.com",
  nohp: "081234567890",
  nowa: "081234567890",
};

export const getLahans = async () => {
  try {
    connectToDb();
    const lahans = await Lahan.find();
    return lahans;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch lahans!");
  }
};

export const getLahan = async (slug) => {
  try {
    connectToDb();
    const lahan = await Lahan.findOne({ slug });
    return lahan;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch lahan!");
  }
};

export const getUser = async (id) => {
  // noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

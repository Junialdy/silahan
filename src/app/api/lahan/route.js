import { Lahan } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const lahan = await Lahan.find();
    return NextResponse.json(lahan);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch lahan!");
  }
};

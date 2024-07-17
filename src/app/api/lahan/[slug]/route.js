import { Lahan } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const lahan = await Lahan.findOne({ slug });
    return NextResponse.json(lahan);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch lahan!");
  }
};

// export const DELETE = async (request, { params }) => {
//   const { slug } = params;

//   try {
//     connectToDb();

//     await Lahan.deleteOne({ slug });
//     return NextResponse.json("Lahan deleted");
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to delete lahan!");
//   }
// };

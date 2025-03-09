import Category from "../../../models/category";
// import db from "@/models";
import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const categories = await Category.findAll();
//     return NextResponse.json({ data: categories }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export const GET = async () => {
  try {
    const categories = await Category.findAll();
    return NextResponse.json(
      { data: categories, message: "Berhasil mendapatkan data" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { name } = body;
    // console.log("name", name);
    // return NextResponse.json({ messages: "successss BROO" });
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const newCategory = await Category.create({ name });

    return NextResponse.json({ newCategory }, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

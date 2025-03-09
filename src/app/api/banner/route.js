import Category from "@/models/category";
import Products from "../../../models/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    let order = [["createdAt", "ASC"]];

    const banner = await Products.findAll({
      include: Category,
      where: { type: "banner" },
      order,
    });

    if (!banner || banner.length === 0) {
      return NextResponse.json({ message: "No banner found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        banner,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

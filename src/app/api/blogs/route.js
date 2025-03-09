import { NextResponse } from "next/server";
import Blogs from "@/models/blogs";
import { Op } from "sequelize";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "6", 10);
  const search = searchParams.get("search") || "";
  try {
    let order = [["createdAt", "ASC"]];
    const where = {};
    if (search) {
      where.title = { [Op.like]: `%${search}%` };
    }

    const offset = (page - 1) * limit;
    const { count, rows } = await Blogs.findAndCountAll({
      where: where,
      limit,
      offset,
      order,
    });

    return NextResponse.json(
      {
        data: rows,
        total: count,
        page,
        totalPages: Math.ceil(count / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, desc, img } = await req.json();
    const newBlog = await Blogs.create({
      title,
      desc,
      img,
    });
    return NextResponse.json({ newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

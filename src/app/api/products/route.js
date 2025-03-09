import Category from "@/models/category";
import Products from "../../../models/products";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "12", 10);
  const search = searchParams.get("search") || "";
  const filterCategory = searchParams.get("categoryId");
  const sort = searchParams.get("sort");

  try {
    let order = [];
    // let where = filterCategory ? { filterCategory } : {};
    const whereCondition = {};
    if (search) {
      whereCondition.title = { [Op.like]: `%${search}%` };
    }
    if (filterCategory) {
      whereCondition.categoryId = filterCategory || undefined;
    }

    if (sort === "lowPrice") {
      order = [["price", "ASC"]];
    } else if (sort === "highPrice") {
      order = [["price", "DESC"]];
    }

    const offset = (page - 1) * limit;
    const { count, rows } = await Products.findAndCountAll({
      include: Category,
      where: whereCondition,
      limit,
      offset,
      order,
    });

    return NextResponse.json({
      data: rows,
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, desc, img, price, categoryId } = await req.json();
    const newProduct = await Products.create({
      title,
      desc,
      img,
      price,
      categoryId,
    });
    return NextResponse.json({ newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

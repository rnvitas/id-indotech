import Blogs from "@/models/blogs";

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const blog = await Blogs.findOne({
      where: { id: id },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blogs: blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

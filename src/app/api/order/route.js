import Log from "@/models/log";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, wa, email, productId } = await req.json();
    const newLog = await Log.create({
      name,
      wa,
      email,
      productId,
    });

    return NextResponse.json(
      { newLog, messages: "Data Succesful Send" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

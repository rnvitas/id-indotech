import Log from "@/models/log";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, wa, email, productId } = await req.json();

    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }
    if (!wa) {
      return NextResponse.json(
        { message: "Phone number is required" },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const newLog = await Log.create({ name, wa, email, productId });

    return NextResponse.json(
      { newLog, message: "Data successfully sent" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

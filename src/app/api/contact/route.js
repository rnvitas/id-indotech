import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, message, email, subject } = await req.json();

    // Validation
    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { message: "Message is required" },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }
    if (!subject) {
      return NextResponse.json(
        { message: "Subject is required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create contact entry
    const newLog = await Contact.create({ name, message, subject, email });

    return NextResponse.json(
      { newLog, message: "Data successfully sent" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

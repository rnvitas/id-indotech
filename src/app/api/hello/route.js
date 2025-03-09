import { NextResponse } from "next/server";

// app/api/hello/route.js
export async function GET(request) {
  return new NextResponse(JSON.stringify({ message: "Hello, World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

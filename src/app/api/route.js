import { NextResponse } from "next/server";

export const GET = async (req) => {
  return NextResponse.json({ messages: "TESTTTT YAAAA" });
};

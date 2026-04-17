import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  await connectDB();

  // 🔥 THIS IS THE KEY
  const pending = await Testimonial.find({})
    .sort({ createdAt: -1 });

  return NextResponse.json(pending);
}
import { connectDB } from "@/lib/db";
import VideoTestimonial from "@/models/VideoTestimonial";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, videoUrl, videoPublicId } = await req.json();

    if (!videoUrl) {
      return NextResponse.json(
        { message: "Video URL required" },
        { status: 400 }
      );
    }

    const testimonial = await VideoTestimonial.create({
      name,
      videoUrl,
      videoPublicId,
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  const testimonials = await VideoTestimonial.find().sort({ createdAt: -1 });
  return NextResponse.json(testimonials);
}
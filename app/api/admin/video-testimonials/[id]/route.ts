import { connectDB } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Testimonial from "@/models/VideoTestimonial";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    // delete video from cloudinary
    await cloudinary.uploader.destroy(testimonial.videoPublicId, {
      resource_type: "video",
    });

    // delete from DB
    await Testimonial.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import cloudinary from "@/lib/cloudinary";

/* ---------------- GET (PUBLIC) ---------------- */
export async function GET() {
  await connectDB();

  const testimonials = await Testimonial.find({ approved: true })
    .sort({ createdAt: -1 });

  return NextResponse.json(testimonials);
}

/* ---------------- POST (USER SUBMIT) ---------------- */
export async function POST(req: Request) {
  await connectDB();
  const formData = await req.formData();
  const file = formData.get("image") as File; // This key can now hold a photo or video

  if (!file) {
    return NextResponse.json({ message: "File required" }, { status: 400 });
  }

  // 1. Identify the file type
  const isVideo = file.type.startsWith("video/");
  const isImage = file.type.startsWith("image/");

  if (!isImage && !isVideo) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
  }
  const MAX_SIZE = 15 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: "File size exceeds 15MB limit" },
      { status: 413 } // 413 Payload Too Large
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  // Validate other fields
  if (!formData.get("name") || !formData.get("text")) {
    return NextResponse.json(
      { error: "Name and text are required" },
      { status: 400 }
    );
  }

  try {
    // 2. Upload to Cloudinary with 'resource_type: "auto"'
    const upload: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "testimonials",
          resource_type: "auto" // CRITICAL: This allows images AND videos
        },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      ).end(buffer);
    });

    // 3. Save to Database
    const newTestimonial = await Testimonial.create({
      name: formData.get("name"),
      text: formData.get("text"),
      role: "Verified Buyer",
      approved: false,
      highlight: false,
      reviewUrl: upload.secure_url,
      reviewPublicId: upload.public_id,
      resourceType: upload.resource_type
    });

    return NextResponse.json(
      { message: "Submission successful", data: newTestimonial },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

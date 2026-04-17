import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ FIX

  await connectDB();

  const updated = await Testimonial.findByIdAndUpdate(
    id,
    { approved: true },
    { new: true }
  );

  console.log("UPDATED DOC:", updated);

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ FIX

  await connectDB();
  await Testimonial.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
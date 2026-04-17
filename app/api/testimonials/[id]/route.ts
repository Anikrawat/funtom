import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";

/* 🔐 Replace this with real auth later */
const isAdmin = true;

/* ---------------- PATCH (ADMIN) ---------------- */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  await connectDB();
  const body = await req.json();
  const { id } = await params;

  const updated = await Testimonial.findByIdAndUpdate(
    id,
    {
      ...(body.approved !== undefined && { approved: body.approved }),
      ...(body.highlight !== undefined && { highlight: body.highlight }),
    },
    { new: true }
  );

  if (!updated) {
    return NextResponse.json(
      { error: "Testimonial not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(updated);
}

/* ---------------- DELETE (ADMIN) ---------------- */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  await connectDB();
  const { id } = await params
  const deleted = await Testimonial.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Testimonial not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Deleted successfully" });
}

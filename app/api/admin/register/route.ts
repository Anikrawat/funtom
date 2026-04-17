import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

  try {

    await connectDB();

    const { email, password } = await req.json()

    const admin = await Admin.findOne({ email });
    if (admin) {
      return NextResponse.json({ message: "Admin Already Exists" }, { status: 401 });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const response = await Admin.create({
      email,
      password: hashedPassword
    })

    return NextResponse.json({
      data: response,
      message: "Admin created successfully",
    }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "Internal Server Error"
    }, { status: 500 })
  }

}

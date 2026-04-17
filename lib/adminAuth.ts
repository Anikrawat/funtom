import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyAdminFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) throw new Error("Unauthorized");

  return jwt.verify(token, process.env.JWT_SECRET!);
}
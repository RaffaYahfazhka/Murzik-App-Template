import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email & password wajib diisi" },
      { status: 400 }
    );
  }

  if (password.length < 8 || !/[A-Z]/.test(password)) {
    return NextResponse.json(
      { message: "Password minimal 8 karakter & 1 huruf besar" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Email atau password salah" },
      { status: 401 }
    );
  }

  // 🔥 INI YANG KURANG
  if (!user.password) {
    return NextResponse.json(
      { message: "Akun belum memiliki password. Hubungi admin." },
      { status: 400 }
    );
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return NextResponse.json(
      { message: "Email atau password salah" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ success: true });

  // 🔐 SET SESSION COOKIE
  res.cookies.set("session", String(user.id), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}

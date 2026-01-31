import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session = (await cookies()).get("session");
  return NextResponse.json({ loggedIn: !!session });
}

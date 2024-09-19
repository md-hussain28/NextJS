// src/app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma"; // Adjust the path as needed

export async function POST(req: NextRequest) {
  const { name, password } = await req.json();

  try {
    // Fetch user details from the database
    const user = await prisma.user.findUnique({
      where: { name },
    });

    // Check if user exists and password matches
    if (user && user.password === password) {
      // Successful login
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      // Invalid login credentials
      return NextResponse.json(
        { message: "Invalid name or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error handling login request:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

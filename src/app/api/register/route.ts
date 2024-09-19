import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; 

export async function POST(req: NextRequest) {
  const { name, password } = await req.json();

  // Basic input validation
  if (!name || !password) {
    return NextResponse.json({ message: 'Name and password are required' }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { name },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Create a new user
    await prisma.user.create({
      data: { name, password },
    });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error); // Log the error message
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

import { connectDb } from "@/lib/db";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { username, email, password } = await req.json();

    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      // conflict error
      return NextResponse.json({ error: "User exists!" }, { status: 409 });
    }
    // Generate a salt
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({
      status: 201,
      message: "User is created successfully!",
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}

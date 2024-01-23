import { connectDb } from "@/lib/db";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();
// even if we're getting data from database, it's more secure to use post than get
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exists!" },
        { status: 404 }
      );
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    // create token and set it as a cookie
    const token = jwt.sign(tokenData, process.env.SECRET_KEY!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "User has logged in successfully!",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}

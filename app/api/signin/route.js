import { User } from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/app/helper/db";

// @desc        Create a user
// @api         POST /api/signin
// @access      Public
export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found", success: false });
    }

    const compairPass = await bcrypt.compare(password, user.password);
    if (!compairPass) {
      return NextResponse.json({
        message: "Password doesn't match",
        success: false,
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    const oneDayInSeconds = 30 * 24 * 60 * 60;
    response.cookies.set("token", token, {
      httpOnly: true,
      success: process.env.NODE_ENV !== "development",
      maxAge: oneDayInSeconds,
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}

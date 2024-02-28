import { connectDB } from "@/app/helper/db";
import { User } from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// @desc        Login a user
// @api         POST /api/signup
// @access      Public
export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      throw new Error("Please provide all required fields");
    }

    const existingUser = await User.findOne({ email }).maxTimeMS(20000);

    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    } else {
      const user = await new User({ name, email, password });

      user.password = await bcrypt.hash(user.password, parseInt(10));

      await user.save();

      return NextResponse.json({
        message: "User created successfully",
        success: true,
      });
    }
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

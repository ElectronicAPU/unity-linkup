import { User } from "@/app/models/userModel";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// @desc    Fetch a user
// @api     GET /api/user
// access   Public
export async function GET(req) {
  try {
    //GET Token from cookies
    const token = await req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Invalid token", success: false });
    }

    //VERIFY Token from cookies
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return NextResponse.json({
        message: "User not verified",
        success: false,
      });
    }

    //Find user by user ID
    const user = await User.findById({ _id: verifyToken._id });
    if (!user) {
      return NextResponse.json({
        message: "User not logged in",
        success: false,
      });
    }

    //Send find user to the client
    return NextResponse.json({
      data: user,
      message: "User found",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}

import { User } from "@/app/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// @desc    Fetch all users
// @api     GET /api/get_users
// @access  Public
export async function GET(req) {
  try {
    const users = await User.find();

    if (!users) {
      return NextResponse.json({ message: "No users found" });
    }
    return NextResponse.json({ data: users, success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}

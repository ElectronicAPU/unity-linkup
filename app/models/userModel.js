import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    coverPicture: { type: String },
    friends: [],
    pendingReq: [],
    posts:[],
    status: {type: String, required: true, default: "Offline"},
    likes: {type: Number}
  },
  { timestamps: true }
);

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);

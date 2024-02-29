import {
  MessageSquareDiff,
  MoreVertical,
  ThumbsUpIcon,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import profilePic from "../public/images/post.jpg";

const Posts = ({ post }) => {
  return (
    <>
      <div className="bg-gray-300 p-2 rounded-lg overflow-y-hidden">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex gap-2 items-center w-fit">
            <span className="bg-gray-100 p-2 rounded-full w-8 h-8 flex justify-center items-center">
              <User className="w-4" />
            </span>
            <span>
              <p className="font-semibold text-sm">Apurba Naskar</p>
              <p className="text-xs">24 Dec 2024</p>
            </span>
          </Link>
          <button>
            <MoreVertical />
          </button>
        </div>
        <div className="parent-container mt-3">
          <Image
            src={profilePic}
            alt="posts image"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="mt-3 flex justify-between">
          <button className="flex text-sm bg-gray-200 gap-1 items-center font-semibold rounded-md border py-1 px-2 hover:bg-indigo-500 hover:text-white transition-colors">
            <ThumbsUpIcon className="w-4" />
            Like
          </button>
          <button className="flex text-sm bg-gray-200 gap-1 items-center font-semibold rounded-md border py-1 px-2 hover:bg-yellow-500 hover:text-white transition-colors">
            <MessageSquareDiff className="w-4" />
            Comments
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Posts);

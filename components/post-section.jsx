"use client";
import React, { useState } from "react";
import Posts from "./posts";
import { postsArray } from "@/array/postArray";

const PostSection = () => {
  const [filterPost, setFilterPost] = useState("newest");
  return (
    <>
      <div className="">
        <div className="flex gap-2 text-sm mb-2 border-b pb-2 ">
          <button
            onClick={() => setFilterPost("newest")}
            className={` px-2 rounded-md ${
              filterPost === "newest" ? "bg-black border text-white" : ""
            }`}
          >
            newest
          </button>
          <button
            onClick={() => setFilterPost("oldest")}
            className={` px-2 rounded-md ${
              filterPost === "oldest" ? "bg-black border text-white" : ""
            }`}
          >
            oldest
          </button>
        </div>
        <div className="flex flex-col gap-4 overflow-y-hidden">
          {postsArray.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostSection;

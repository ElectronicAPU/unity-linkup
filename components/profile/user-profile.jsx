"use client";
import React, { useEffect, useState } from "react";
import { Camera, Edit } from "lucide-react";
import Image from "next/image";
import profilePic from "../../public/images/myimage.jpg";
import { loggedInUser } from "@/app/services/userService";
import OwnPosts from "../posts/own-post";
import SharedPosts from "../posts/shared-posts";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [options, setOptions] = useState("OWN");

  const fetchUserProfile = async () => {
    try {
      const res = await loggedInUser();
      if (res.success) {
        setUser(res.data);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="w-full lg:w-8/12">
        <div className="rounded-b-md w-full relative ">
          <div>
            <Image
              src={profilePic}
              style={{
                width: "100%",
                height: "400px",
              }}
              alt="Picture of the author"
              className="bg-cover bg-no-repeat object-cover rounded-b-md"
            />
          </div>
          <div className="rounded-full flex border-4 absolute -bottom-[20%] left-5">
            <div>
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div className="absolute right-0 bottom-3 bg-gray-300 p-1 rounded-full flex justify-center w-10 h-10 border-2 items-center">
                <button className="h-full">
                  <Camera className="w-5" />
                </button>
              </div>
            </div>
            <div className="absolute -right-52 top-20 ">
              <h1 className="font-bold text-2xl">{user?.name}</h1>
              <p className="text-sm">0 Firends</p>
            </div>
          </div>
          <div className="absolute right-0 mt-3">
            <button className="flex gap-2 bg-blue-600 p-2 rounded-md font-semibold text-white">
              <Edit className="w-4" /> Edit profile
            </button>
          </div>
        </div>
        <div className="mt-24 flex gap-4 border-b py-2">
          <button
            onClick={() => setOptions("OWN")}
            className={` w-28 h-8 rounded-md  font-semibold ${
              options === "OWN"
                ? "border bg-gradient-to-l from-blue-600 to-purple-600 text-white"
                : ""
            }`}
          >
            My Posts
          </button>
          <button
            onClick={() => setOptions("SHARED")}
            className={` w-28 h-8 rounded-md  font-semibold ${
              options === "SHARED"
                ? "border bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : ""
            }`}
          >
            Share Posts
          </button>
        </div>
        <div className="py-2">{options === "OWN" ? <OwnPosts /> : <SharedPosts />}</div>
      </div>
    </>
  );
};

export default UserProfile;

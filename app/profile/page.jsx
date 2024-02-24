import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/myimage.jpg";
import { Camera, Edit } from "lucide-react";

const ProfilePage = () => {
  return (
    <>
      <div className="rounded-b-md w-8/12 relative  ">
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
            <h1 className="font-bold text-2xl">Apurba Naskar</h1>
            <p className="text-sm">0 Firends</p>
          </div>
        </div>
        <div className="absolute right-0 mt-3">
          <button className="flex gap-2 bg-blue-600 p-2 rounded-md font-semibold text-white">
            <Edit className="w-4"/> Edit profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

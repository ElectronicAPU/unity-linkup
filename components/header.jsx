import { Bell, Search, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
        <div className="bg-black text-white p-4 flex justify-between items-center h-16 rounded-b-lg fixed w-full z-50 ">
          <div className="flex-1">
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              alt="logo"
              className="invert"
            />
          </div>
          <div className="flex items-center flex-1 h-9 bg-white px-2 rounded-md ">
            <Search className="text-gray-500" />
            <input
              placeholder="Search name"
              className="w-full outline-none text-black px-2 text-sm"
            />
          </div>
          <div className="flex flex-1 gap-2 justify-end items-center">
            <div className="bg-gray-700 p-2 rounded-full">
              <Bell />
            </div>
            <div className="bg-gray-700 p-2 rounded-full">
              <User />
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;

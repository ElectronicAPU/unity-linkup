import { menuArray } from "@/array/menuArray";
import { Contact, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const MenuSection = () => {
  return (
    <>
      <div className=" flex justify-end sticky top-20">
        <div className="flex flex-col w-72">
          <div className="flex">
            <Contact className="w-4" />
            <h1 className="px-1 font-semibold mb-1">Profile</h1>
          </div>
          <div className=" flex flex-col ">
            <Link
              href="#"
              className="flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200 p-1 rounded-md"
            >
              <span className="p-1 rounded-full w-9 h-9 flex justify-center items-center bg-gray-300 border border-white relative">
                <span className="bg-green-500 w-2 h-2 rounded-full absolute bottom-0 right-0"></span>
                <User className="w-4" />
              </span>
              <h1 className="text-sm font-semibold">Apurba Naskar</h1>
            </Link>
          </div>
          <div className="border-b  py-1"></div>
          <div className=" flex flex-col gap-2 mt-2 ">
            {menuArray.map((menu) => (
              <Link
                key={menu.id}
                href={menu.route}
                className="flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200 p-1 rounded-md"
              >
                <span className="p-1 rounded-full w-9 h-9 flex justify-center items-center bg-gray-300 border border-white">
                  <menu.logo className="w-4" />
                </span>
                <h1 className="text-sm font-semibold">{menu.title}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;

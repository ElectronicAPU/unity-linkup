import { offlineFrineds, onlineFrineds } from "@/array/onlineArray";
import Link from "next/link";
import React from "react";

const OnlineSection = () => {
  return (
    <>
      <div className="flex-1">
        {/* Online */}
        <div className="border-b w-72 border-gray-600">
          <h1 className="font-semibold">Online - 4</h1>
        </div>
        <div className="py-4 flex flex-col gap-1 w-72">
          {onlineFrineds.map((online) => (
            <Link
              key={online.id}
              href="#"
              className="flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200 p-1 rounded-md"
            >
              <span className="p-1 rounded-full w-9 h-9 flex justify-center items-center bg-gray-300 border border-white relative">
                <span className="bg-green-500 w-2 h-2 rounded-full absolute bottom-0 right-0"></span>
                <online.logo className="w-4" />
              </span>
              <h1 className="text-sm font-semibold">{online.name}</h1>
            </Link>
          ))}
        </div>
        {/* Offline */}
        <div className="flex items-center border-b w-72 border-gray-600 ">
          <h1 className="font-semibold">Offline - 44</h1>
        </div>
        <div className="py-4 flex flex-col gap-1 w-72">
          {offlineFrineds.map((online) => (
            <Link
              key={online.id}
              href="#"
              className="flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200 p-1 rounded-md"
            >
              <span className="p-1 rounded-full w-9 h-9 flex justify-center items-center bg-gray-300 border border-white ">
                <online.logo className="w-4" />
              </span>
              <h1 className="text-sm font-semibold">{online.name}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnlineSection;

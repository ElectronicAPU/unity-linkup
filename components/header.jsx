"use client";
import { Bell, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchModal from "./modals/search-modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <SearchModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
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
        <div
          onClick={() => setOpenModal(true)}
          className="flex items-center flex-1 h-9 bg-white px-2 rounded-md "
        >
          <Search className="text-gray-500" />
          <input
            placeholder="Search name..."
            className="w-full outline-none text-black px-2 text-sm"
          />
        </div>
        <div className="flex flex-1 gap-3 justify-end items-center">
          <div className="bg-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center">
            <Bell className="w-4 text-black" />
          </div>
          <Link
            href="/profile"
            className="bg-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center"
          >
            <User className="w-4 text-black" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

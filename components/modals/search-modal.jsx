"use client";
import React, { memo, useEffect, useRef } from "react";
import ModalLayout from "../layouts/modal-layout";
import { List, PlusCircleIcon, User } from "lucide-react";
import Link from "next/link";

const SearchModal = ({ openModal, setOpenModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          setOpenModal(false);
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, setOpenModal]);

  return (
    <>
      <ModalLayout openModal={openModal} setOpenModal={setOpenModal}>
        <div>
          <div className="flex justify-between items-center h-6">
            <div className="flex gap-1 items-center">
              <List className="w-5" />
              <h1 className="font-semibold">Results</h1>
            </div>
            <div className="px-3 bg-gray-300 rounded-md h-full flex items-center">
              <p className="text-xs font-semibold text-gray-500">Esc</p>
            </div>
          </div>
          <div className="py-2 w-full flex flex-col gap-2">
            <div className=" flex justify-between items-center rounded-md hover:bg-gray-100 p-1 w-full ">
              <Link href="/profile" className="flex gap-2 items-center w-full">
                <div className="bg-gray-300 w-10 h-10 flex justify-center items-center rounded-full">
                  <User className="w-5" />
                </div>
                <div className="">
                  <h1 className="text-sm font-bold">Hello World</h1>
                  <p className="text-xs">Not Friend</p>
                </div>
              </Link>
              <div className="bg-gray-300 p-1 w-9 h-9 flex justify-center items-center rounded-full border ">
                <button className=" h-full">
                  <PlusCircleIcon className="w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default memo(SearchModal);

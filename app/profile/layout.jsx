import Header from "@/components/header";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full relative ">
        <div className="">
          <Header />
        </div>
        <div className="h-full pt-16 p-4 flex justify-center items-start ">
          {children}
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;

import CreatePost from "@/components/create-post";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const InitialLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full relative ">
        <div className=""><Header /></div>
        <div className="h-full pt-16 ">{children}</div>
        <div className="w-full ">
          <CreatePost />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default InitialLayout;

import Header from "@/components/header";
import React from "react";

const MenuLayout = ({ children }) => {
  return (
    <>
     <div className="w-full h-full relative ">
        <div className=""><Header /></div>
        <div className="h-full pt-16 flex justify-center items-center ">{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MenuLayout;

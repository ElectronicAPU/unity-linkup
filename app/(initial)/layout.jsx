import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const InitialLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <div className="h-full ">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default InitialLayout;

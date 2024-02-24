import Header from "@/components/header";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default ProfileLayout;

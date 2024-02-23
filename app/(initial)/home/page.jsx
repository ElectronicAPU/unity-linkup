import MenuSection from "@/components/menu-section";
import OnlineSection from "@/components/online-section";
import PostSection from "@/components/post-section";
import React from "react";

export const metadata = {
  title: "Home Page",
  description: "",
};

const HomePage = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <OnlineSection />
        <PostSection />
        <MenuSection />
      </div>
    </>
  );
};

export default HomePage;

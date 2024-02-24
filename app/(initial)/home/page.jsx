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
      <div className="flex justify-between p-4 relative">
        <div className="flex-1">
          <OnlineSection />
        </div>
        <div className="flex-1">
          <PostSection />
        </div>
        <div className="flex-1">
          <MenuSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;

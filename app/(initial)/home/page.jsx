import { fetchUsers } from "@/app/services/homeService";
import MenuSection from "@/components/menu-section";
import OnlineSection from "@/components/online-section";
import PostSection from "@/components/post-section";
import React from "react";

export const metadata = {
  title: "Home Page",
  description: "",
};

const HomePage = async () => {
  const res = await fetchUsers();
  return (
    <>
      <div className="flex justify-between p-4 relative">
        <div className="flex-1">
          <OnlineSection users={res.data} />
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

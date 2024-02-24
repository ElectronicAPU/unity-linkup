"use client"
import { PlusCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

const CreatePost = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, scrollDirection]);

  return (
    <>
      <div
        className={`w-36 h-12 fixed left-1/2 bottom-5 transform -translate-x-1/2 ${
          scrollDirection === "down" ? "translate-y-28 transition-transform duration-500" : "translate-y-0 transition-transform duration-500"
        } `}
      >
        <button className="relative w-full h-full flex justify-center items-center gap-1 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0">
          <PlusCircle /> Create Post
        </button>
      </div>
    </>
  );
};

export default CreatePost;

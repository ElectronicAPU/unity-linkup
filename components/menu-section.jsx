import { Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const MenuSection = () => {
  return (
    <>
       <div className="flex-1 flex justify-end">
        <div className="flex flex-col gap-2">
          <Link href="#" className="w-fit flex items-center gap-2 text-sm font-semibold">
            <div className="rounded-full bg-gray-600 p-2">
              <User />
            </div>
            <p>Apurba Naskar</p>
          </Link>
          <ul>
            <li>
              <Link href="#" className="flex items-center gap-2 w-fit text-sm font-semibold ">
                <span className="p-2">
                  <Settings />
                </span>
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuSection;

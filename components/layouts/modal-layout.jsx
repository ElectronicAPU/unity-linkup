import React from "react";

const ModalLayout = ({ children }) => {
  return (
    <>
      <div className="fixed z-50 w-full h-full flex justify-center items-start top-16 bg-black/50 py-2">
       {children}
      </div>
    </>
  );
};

export default ModalLayout;

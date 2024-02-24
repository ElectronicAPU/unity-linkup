import React, { useEffect, useRef } from "react";

const ModalLayout = ({ children, setOpenModal }) => {
  const modalDivRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (modalDivRef.current && event.target === modalDivRef.current) {
        setOpenModal(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setOpenModal]);

  return (
    <div
      ref={modalDivRef}
      className="fixed z-50 w-full h-full flex justify-center items-start top-16 bg-black/50 py-2 backdrop-blur-sm"
    >
      <div className="bg-white w-4/12 p-2 rounded-md h-full max-h-96">
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;

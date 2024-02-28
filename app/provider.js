import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Provider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default Provider;

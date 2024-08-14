import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="bg-black p-12 fixed w-screen h-screen overflow-hidden">
      <div className="rounded-[50px] bg-blue-dark py-14 bg-lined-grid bg-[length:10px_10px] w-full h-full">
        <div className="flex flex-col items-center w-full h-full">{children}</div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Container;

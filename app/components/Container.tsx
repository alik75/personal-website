import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="bg-black p-12 fixed w-screen h-screen overflow-hidden bg-gradient-radial-layout">
      <div className="rounded-[50px] bg-blue-dark py-14 w-full h-full relative overflow-hidden after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-gradient-radial-layout after:backdrop-blur-3xl after:z-0">
        <div className="absolute left-0 top-0 w-full h-full bg-lined-grid bg-[length:10px_10px] z-[1]"></div>
        <div className="relative flex flex-col items-center w-full h-full z-[2]">{children}</div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Container;

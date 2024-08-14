import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="bg-black p-12 fixed w-screen h-screen">
      <div className="rounded-[50px] bg-blue-dark py-14 bg-lined-grid bg-[length:10px_10px]">
        <div className="">{children}</div></div>
    </div>
  );
};

export default Container;

import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { headers } from "next/headers";
import StatisticInfo from "./StatisticInfo";
import StatisticContainer from "./StatisticContainer";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  let headerInfo=headers().get("client-info");
  const clientInfo = headerInfo?JSON.parse(headerInfo):null;
  return (
    <div className="bg-black lg:p-8 md:p-4 p-2.5 fixed w-screen h-full overflow-hidden bg-gradient-radial-layout">
      <div className="lg:rounded-[50px] rounded-[20px] bg-blue-dark lg:py-4 md:py-3 py-2 lg:px-5 px-2 w-full h-full relative overflow-hidden after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-gradient-radial-layout after:backdrop-blur-3xl after:z-0">
        <div className="absolute left-0 top-0 w-full h-full bg-lined-grid bg-[length:10px_10px] z-[1]"></div>
        <StatisticContainer info={clientInfo}>
          {children}
        </StatisticContainer>
       
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Container;

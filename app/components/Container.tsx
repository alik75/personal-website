import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { headers } from "next/headers";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  const clientInfo = JSON.parse(headers().get("client-info"));
  return (
    <div className="bg-black p-12 fixed w-screen h-screen overflow-hidden bg-gradient-radial-layout">
      <div className="rounded-[50px] bg-blue-dark py-8 px-5 w-full h-full relative overflow-hidden after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-gradient-radial-layout after:backdrop-blur-3xl after:z-0">
        <div className="absolute left-0 top-0 w-full h-full bg-lined-grid bg-[length:10px_10px] z-[1]"></div>
        <div className="relative flex justify-between z-[2]">
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">Browser</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.browser.name} {clientInfo.browser.version}
              </span>
            </span>
            <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">OS</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.os.name} {clientInfo.os.version}
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">IP</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.ip}
              </span>
            </span>
            {/* <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">OS</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.os.name} {clientInfo.os.version}
              </span>
            </span> */}
          </div>
        </div>
        <div className="relative flex flex-col items-center w-full h-[calc(100%-96px)] z-[2]">
          {children}
        </div>
        <div className="relative flex justify-between z-[2]">
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">Browser</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.browser.name} {clientInfo.browser.version}
              </span>
            </span>
            <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">OS</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.os.name} {clientInfo.os.version}
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">IP</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.ip}
              </span>
            </span>
            {/* <span className="flex flex-row gap-2 items-center">
              <span className="text-sm text-yellow">OS</span>
              <span className="text-sm font-bold text-white">
                {clientInfo.os.name} {clientInfo.os.version}
              </span>
            </span> */}
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Container;

'use client'
import React, { ReactNode } from "react";
import StatisticInfo from "./StatisticInfo";

interface ClientInfo {
  browser: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version: string;
  };
  ip: string;
}

interface Props {
  children: ReactNode;
  info: ClientInfo;
}

const StatisticContainer = async ({ children, info }: Props) => {
  let response=await fetch("http://www.geoplugin.net/json.gp?ip="+info.ip);
  console.log(await response.json())
  return (
    <>
      <div className="relative flex justify-between z-[2]">
        <StatisticInfo
          items={[
            {
              key: "Browser",
              value: info.browser.name + " " + info.browser.version,
            },
          ]}
        ></StatisticInfo>
        <StatisticInfo items={[{ key: "IP", value: info.ip }]}></StatisticInfo>
      </div>
      <div className="relative flex flex-col items-center w-full h-[calc(100%-96px)] z-[2]">
        {children}
      </div>
      <div className="relative flex justify-between z-[2]">
        <StatisticInfo
          items={[{ key: "OS", value: info.os.name + " " + info.os.version }]}
        ></StatisticInfo>
        <StatisticInfo items={[{ key: "IP", value: info.ip }]}></StatisticInfo>
      </div>
    </>
  );
};

export default StatisticContainer;

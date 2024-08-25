"use client";
import React, { ReactNode, useEffect, useState } from "react";
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
  geo:{
    ip: string;
    country:string;
    city:string;
    long:string;
    lat:string;
  }
}


interface Props {
  children: ReactNode;
  info: ClientInfo;
}

const StatisticContainer = ({ children, info }: Props) => {
  const [fetchedIpInfo, setFetchedIpInfo] = useState<boolean>(false);
  const [initTime, setInitTime] = useState<Date>(new Date());
  const [timeSpend, setTimeSpend] = useState<number>(0);

  const millisToMinutesAndSeconds = (ms: number) => {
    let minutes: number = Math.floor(ms / 60000);
    let seconds: number = Math.floor((ms % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  // calculate count up timer
  useEffect(() => {
    let id = setInterval(() => {
      let diff = (new Date()).valueOf() - initTime.valueOf();
      setTimeSpend(diff);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="relative flex justify-between z-[2]">
        <StatisticInfo
          items={[
            {
              key: "Browser",
              value: info.browser.name + " " + info.browser.version,
            },
            { key: "OS", value: info.os.name + " " + info.os.version },
          ]}
        ></StatisticInfo>
        <StatisticInfo
          rtl
          items={[
            { key: "Longtiude", value: info.geo.long },
            { key: "Latitude", value: info.geo.lat },
          ]}
        ></StatisticInfo>
      </div>
      <div className="relative flex flex-col items-center w-full overflow-auto md:pb-0 pb-10 md:h-[calc(100%-96px)] h-[calc(100%-83px)] z-[2]">
        {children}
      </div>
      <div className="relative flex justify-between z-[2]">
        <StatisticInfo
          items={[
            {
              key: "Local Time",
              value: new Date()
                .toLocaleTimeString()
                .split(" ")[0]
                .split(":")
                .slice(0, 2)
                .join(":"),
            },
            { key: "Time Spend", value: millisToMinutesAndSeconds(timeSpend) },
          ]}
        ></StatisticInfo>
        <StatisticInfo
          rtl
          items={[
            { key: "IP", value: info.geo.ip },
            {
              key: "Location",
              value: info.geo.country? info.geo.country + "/" + info.geo.city:"",
            },
          ]}
        ></StatisticInfo>
      </div>
    </>
  );
};

export default StatisticContainer;

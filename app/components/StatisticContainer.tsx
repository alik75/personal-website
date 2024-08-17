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
  ip: string;
}

interface IpInfo {
  city: string;
  country: string;
  status: string;
  lat: string;
  lon: string;
}

interface Props {
  children: ReactNode;
  info: ClientInfo;
}

const StatisticContainer = ({ children, info }: Props) => {
  const [fetchedIpInfo, setFetchedIpInfo] = useState<boolean>(false);
  const [ipInfo, setIpInfo] = useState<IpInfo>();
  const [initTime, setInitTime] = useState<Date>(new Date());
  const [timeSpend, setTimeSpend] = useState<number>(0);

  // fetch ip info from third party API
  useEffect(() => {
    if (!fetchedIpInfo) {
      fetch("http://ip-api.com/json/62.60.132.36", {
        headers: {
          "Content-Type": "application/json",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        },
      })
        .then((res) => res.json())
        .then((res: IpInfo) => {
          console.log("rere", res);
          setFetchedIpInfo(true);
          if (res.status == "success") {
            setIpInfo(res);
          }
        })
        .catch((err) => {
          console.error("Error in fetch ip info", err);
        });
    }
  }, []);

  const millisToMinutesAndSeconds = (ms: number) => {
    let minutes: number = Math.floor(ms / 60000);
    let seconds: number = Math.floor((ms % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  // calculate count up timer
  useEffect(() => {
    let id = setInterval(() => {
      let diff = new Date() - initTime;
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
            { key: "Longtiude", value: ipInfo ? ipInfo.lon : "Unknown" },
            { key: "Latitude", value: ipInfo ? ipInfo.lat : "Unknown" },
          ]}
        ></StatisticInfo>
      </div>
      <div className="relative flex flex-col items-center w-full md:h-[calc(100%-96px)] h-[calc(100%-83px)] z-[2]">
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
            { key: "IP", value: info.ip },
            {
              key: "Location",
              value: ipInfo ? ipInfo.country + "/" + ipInfo.city : "Unknown",
            },
          ]}
        ></StatisticInfo>
      </div>
    </>
  );
};

export default StatisticContainer;

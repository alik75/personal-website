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
  country_name: string;
  status: string;
  latitude: string;
  longitude: string;
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
      fetch("https://api.ipgeolocation.io/ipgeo?apiKey=f31a9cacb7b14049873f92fc055579f6&ip=8.8.8.8", {
        headers: {
          "Content-Type": "application/json",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        },
      })
        .then((res) => res.json())
        .then((res: IpInfo) => {
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
            { key: "Longtiude", value: ipInfo ? ipInfo.longitude : "Unknown" },
            { key: "Latitude", value: ipInfo ? ipInfo.latitude : "Unknown" },
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
            { key: "IP", value: info.ip },
            {
              key: "Location",
              value: ipInfo ? ipInfo.country_name + "/" + ipInfo.city : "Unknown",
            },
          ]}
        ></StatisticInfo>
      </div>
    </>
  );
};

export default StatisticContainer;

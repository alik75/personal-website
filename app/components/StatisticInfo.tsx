import React from "react";

interface StatisticItem {
  key: string;
  value: string;
}

interface Props {
  items: StatisticItem[];
  rtl?: boolean
}

const StatisticInfo = ({ items, rtl = false  }: Props) => {
  

  return (
    <div className="flex flex-col md:gap-2 gap-1">
      {items.map((item:StatisticItem, idx:number) => (
        <span key={idx} className={`flex ${rtl?"flex-row-reverse":"flex-row"} md:gap-2 gap-1 items-center`}>
          <span className="md:text-sm sm:text-xs text-[.5rem] text-yellow">{item.key}</span>
          <small className="text-yellow">~</small>
          <span className="md:text-sm sm:text-xs text-[.5rem] font-bold text-white">{item.value}</span>
        </span>
      ))}
    </div>
  );
};

export default StatisticInfo;

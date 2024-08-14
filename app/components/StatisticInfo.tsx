import React from "react";

interface StatisticItem {
  key: string;
  value: string;
}

interface Props {
  items: StatisticItem[];
}

const StatisticInfo = ({ items }: Props) => {
  

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <span className="flex flex-row gap-2 items-center">
          <span className="text-sm text-yellow">{item.key}</span>
          <span className="text-sm font-bold text-white">{item.value}</span>
        </span>
      ))}
    </div>
  );
};

export default StatisticInfo;

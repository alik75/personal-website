import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  className?: string;
  link?: string;
}

const Button = ({ label, className, link = "#" }: Props) => {
    const classList=`w-fit bg-transparent border border-white text-white px-4 py-2 rounded-full font-bold text-base hover:bg-yellow hover:text-black transition-all ${className}`
  return link && link != "#" ? (
    <Link href={link}>
      <button
        className={classList}
      >
        {label}
      </button>
    </Link>
  ) : (
    <button
      className={classList}
    >
      {label}
    </button>
  );
};

export default Button;

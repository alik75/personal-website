'use client'
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@/public/svg/MenuIcon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  link: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "About",
      link: "/about-me",
    },
    {
      title: "Contact",
      link: "/contact-me",
    },
  ];

  const pathname=usePathname();

  const [mobileMenuOpen,setMobileMenuOpen]=useState<boolean>(false);
  return (
    <>
      <span onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full h-14 w-14 p-3 bg-gray-dark lg:hidden flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-10 z-[3]">
       <MenuIcon></MenuIcon>
      </span>
      <nav className={`flex absolute lg:bottom-6 ${mobileMenuOpen?"bottom-28":"-bottom-full"} left-1/2 -translate-x-1/2 bg-gray-dark lg:rounded-full rounded-2xl lg:bg-opacity-100 bg-opacity-50 backdrop-blur-xl z-[3] transition-all ease-in-out`}>
        <ul className="px-16 py-5 flex lg:flex-row flex-col justify-around items-center lg:gap-12 gap-6">
          {menuItems.map((item:MenuItem, idx:number) => (
            <li
              className={`text-xl font-bold ${pathname==item.link?"text-yellow":"text-white"} hover:text-yellow transition-all`}
              key={idx}
            >
              <Link href={item.link} onClick={()=>setMobileMenuOpen(false)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

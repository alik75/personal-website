import Link from 'next/link';
import React from 'react'

interface MenuItem {
    title: string,
    link: string
}

const Navbar = () => {

    const menuItems: MenuItem[]=[
        {
            title:"Home",
            link:"/"
        },
        {
            title:"Projects",
            link:"/projects"
        },
        {
            title:"About",
            link:"/about-me"
        },
        {
            title:"Contact",
            link:"/contact-me"
        }
    ];

  return (
    <nav className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-dark rounded-full'>
        <ul className='px-16 py-5 flex flex-row justify-around items-center gap-12'>
            {menuItems.map((item,idx)=><li className='text-xl font-bold text-white hover:text-yellow transition-all' key={idx}><Link href={item.link}>{item.title}</Link></li>)}
        </ul>
    </nav>
  )
}

export default Navbar
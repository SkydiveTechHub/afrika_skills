
"use client"

import React from 'react'
import Image from 'next/image';


interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {


  return (
    <div className="flex fixed w-full lg:w-[86%] 2xl:w-[90%] items-center justify-between bg-base-100 shadow-sm px-6 py-2 bg-[#fff] border-[#D6D3D1] border-b z-[50]">
      <div className='flex items-center space-x-1'>
        <div className="flex-none ">
            <button onClick={toggleSidebar} className="btn btn-square btn-ghost lg:hidden border border-[#D6D3D1] rounded-full p-[6px]">
              <Image
                className=""
                src="/icons/hamburger.png"
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
        </div>
  
      </div>

    </div>
  ) 
} 

export default Navbar

"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { UserIconPopover } from './UserIcon';
import { Bell, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { pageEnum } from '@/lib/data';
import { DescText, TitleText } from '../Typo';
import { useParams, usePathname } from 'next/navigation';


interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {

  const [pageTitle, setPageTitle] =  useState<string>('')
  const pathname = usePathname()
  console.log(pathname)

	useEffect(()=>{
		const Page = pageEnum.find((i)=> i.pages.includes(pathname) )
		if(Page){
			setPageTitle(Page.title)
		}else{
			setPageTitle('')
		}
	}, [pathname])

  return (
    <div className="flex fixed w-full lg:w-[86%] 2xl:w-[90%] items-center justify-between bg-base-100 shadow-sm px-6 py-2 bg-[#fff] border-[#D6D3D1] border-b z-[50]">
      <div className='flex w-full items-center justify-between space-x-1 pr-3'>
        <div className=" ">
            {/* <button onClick={toggleSidebar} className="btn btn-square btn-ghost lg:hidden border border-[#D6D3D1] rounded-full p-[6px]">
              <Image
                className=""
                src="/icons/hamburger.png"
                alt="Menu"
                width={24}
                height={24}
              />
            </button> */}
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center p-2 border border-gray-400 rounded-full'>
                <Briefcase size={14}/>
              </div>
              
              <div>
                <TitleText text={pageTitle}/>
                <DescText text={'View and manage your job postings.'}/>
              </div>              
            </div>


            
        </div>
        <div className='flex items-center gap-2'>
          <Button size={'sm'} variant={'secondary'} className='rounded-full'><Bell/></Button>
          
          <UserIconPopover/>
        </div>
        
      </div>

    </div>
  ) 
} 

export default Navbar
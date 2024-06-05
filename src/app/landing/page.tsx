"use client"
import { FaAngleDown } from "react-icons/fa";

import Image from 'next/image'
import React from 'react'
import NavBody from "@/components/NavBody";

const page = () => {
  return (
    <>
     <nav className="flex flex-row justify-between p-10 items-center 
     text-center ">

      <div>
      <Image src="/logo.png" alt='img' width={160} height={90} />
      </div>

      <div className="flex flex-row justify-between text-center items-center gap-2 cursor-pointer " >

         <div className="flex flex-row items-center text-center justify-center w-[166px] h-[50px] bg-amber-300 rounded-[30px] shadow border border-amber-500/10"><Image src="/bag.png" alt='img' height={44} width={44} />Upgrade Plan</div>
         <Image  src="/bell.png" alt='img' height={50} width={50} />  
         <Image  src="/mail.png" alt='img' height={50} width={52} /> 
         <Image  src="/setting.png" alt='img' height={50} width={50} /> 
        
         <p className="flex flex-row text-center items-center justify-center text-base">XeroCodee <FaAngleDown /></p>
         <Image  src="/user.png" alt='img' height={40} width={40} /> 
      </div> 
     </nav>

      <NavBody />
    </>
  )
}

export default page
"use client"

import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 2,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 3,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 4,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 5,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 6,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 7,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },
  {
    id: 8,
    title: "Import existing app",
    desc: "Import an existing app from your own repository",
    imgage: "/pro.png"
  },

]


const content = [
  {
    id: 1,
    title: "Choose a template to deploy an application 🚀",
    desc: "Import your existing app or create a new one with our ready-made templates."
  }
]

const page = () => {
  return (
   <>
     <div className='relative'>
    <div className='relative'>
       <Button />
      </div>

       <div className='absolute top-32 left-52'>
       {content.map((con, idx) => (
          <div key={con.id} className='flex flex-col w-[1050px] h-[140px] bg-white rounded-[35px] text-center items-center justify-center '>

            <h1 className="text-black text-[32px] font-bold font-['Nunito'] capitalize leading-10">{con.title}</h1>
            <p className="text-black text-xl font-light font-['Nunito'] capitalize leading-[30px]">{con.desc}</p>
          </div>
        ))}

     

        <div className='product grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 '> 
        {products.map((pri, idx) => (
            <div key={idx} className=" text-center w-[500px] h-[136px] bg-white rounded-[5px] border border-stone-300 mb-10" >
              <div className='flex flex-row  items-center text-center justify-center gap-4'>
                <Image src={pri.imgage} alt='img' width={80} height={80} className='mt-5 ' />
                <div className="flex flex-col items-start mt-1 ">
                <h3 className=" text-slate-950 text-2xl font-medium  font-['Nunito'] capitalize leading-[33px]">{pri.title}</h3>
                <p className=" text-black text-md font-light font-['Nunito'] capitalize leading-[20px]">{pri.desc}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
 

       </div>
         
         

      </div>
   </>
  )
}

export default page
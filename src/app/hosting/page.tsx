"use client"

"use client"

import Button from '@/components/Button'
import React, { useState } from 'react'

const page = () => {
 
  const buttonInfo = [
    {
      id:1,
      name: "Self Hosting",
     
    },
    {
      id:2,
      name: "XeroCodee Hosting"
    },
   
  ]


  return (
    <> 
    <div className='relative'>
    <div className='relative'>
       <Button />
      </div>

      <div className="w-[1150px] h-[550px] bg-white rounded-[35px] items-center absolute top-32 shadow-lg left-44 text-center ">
           
       <h1 className=" text-center text-black text-[32px] font-bold font-['Nunito'] capitalize leading-[48px] mt-16">Welcome Arya Soni ! </h1>
        
        <div className="grid grid-cols-2 mt-32">
          {buttonInfo.map((butt, id) => (
            <div key={id}>
              <button className="btn btn-outline  hover:btn-primary" 
              
              >{butt.name}</button>

            </div>
            
          ))}

    
        </div>


      </div>
    </div>
    


    </>
  )
}

export default page





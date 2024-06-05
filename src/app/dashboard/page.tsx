"use client"

import Button from '@/components/Button'
import React from 'react'

const page = () => {
 
  const buttonInfo = [
    {
      id:1,
      name: "Developer"
    },
    {
      id:2,
      name: "Organisation"
    },
    {
      id:3,
      name: "Company"
    }
  ]

  return (
    <> 
    <div className='relative'>
    <div className='relative'>
       <Button />
      </div>

      <div className="w-[1150px] h-[550px] bg-white rounded-[35px] items-center absolute top-32 shadow-lg left-44 text-center ">
           
       <h1 className=" text-center text-black text-[32px] font-bold font-['Nunito'] capitalize leading-[48px] mt-16">Welcome Arya Soni ! </h1>
        
        <div className="grid grid-cols-3 mt-32">
          {buttonInfo.map((butt, id) => (
            <div key={id}>
              <button className="btn btn-outline  hover:btn-primary">{butt.name}</button>

            </div>
            
          ))}

    
        </div>

              <form> 
                <div className='flex flex-row gap-10 mt-16 items-end text-center justify-center'>
                <input type="text" placeholder="Developer..." className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Submit</button>
                </div>
              </form>
      </div>
    </div>
    


    </>
  )
}

export default page
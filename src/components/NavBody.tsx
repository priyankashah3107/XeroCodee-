"use client"

import Image from 'next/image'
import React from 'react'

const sideIcons =[
  {
    id: 1,
    name: "XeroCodee",
    icon: "/grid.png"
  },
  {
    id: 2,
    name: "Builder Center",
    icon: "/builder.png"
  },
  {
    id: 3,
    name: "Service Board",
    icon: "/service.png"
  },
  {
    id: 4,
    name: "Clusters",
    icon: "/cluster.png"
  },
  {
    id: 5,
    name: "Databases",
    icon: "/db.png"
  },
  {
    id: 6,
    name: "Environment",
    icon: "/envi.png"
  },
  {
    id: 7,
    name: "Workflow",
    icon: "/webflow.png"
  },
  {
    id: 8,
    name: "Monitoring",
    icon: "/moni.png"
  },
  {
    id: 9,
    name: "Security",
    icon: "/security.png"
  },
  {
    id: 10,
    name: "Web Hooks",
    icon: "/webhooks.png"
  },
  {
    id: 11,
    name: "Log Error",
    icon: "/loge.png"
  },
]


const step1 = [
  {
    id:1,
    name: "AWS",
    image: '/aws.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },

  {
    id:2,
    name: "GCP",
    image: '/gcp.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },

]


const step2 = [
  {
    id:1,
    name: "Github",
    image: '/github.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },
  {
    id:2,
    name: "Gitlab",
    image: '/gitlab.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },
  {
    id:1,
    name: "BitBucket",
    image: '/bucket.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  }, 
]


const step3 = [
  {
    id:1,
    name: "MongoDB",
    image: '/mongo.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },
  {
    id:2,
    name: "RedisDB",
    image: '/redis.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },
  {
    id:3,
    name: "Postgresql",
    image: '/postg.png',
    dot: "/red.png",
    dott: "/green.png",
    syn: "/Sync.png"
  },
]

const NavBody = () => {
  return (
    <div className='parent flex flex-row '>

      <div>
        {sideIcons.map((items, idx) => (
           <div key={idx} className="flex flex-row  gap-5 mt-5 ml-10 mb-2 w-[248px] h-[58px] hover:bg-white rounded-[30px] hover:shadow hover:border hover:border-gray-200 text-center justify-center items-center cursor-pointer">
              <Image src={items.icon} alt='img' width={20} height={20} />
              <p className=" text-black hover:text-blue-700 text-lg font-extrabold font-['Nunito']">{items.name}</p>
           </div>
        ))}
      </div>



      <div className=" w-[1160px] h-[992px] bg-gradient-to-b from-white to-white rounded-[35px] shadow-lg mb-10">
          
          <div className="w-[1110px] h-[120px]   bg-gradient-to-b from-blue-100 to-sky-100 rounded-[25px] border border-slate-50 ml-10 mt-2 flex flex-row justify-between ">
             
             <div className='flex flex-col pl-4 pt-2'>
             <h1 className=" text-zinc-800 text-7xl font-extrabold font-['Nunito'] leading-[70px]">Hi User !</h1>
             <p className="text-black text-lg font-normal font-['Nunito'] tracking-wide">Welcome to XeroCodee Ecosystem 😎</p>
             
             </div>
              
              <div className="flex flex-row pt-2 pr-4 gap-4  text-stone-800 text-base font-semibold font-['Nunito'] cursor-pointer">
                <p>Test Mode</p>
                <input type="checkbox" className="toggle" disabled />
             <p>Production Mode</p>

              </div>


          </div>

          <div className="pl-14 pt-10 flex flex-row justify-start">
          <Image  src="/line.png" alt='img' width={70} height={90} />


          <div className="contnt  ">
             <div className='flex flex-row'>

              <div className='flex flex-col'>
              <h6 className="ml-6  text-black text-lg font-bold font-['Nunito'] tracking-wide">Step 1</h6>
              <p className="ml-6  text-neutral-500 text-sm font-bold font-['Nunito'] tracking-wide">Connect to Cloud</p>
              </div>
              

              {step1.map((val, idx) => (
                <div key={idx} className="grid grid-cols-2  gap-16 ml-6  w-[260px] h-[128px] bg-white rounded-[15px] shadow border border-zinc-100 mt-20"> 
                
                   <div className='flex flex-col gap-14 ml-4 '>
                    <h4 className="mt-2 text-zinc-800 text-[22px] font-bold font-['Nunito'] tracking-wide">{val.name}</h4>
                    <div className='flex flex-row gap-4 '>
                    <Image  src={val.dot} alt='img' width={10} height={10}/>
                    <Image  src={val.dott} alt='img' width={10} height={10}/>
                    <Image  src={val.syn} alt='img' width={20} height={20}/>
                    </div>
                    
                   </div>
                   <Image  src={val.image} alt='img' width={90} height={50} className='pt-6 pb-2'/>
                   
                </div>
              ))}
             </div>

             <div>2</div>
             <div>3</div>
          </div>





            <div className=''>2</div>
           </div>


      </div>

  
      
    </div>
  )
}

export default NavBody
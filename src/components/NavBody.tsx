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


const NavBody = () => {
  return (
    <div className='parent'>

      <div>
        {sideIcons.map((items, idx) => (
           <div key={idx} className="flex flex-row  gap-5 m-10 w-[248px] h-[58px] hover:bg-white rounded-[30px] hover:shadow hover:border hover:border-gray-200 text-center justify-center items-center">
              <Image src={items.icon} alt='img' width={20} height={20} />
              <p className=" text-black hover:text-blue-700 text-lg font-extrabold font-['Nunito']">{items.name}</p>
           </div>
        ))}
      </div>















      <div>2</div>
    </div>
  )
}

export default NavBody
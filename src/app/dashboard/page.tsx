// "use client"

// import Button from '@/components/Button'
// import React, { useState } from 'react'

// const page = () => {
//   const [formVisibe, setFormVisible] = useState(false);
//   const[placeholder, setPlaceholder] =  useState('Developer......')
//   const buttonInfo = [
//     {
//       id:1,
//       name: "Developer",
//       placeholder: "Developer....."
//     },
//     {
//       id:2,
//       name: "Organisation",
//       placeholder: "Organisation name..."
//     },
//     {
//       id:3,
//       name: "Company",
//       placeholder: "Company name..."
//     }
//   ]

//   const handlePlacholde = (placeholder)  => {
//     setPlaceholder(placeholder)
//     setFormVisible(true)     
//   }

//   return (
//     <> 
//     <div className='relative'>
//     <div className='relative'>
//        <Button />
//       </div>

//       <div className="w-[1150px] h-[550px] bg-white rounded-[35px] items-center absolute top-32 shadow-lg left-44 text-center ">
           
//        <h1 className=" text-center text-black text-[32px] font-bold font-['Nunito'] capitalize leading-[48px] mt-16">Welcome Arya Soni ! </h1>
        
//         <div className="grid grid-cols-3 mt-32">
//           {buttonInfo.map((butt, id) => (
//             <div key={id}>
//               <button className="btn btn-outline  hover:btn-primary" 
//               onClick={() => handlePlacholde(butt.placeholder)}
//               >{butt.name}</button>

//             </div>
            
//           ))}

    
//         </div>

//             {  formVisibe && <form> 
//                 <div className='flex flex-row gap-10 mt-16 items-end text-center justify-center'>
//                 <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
//                 <button className="btn btn-primary" >Submit</button>
//                 </div>
//               </form>}
//       </div>
//     </div>
    


//     </>
//   )
// }

// export default page




"use client"

import Button from '@/components/Button'
import React, { useState } from 'react'

interface ButtonInfo {
  id: number;
  name: string;
  placeholder: string;
}

const Page: React.FC = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [placeholderText, setPlaceholderText] = useState<string>('');

  const buttonInfo: ButtonInfo[] = [
    {
      id: 1,
      name: "Developer",
      placeholder: "Developer..."
    },
    {
      id: 2,
      name: "Organisation",
      placeholder: "Organisation name..."
    },
    {
      id: 3,
      name: "Company",
      placeholder: "Company name..."
    }
  ];

  const handleClick = (placeholder: string) => {
    setPlaceholderText(placeholder);
    setFormVisible(true);
  }

  return (
    <>
      <div className='relative'>
        <div className='relative'>
          <Button />
        </div>

        <div className="w-[1150px] h-[550px] bg-white rounded-[35px] items-center absolute top-32 shadow-lg left-44 text-center">
          <h1 className="text-center text-black text-[32px] font-bold font-['Nunito'] capitalize leading-[48px] mt-16">
            Welcome Arya Soni!
          </h1>

          <div className="grid grid-cols-3 mt-32">
            {buttonInfo.map((butt) => (
              <div key={butt.id}>
                <button
                  className="btn btn-outline hover:btn-primary"
                  onClick={() => handleClick(butt.placeholder)}
                >
                  {butt.name}
                </button>
              </div>
            ))}
          </div>

          {formVisible && (
            <form>
              <div className='flex flex-row gap-10 mt-16 items-end text-center justify-center'>
                <input type="text" placeholder={placeholderText} className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Page

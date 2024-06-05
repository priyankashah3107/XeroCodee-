"use client"
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const page = () => {
  return (
    <div className='absolute'>
      <div className="w-[805px] h-[632px] rounded-tr-[35px] rounded-bl-[35px] rounded-br-[35px] shadow border border-black relative left-48 top-16 text-center" >
            <h1 className=" text-center text-black text-4xl font-bold font-['Nunito'] capitalize leading-[48px] mt-2">Hello!</h1>
            <p className=" text-slate-900/70 text-sm font-bold font-['Nunito'] capitalize leading-[20px]"> <span className=' border border-slate-400/40 transform rotate-360'></span> Create Your Account <span className=' border border-slate-400/40 transform rotate-360'></span></p>


            <form >
              <div className='flex flex-col text-center items-center gap-4 mt-8'>
              <input type="text" placeholder="First Name" className="input w-full max-w-xs" />
            <input type="text" placeholder="Last Name" className="input w-full max-w-xs" />

            <input type="email" placeholder="Email-Id" className="input w-full max-w-xs" />
            <input type="password" placeholder="Password" className="input w-full max-w-xs" />
            <input type="password" placeholder="Confirm Password" className="input w-full max-w-xs"/>
            <button className="btn btn-primary w-full max-w-xs">SIGN UP</button>

            <b>OR</b>

            <div className='flex flex-row items-center  gap-4'>

            <button className="btn btn-outline   text-slate-950/opacity-50 text-sm font-semibold font-['Nunito'] capitalize items-center">Sign Up With Google <FcGoogle /> </button>
            <button className="btn btn-outline  text-slate-950/opacity-50 text-sm font-semibold font-['Nunito'] capitalize items-center"> Sign Up With Github <SiGithub /></button>
            </div>

              <p className="text-slate-950/50 text-sm font-normal font-['Nunito'] ">Already have an Account ? <Link className="text-blue-600 text-sm font-medium font-['Nunito']" href={"/login"}>LOGIN</Link></p>
              
              </div>
            
            </form>
      </div>

    </div>
  )
}

export default page
"use client"
import { access } from 'fs';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import {account, ID} from "@/lib/server/appwrite.js"


const page = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('')

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      alert("User logged in successfully");
    } catch (error) {
      console.error(error);
    }
  }
  const handleOAuthLogin = async (provider: any) => {
    try {
      await account.createOAuth2Session(provider, 'http://localhost:3000', 'http://localhost:3000');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     <div className=" ">
       
       <div className="flex flex-col text-center">
        

       <div className="w-[805px] h-[632px] rounded-tr-[35px] rounded-bl-[35px] rounded-br-[35px] shadow border border-black relative left-48 top-16 text-center" >

       <h1 className="text-center text-black text-[32px] font-bold font-['Nunito'] capitalize leading-[48px] mt-24">Welcome Arya Soni !</h1>

<p className=" text-center text-slate-950/50 text-sm font-bold font-['Nunito'] capitalize leading-[21px]">Login to your Account</p>


  <form onSubmit={handleLogin}>
    <div className='flex flex-col text-center items-center gap-4 mt-20'>
    <input type="email" placeholder="Email-Id" className="input w-full max-w-xs"  
    value={email} 
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" className="input w-full max-w-xs" 
    value={password} 
    onChange={(e) => setPassword(e.target.value) } />
    <button className="btn btn-primary w-full max-w-xs " type='submit'>Login</button>
     
     
    <b>OR</b>

    <div className='flex flex-row items-center  gap-4'>

    <button className="btn btn-outline   text-slate-950/opacity-50 text-sm font-semibold font-['Nunito'] capitalize items-center" 
    onClick={() => handleOAuthLogin('google')}>Sign Up With Google <FcGoogle /> </button>

    <button className="btn btn-outline  text-slate-950/opacity-50 text-sm font-semibold font-['Nunito'] capitalize items-center" 
    onClick={() => handleOAuthLogin('github')}> Sign Up With Github <SiGithub /></button>
    </div>

    <p className="text-slate-950/50 text-sm font-normal font-['Nunito'] ">Do not have an Account ?<Link className="text-blue-600 text-sm font-medium font-['Nunito']" href={"/signup"}> {" "}Signup</Link></p>
    </div>
  </form>

        </div>

  
        <div className='absolute top-96 mt-56 left-96 ml-72' >
        <Image src="/img.png" alt='img' width={300} height={400} 
        className=" relative " />
       </div>
       </div>

     </div>
    </>
  )
}

export default page


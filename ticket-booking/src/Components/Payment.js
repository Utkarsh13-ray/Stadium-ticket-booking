import React,{useState,useEffect} from 'react'
import './Payment.css'
import Paysuccess from './Paysuccess';
import fest from './sports-festival.png'
import {Link}from "react-router-dom";
export default function Payment(props) {
  let [Credentials, setCredentials] = useState({name:props.name,email:props.email,phone:""});
  const onChange=(e)=>{
    setCredentials({...Credentials,[e.target.name]:e.target.value})
   }
   
   
  return (
    <>
    <div className='bg-gray-200 flex justify-center space-y-4 text-xl '>
    <div className='flex flex-col  justify-center w-[40rem] my-5  '>
        <div className='text-center'>Welcome</div>
        <div className='text-center font-bold'>IIIT RANCHI SPORTS FESTIVAL</div>
        <div className='flex justify-center'><img src={fest} className='w-[40rem]'></img></div>
        <div className='flex flex-col items-center my-4'>
            <div className='flex flex-col mt-4'>
               <div className='w-[40rem] '><span className='font-bold text-xl my-4'>Name</span>(This name will be printed on ticket...)</div>
                   <div className="border-[2px] border-black w-[40rem] bg-white h-9 items-center text-xl"> <input  type="text"  className='focus:outline-none' size="56"  onChange={onChange} name="name" id="name" minLength={5} value={Credentials.name} required/></div>
            </div>
       
            <div className='flex flex-col mt-4'>
               <div className='w-[40rem] '><span className='font-bold text-xl my-4'>Email</span></div>
                   <div className="border-[2px] border-black w-[40rem] bg-white h-9 items-center text-xl"> <input  type="email"  className='focus:outline-none' size="56"  onChange={onChange} name="email" id="email" minLength={5} value={Credentials.email} required/></div>
            </div>
       
            <div className='flex flex-col mt-4'>
               <div className='w-[40rem] '><span className='font-bold text-xl my-4'>Phone No.</span></div>
                   <div className="border-[2px] border-black w-[40rem] bg-white h-9  text-xl"> <input  type="number" placeholder='+91-'  className='focus:outline-none'  onChange={onChange} name="phno" id="phno" minLength={10} maxLength={10}/></div>
            </div>
       
            <div className='flex flex-col my-4'>
               <div className='w-[40rem] '><span className='font-bold text-xl my-4'>Price</span></div>
                   <div className="border-[2px] border-black w-[40rem] bg-white h-9 items-center text-xl">Rs. 350 </div>
            </div>
            <div className='flex flex-col mt-4'>
               <div className='w-[40rem] '><span className='font-bold text-xl my-4'>Class</span></div>
                   <div className="border-[2px] border-black w-[40rem] bg-white h-9 items-center text-xl">PREMIUM</div>
            </div>
       
          
       
          
        </div>
        <Link  to='paysuccess' className={`bg-black text-white text-center h-9 items-center`}>Pay Now(350 INR)</Link>
    </div>
    </div>
    </>
  )
}

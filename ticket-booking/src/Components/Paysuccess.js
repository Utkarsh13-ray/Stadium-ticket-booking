import React from 'react'
import tick from './tick.jpg'
import mail from './mail.gif'
import {Link} from "react-router-dom"
export default function Paysuccess(props) {
  localStorage.setItem('pay',"success");
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-50 text-6xl'> <img src={tick} className='w-80'></img> Thank you!</div>
        <div className='font-bold text-2xl mt-2'>Payment Successfull</div>
        <div className='font-bold text-2xl mt-6'>Dear {props.name}, You've successfully booked your Premium Ticket for sports fest Cricket IIITR vs MNNIT .</div>
        <div className=' text-xl mt-3 text-center'>All details has been sent on your mail <span className='font-bold'>aa@gmail.com .</span><br/>
Please check it out if you have any query feel free to ask queries,<br/>
We'll happy to assist you .</div>
<div className='w-96 my-8'><img src={mail}></img></div>
<Link to='/' className='bg-blue-500 text-white p-2 rounded-md mb-10'>Continue to Home page</Link>
    </div>
  
  )
}

import React from 'react'
import basketball from './basketball.jpg'
import cricket from './cricket-.jpg'
import football from './football1.jpg'
import {Link}from "react-router-dom";

export default function Events() {
  let color="text-white hover:text-yellow-400 text-center p-4   bg-red-600 w-1/2 mb-4";

  
  {!localStorage.getItem('token')?color="text-white hover:text-yellow-400 text-center p-4   bg-red-600 w-1/2 mb-4":color="text-white hover:text-yellow-400 text-center p-4   bg-green-600 w-1/2 mb-4"}

  return (
    <>  <div id='event' className='text-center mt-20'>
       <div className='text-yellow-400 text-2xl font-bold '>Upcoming Events</div>
       <div className=' text-4xl font-extrabold mt-4' >UPCOMING MATCHES</div>
       </div>
       <div className='flex flex-col justify-center items-center space-y-10 lg:flex-row space-x-5 2xl:space-x-10 my-20 lg:mx-10 2Xl:mx-20'>
           <div className='flex flex-col bg-slate-300 w-4/5 lg:w-1/3 justify-center items-center mt-14 '>
            <div >
            <img 
             src={basketball} alt=""
              />
            </div>
            <div>
                 <div className='text-yellow-400 text-xl text-center font-bold bg-[#030f27] p-5'> IIIT Allahabad vs IIIT Ranchi Basketball</div>
                 <div className='pt-5'>
                 Indian Institute of Information Technology Allahabad is a public technical and research university located in Allahabad/Pryagraj , Uttar Pradesh, India. It was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act.
                 </div>
            </div>
            <div className='text-white hover:text-yellow-400 text-center p-4 bg-red-600 w-1/2 mb-4 mt-10'>
            {!localStorage.getItem('token')?
            <Link to='/login' className={color}>
                Login to Book Tickets
            </Link>:
            <div to="/payment" className="bg-red-600">
                 Book your Ticket
            </div>}
            </div>
           </div>
          
           <div className='flex flex-col bg-slate-300 w-4/5 lg:w-1/3 justify-center items-center'>
            <div>
            <img 
             src={cricket} alt=""
              />
            </div>
            <div>
                 <div className='text-yellow-400 text-xl text-center font-bold bg-[#030f27] p-5'>MNIT vs IIIT Ranchi Cricket</div>
                 <div className='p-5'>
                 Motilal Nehru National Institute of Technology Allahabad, formerly Motilal Nehru Regional Engineering College, is a public technical university located in Allahabad, Uttar Pradesh, India. It is one among the top NITs in the country, and like the rest of them, classified as an Institute of National Importance.
                 </div>
            </div>
            {!localStorage.getItem('token')?
            <Link to='/login' className={color}>
                Login to Book Tickets
            </Link>:
            <Link to="/payment" className={color}>
                 Book your Ticket
            </Link>}
           </div>
          
           <div className='flex flex-col bg-slate-300 w-4/5 lg:w-1/3 justify-center items-center'>
            <div>
            <img 
             src={football} alt=""
              />
            </div>
            <div>
                 <div className='text-yellow-400 text-xl text-center font-bold bg-[#030f27] p-5'>IITK vs IIIT Ranchi Football</div>
                 <div className='p-5'>
                 Indian Institute of Technology Kanpur is a public technical and research university located in Kanpur, Uttar Pradesh, India. It was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act.
                 </div>
            </div>
            <div className='text-white hover:text-yellow-400 text-center p-4 bg-red-600 w-1/2 mb-4'>
            {!localStorage.getItem('token')?
            <Link to='/login' className={color}>
                Login to Book Tickets
            </Link>:
            <div to="/payment" className="bg-red-600">
                 Book your Ticket
            </div>}
            </div>
           </div>
          
          
       </div>
    </>
  )
}

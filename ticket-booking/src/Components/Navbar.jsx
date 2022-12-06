
import React, { useState } from 'react'
import {IonIcon} from "@ionic/react";

import {

  Link,useHistory,useLocation
} from "react-router-dom";

const Navbar = (props) => {
  let [open,setOpen]=useState(false);
  let location = useLocation();
  const history=useHistory();
const handleLogout=()=>{
  localStorage.removeItem('token');
  history.push('/');
  window.location.reload();
  setTimeout(() => {
    alert("Logged out")
  }, 3000); 

}
  React.useEffect(() => {
  
  }, [location]);
  return (
  
    <div className=' shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-[#030f27] py-4 md:px-10 px-7 relative'>
      
      <div onClick={()=>setOpen(!open)} className='z-100 text-3xl absolute left-8 top-6 cursor-pointer md:hidden'>
      <IonIcon color='light' name={open ? 'close':'menu'} />
    
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#030f27] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       
          <li  className='m md:ml-8 text-xl md:my-0 my-7 hover:text-2xl transition ease-in-out duration-200'>
              <a href="#home" smooth className='text-white duration-500  hover:text-yellow-400 '  >Home</a>
            </li>
          <li  className=' md:ml-8 text-xl md:my-0 my-7 hover:text-2xl transition ease-in-out duration-200'>
              <a href="#about" smooth className='text-white duration-500 hover:text-yellow-400'>About</a>
            </li>
          <li  className='md:ml-8 text-xl md:my-0 my-7 hover:text-2xl transition ease-in-out duration-200'>
              <a href="#event" smooth className='text-white duration-500 hover:text-yellow-400'  >Event</a>
            </li>
          <li  className=' md:ml-8 text-xl md:my-0 my-7 hover:text-2xl transition ease-in-out duration-200'>
              <a href="#contact" smooth className='text-white duration-500 hover:text-yellow-400'>Contact</a>
            </li>


          </ul>
          
          <div>
            
        <div className="peer px-5 py-2  text-gray-400 flex ml-8 md:ml-0"> <div className='hover:text-yellow-400 px-2'>{!localStorage.getItem('token')?"Login/Register":`Hii! ${props.name}`}</div></div>
        
   
         <div className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg overflow-visible absolute">
            {/* <a class="px-5 py-3 hover:bg-gray-200" href={<Login/>}>Login</a> */}
            {/* <a class="px-5 py-3 hover:bg-gray-200" href="#">Register</a> */}
            {!localStorage.getItem('token')? <div className='flex flex-col'><Link to="/login" className='px-5 py-3 hover:bg-gray-200'>Login</Link>
            <Link to="/signin" className='px-5 py-3 hover:bg-gray-200'>Register</Link></div>:
            <div className='flex flex-col'><div  className='px-5 py-3 hover:bg-gray-200' onClick={handleLogout}>Logout</div>
             <Link to="/booked" className='px-5 py-3 hover:bg-gray-200'>Booked Tickets</Link></div>}
        </div> 
    </div>

  </div> 
      
</div>
   
  )
}

export default Navbar
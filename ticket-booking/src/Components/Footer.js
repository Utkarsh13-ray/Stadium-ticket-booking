import React from 'react'
import { SocialIcon } from 'react-social-icons';
// import twitter from './twitter.png'
export default function Footer() {

// input.blur();
  return (
    <>
    < div id='contact' className='bg-[#030f27] flex flex-col p-20 '>
     <div className='flex flex-col space-y-8 md:flex-row justify-center items-center align-middle w-5/6  md:space-x-24 lg:space-x-48 2xl:space-x-96'>
        <div className='flex flex-col '>
        <div className='text-yellow-400 font-bold text-xl'>Office Contact</div>
        <div className='h-0.5 w-20 bg-yellow-400'></div>
        <div className='flex my-2 '>
            <div className='text-white mr-2'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
       </svg></div>
       <div className='text-white font-bold'>
       IIIT Ranchi, Dhruva,Ranchi.
       </div>
        </div>
        
        <div className='flex my-2 '>
            <div className='text-white mr-2'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          </div>
       <div className='text-white font-bold'>
       +91-XXXXXX1234
       </div>
        </div>
        <div className='flex my-2 '>
            <div className='text-white mr-2'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
         </svg>

          </div>
       <div className='text-white font-bold'>
          @admin.iiitsports.co
       </div>
        </div>
       <div className='flex my-2 space-x-2'>

          <div className='rounded-[50%] bg-white hover:bg-yellow-400 hover:border-yellow-400 border-white border-2 '>
<a href="/"><SocialIcon network="twitter" bgColor="#030f27" /></a>

        </div>
          <div className='rounded-[50%] bg-white hover:bg-yellow-400 hover:border-yellow-400 border-white border-2 '>
          <a href='/'><SocialIcon network="linkedin" bgColor="#030f27" /></a>

        </div>
          <div className='rounded-[50%] bg-white hover:bg-yellow-400 hover:border-yellow-400 border-white border-2 '>
        <a href='https://www.instagram.com/_sports_iiitr_/'><SocialIcon network="instagram" bgColor="#030f27" /></a>
        </div>
          <div className='rounded-[50%] bg-white hover:bg-yellow-400 hover:border-yellow-400 border-white border-2  '>
        <a href='/'><SocialIcon network="facebook" bgColor="#030f27" /></a>
        </div>
        
       </div>
       
        </div>
         <div className='flex flex-col mb-10'>
         <div className='text-yellow-400 font-bold text-xl'>Schedule</div>
        <div className='h-0.5 w-20 bg-yellow-400'></div>
        <div className='text-white text-l font-bold w-60 my-4'>Sports festival will be held on second week of Feb 2023 this time .</div>
        <div className='flex text-gray-300 h-10 w-56 bg-white items-center   align-middle'>
         <div className='pl-2 text-xl'><input className='focus:outline-none'  size="10" type={'text'} placeholder='Email here'></input></div>
         <div className='bg-[#030f27] text-yellow-400 border-2 border-yellow-400 text-m py-1 px-0.5 mr-2 cursor-pointer hover:text-black hover:bg-yellow-400'>SUBMIT</div>
        </div>
         </div>

     </div>
     {/* <div className='flex justify-center'>
     <div className=' w-5/6 grid grid-cols-8 justify-center'>
         <div className='text-white'>
          Terms of use
         </div>
         <div className='text-white'>
          Privacy Policies
         </div>
         <div className='text-white'>
          Cookies
         </div>
         <div className='text-white mr-2'>
          Help
         </div>
        </div>
        </div> */}
        <div className='flex justify-center my-5 '>
        <div className='h-0.5 w-10/12 bg-[#626477d9]'></div>
        </div>
      

        <div className='flex items-center justify-center space-x-5'>
        <div className='text-white'>
          Terms of use
         </div>
         <div className='h-5 w-[1px] bg-[#626477d9]'></div>
         <div className='text-white'>
          Privacy Policies
         </div>
         <div className='h-5 w-[1px] bg-[#626477d9]'></div>
         <div className='text-white'>
          Cookies
         </div>
         <div className='h-5 w-[1px] bg-[#626477d9]'></div>
         <div className='text-white mr-2'>
          Help
         </div>
        </div>
        <div className='flex justify-center my-5 '>
        <div className='h-0.5 w-10/12 bg-[#626477d9]'></div>
        </div>
       
    <div className='flex justify-end text-white mr-20 '>
      <div className='text-white'>Developed By<span className='text-yellow-400 font-semibold'> Utkarsh Dwivedi</span></div>
    
    </div>
   
    </div>
    </>
  )
}

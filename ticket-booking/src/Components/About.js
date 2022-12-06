import React from 'react'
import i from './AB.jpg'
export default function About() {
  return (
    <>
    <div id='about' className='flex sm:mt-2 md:mt-0 flex-col md:flex-row w-full justify-center items-center'>
        <div className='bg-[#030f27] w-full md:w-1/3 text-white p-14 lg:p-20 text-center mx-4 md:mx-0'>
            <div>Day1</div>
            <div>Quarter Final Matches</div>
        </div>
        <div className='bg-yellow-500 w-full md:w-1/3 p-14 lg:p-20 text-center mx-4 md:mx-0'>
        <div>Day2</div>
            <div>Semifinal Final Matches</div>
        </div>
        <div className='bg-[#030f27] w-full md:w-1/3 text-white p-14 lg:p-20 text-center mx-4 md:mx-0'>
        <div>Day1</div>
            <div> Final Matches</div>
        </div>
    </div>
    <div className='flex flex-col bg-white items-center md:flex-row'>
      <div className="flex justify-center items-center m-4 md:m-8 2xl:m-20 md:w-[50%]">
        <img
        src={i} alt=" loading failed"
     />
      </div>
      <div className='flex flex-col mt-10 md:w-[50%] justify-center m-8'>
           <div className='text-yellow-400 text-xl font-bold'> THE SPORTS FEST</div>
           <div className=' text-5xl font-extrabold mt-5 '>FUN IS HERE</div>
           <div className=' mt-5 mr-5md:mr-10 2xl:mr-20 text-gray-400'> It's time for annual sports festival of IIIT Ranchi (A Centre of Excellence in Information Technology established by Ministry of HRD, Govt. of India). Held in mid-Feb every year, sports event attracts the sports enthusiasts of various colleges to come together and take part in this competitive experience.</div>
           <div className=' mt-5 mr-5 md:mr-10 2xl:mr-20 text-gray-400'> Sport fest offers a delectable line up of highly competitive events spread across all major sports domains. Backed up by hefty cash prizes, the major formal events would be Basketball, Cricket, Football, Swimming, TableTennis, Volleyball, Badminton, Chess, Carrom, Powerlifting, Snooker, Squash. They also plan to host many informal events like Futsal, Mobile Gaming, Gully Cricket, Kabaddi, Tug of War and Kho Kho which would also see great prizes.</div>
          
      </div>
    </div>
    </>
  )
}

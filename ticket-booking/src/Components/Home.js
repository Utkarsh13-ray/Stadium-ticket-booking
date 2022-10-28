import React from 'react'
import 'tw-elements';
import volley from './VOLLRHYBALL copy.jpg'
import college from './IIIT-Ranchi copy.jpg'
import sport from './sport-9 copy.jpg'
export default function Home() {
  return (
    <div id='home' className='w-100% md:w-[90%]  mx-auto '>
    <div id="carouselExampleIndicators" className="carousel slide relative mt-16 w-[100%]  " data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img
        src={college}
        className="block w-full"
        alt="Wild Landscape"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
      
      </div>
    
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src={sport}
        className="block w-full"
        alt="Camera"
      /><div class="carousel-caption hidden md:block absolute text-center">
    
    </div>
    </div>
    
    <div className="carousel-item float-left w-full">
      <img
        src={volley}
        className="block w-full"
        alt="Exotic Fruits"
      />
         <div class="carousel-caption hidden md:block absolute text-center">
      </div>
    
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
<div className='absolute top-1/2 left-[35%] sm:left-[40%] '><a href="#event" className='w-36 h-12 hover:border-0 cursor-pointer hover:text-black hover:bg-yellow-400 items-center justify-center flex text-white border-4 border-white sm:w-44 sm:h-12 md:w-56 md:h-14 lg:w-64 lg:h-16  xl:w-80 xl:h-20 text-center text-l md:text-xl transition duration-500 ease-in-out'>Book your ticket</a></div>
</div>
    </div>
  )
}

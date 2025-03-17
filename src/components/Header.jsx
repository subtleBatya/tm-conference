import React from 'react'
import { CalendarDays, MapPin } from 'lucide-react';
import image from '../assets/react.svg'
// import StickyNav from './StickyNav'
// import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className=' z-20 relative esas_container'>

            <div className=' pt-5'></div>
                {/* <div className='text-lg esas_txt font-semibold'>ARRAY</div> */}
                {/* <div className="grid grid-rows-1">
                    <div className=' grid grid-cols-12 gap-0 align-middle  font-semibold text-md border-2 rounded-md  items-center px-7'>
                        <div className='px-1 py-7 col-span-10 '>
                            <div className="bg-white    align-middle flex  px-2 py-3">
                                <div className="  flex align-middle items-center ">
                                    <div className="bg-blue-700 text-white me-2 px-4 py-2">
                                        8:00 - 9:30
                                    </div>
                                    <div className="  text-sm"> Регистрация <br /> (по приглашению)</div>
                                </div>
                            </div>
                        </div>
                        <div className=" px-1 py-7 col-span-2 ">
                            <div className="bg-white flex   px-2 py-3 ">
                                <div className="  flex align-middle  items-center ">
                                    
                                    <div className="  text-sm text-center "> Галерея (QR)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


  {/* <div className="flex grid py-4 gap-0 font-semibold text-md border esas_border rounded-md items-center px-7">
    
    {/* Left block *
    <div className=" col-span-3 ">
    
                                        <img src={image} className='aspect-[4/3] object-contain' alt="" />
    </div>

    {/* Right block 
    <div className="px-1 col-span-9 h-full flex">
      <div className=" text-2xl capitalize"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, optio!</div>
      <div className=" text-2xl capitalize"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, optio!</div>
    </div>

  </div> */}



<div className="bg-blue-700 text-white py-10 px-5 md:px-20"> 
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* Left Section (Logo/Image) */}
    <div className="w-full md:w-1/3">
      <div className="relative w-full">
        <img 
          src={image} 
          alt="Conference Logo" 
          className="w-full h-auto object-contain aspect-[4/3] md:aspect-auto" 
        />
      </div>
    </div>

    {/* Right Section (Text Content) */}
    <div className="flex flex-col gap-5 w-full md:w-2/3">
      <h2 className="text-yellow-300 text-lg font-semibold">
        МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ
      </h2>
      <h1 className="text-2xl md:text-3xl font-bold leading-tight">
        ГОСУДАРСТВЕННОЕ УПРАВЛЕНИЕ И ГОСУДАРСТВЕННАЯ СЛУЖБА: <br />
        НАСТОЯЩЕЕ И БУДУЩЕЕ
      </h1>

      {/* Date and Location */}
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-white" />
          <span>15.11.2024</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-white" />
          <span>Астана</span>
        </div>
      </div>

      {/* Buttons and Links */}
      <div className="flex flex-wrap gap-5 mt-3">
        <button className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-blue-700 transition">
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
        <button className="underline hover:text-yellow-300 transition">
          Информационное письмо
        </button>
        <button className="underline hover:text-yellow-300 transition">
          Требования к оформлению статьи
        </button>
      </div>
    </div>

  </div>
</div>





                
            
            
        </div>
    )
}

export default Header
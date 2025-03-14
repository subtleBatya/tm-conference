import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import image from '../assets/react.svg'
import Divider from '../components/Divider';
// import StickyNav from './StickyNav'
// import { NavLink } from 'react-router-dom'

function Program() {
    return (
    <>
        <div className=' z-20 relative esas_container'>

            <div className=' pt-5'></div>
                <div className='text-lg esas_txt font-semibold'>ARRAY</div>
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


            <div className=" py-4 space-y-1 font-semibold text-md border esas_border rounded-md items-center px-7">
                <div className='grid grid-cols-12'>
                    {/* Left block */}
                    <div className="px-1 col-span-10 flex">
                    <div className="bg-white flex items-center w-full px-2 py-3">
                        <div className="flex items-center">
                        <div className="bg-blue-700 text-white me-2 px-4 py-2">
                            8:00 - 9:30
                        </div>
                        <div className="text-sm">Регистрация <br /> (по приглашению)</div>
                        </div>
                    </div>
                    </div>

                    {/* Right block */}
                    <div className="px-1 col-span-2 h-full flex">
                    <div className="bg-white flex items-center justify-center w-full px-2 py-3">
                        <div className="text-sm text-center">Галерея (QR)</div>
                    </div>
                    </div>        
                </div>
                {/* 2nd ROW */}
                <div className='grid grid-cols-12'>
                    {/* Left block */}
                    <div className="px-1 col-span-10 flex">
                    <div className="bg-white flex items-center w-full px-2 py-3">
                        <div className="flex items-center">
                        <div className="bg-blue-700 text-white me-2 px-4 py-2">
                            8:00 - 9:30
                        </div>
                        <div className="text-sm">Регистрация <br /> (по приглашению)</div>
                        </div>
                    </div>
                    </div>

                    {/* Right block */}
                    <div className="px-1 col-span-2 h-full flex">
                    <div className="bg-white flex items-center justify-center w-full px-2 py-3">
                        <div className="text-sm text-center">Галерея (QR)</div>
                    </div>
                    </div>        
                </div>

                <div className='flex justify-center items-center mx-auto pt-2'>
                
                <Swiper
                    className='container'
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    // navigation
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                    }}
                >
                 <button className="custom-prev-button w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>   
                <SwiperSlide className=''>
                        <div className='flex w-full p-4 aspect-[9/3] bg-[#F8F8F8]'>
                            <div className='w-1/2 relative pe-5'>

                                <div className='text-goldColor w-3/4  font-semibold text-[30px] capitalize '>
                                    ‘’ ylymly-bilimli, sagdyn ýaşlar döwletimiziň kuwwatly güýjüdir, nurana geljegidir ‘’
                                </div>
                                <div className='absolute bottom-4 flex items-end gap-5  right-5 left-0'>
                                    <div className='wrap w-1/3 text-goldColor font-semibold text-xl'>Serdar
                                        Berdimuhamedow</div>
                                    <Divider showright={true} />
                                </div>
                            </div>

                            <div className='w-1/2 '>
                                <img src={image} className='w-full aspect-[16/9] object-contain' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='flex w-full p-4 aspect-[9/3] bg-[#F8F8F8]'>
                            <div className='w-1/2 relative pe-5'>

                                <div className='text-goldColor w-3/4  font-semibold text-[30px] capitalize '>
                                    ‘’ ylymly-bilimli, sagdyn ýaşlar döwletimiziň kuwwatly güýjüdir, nurana geljegidir ‘’
                                </div>
                                <div className='absolute bottom-4 flex items-end gap-5  right-5 left-0'>
                                    <div className='wrap w-1/3 text-goldColor font-semibold text-xl'>Serdar
                                        Berdimuhamedow</div>
                                    <Divider showright={true} />
                                </div>
                            </div>

                            <div className='w-1/2 '>
                                <img src={image} className='w-full aspect-[16/9] object-contain' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='flex w-full p-4 aspect-[9/3] bg-[#F8F8F8]'>
                            <div className='w-1/2 relative pe-5'>

                                <div className='text-goldColor w-3/4  font-semibold text-[30px] capitalize '>
                                    ‘’ ylymly-bilimli, sagdyn ýaşlar döwletimiziň kuwwatly güýjüdir, nurana geljegidir ‘’
                                </div>
                                <div className='absolute bottom-4 flex items-end gap-5  right-5 left-0'>
                                    <div className='wrap w-1/3 text-goldColor font-semibold text-xl'>Serdar
                                        Berdimuhamedow</div>
                                    <Divider showright={true} />
                                </div>
                            </div>

                            <div className='w-1/2 '>
                                <img src={image} className='w-full aspect-[16/9] object-contain' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <button className="custom-next-button flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                    </button>
                    </Swiper>
                    
                </div>


                

            </div>
  


                
            
            
        </div>
        </>
        );
}

export default Program
import React from 'react'
// import StickyNav from './StickyNav'
// import { NavLink } from 'react-router-dom'

function KeyThemes() {
    return (
        <div className=' z-20 relative esas_container'>

            <div className=' pt-5'></div>
                <div className='text-lg esas_txt font-semibold'>KEY THEMES</div>
                <hr className='my-4 w-full text-gray-600 ' />
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


  <div className="grid grid-cols-4 gap-4 px-4 font-semibold text-md border esas_border rounded-md py-4 ">
    
    {/* Left block */}
    {/* <div className="px-1 col-span-10 flex">
      <div className="bg-white flex items-center w-full px-2 py-3">
        <div className="flex items-center">
          <div className="bg-blue-700 text-white me-2 px-4 py-2">
            8:00 - 9:30
          </div>
          <div className="text-sm">Регистрация <br /> (по приглашению)</div>
        </div>
      </div>
    </div>

    {/* Right block 
    <div className="px-1 col-span-2 h-full flex">
      <div className="bg-white flex items-center justify-center w-full px-2 py-3">
        <div className="text-sm text-center">Галерея (QR)</div>
      </div>
    </div> */}
        <div className=" text-center items-center align-middle">
            <div className='border-t-6 rounded-t-2xl border-red-500 my-auto space-y-5 text-center items-center align-middle  aspect-[16/12] bg-gray-200/20'>
                <div>
                    <div className="  text-8xl font-bold text-blue-400  text-center align-middle items-center">01</div>
                    <div className=" capitalize text-center align-middle items-center">modern trends in public administration</div>
                </div>
            </div>
        </div>

        <div className=" text-center items-center align-middle">
            <div className='border-t-6 rounded-t-2xl border-green-500 my-auto space-y-5 text-center items-center align-middle  aspect-[16/12] bg-gray-200/20'>
                <div>
                    <div className=" text-8xl font-bold text-blue-400  text-center align-middle items-center">01</div>
                    <div className=" capitalize text-center align-middle items-center">modern trends in public administration</div>
                </div>
            </div>
        </div>
        <div className=" text-center items-center align-middle">
            <div className='border-t-6 rounded-t-2xl border-yellow-500 my-auto space-y-5 text-center items-center align-middle  aspect-[16/12] bg-gray-200/20'>
                <div>
                    <div className=" text-8xl font-bold text-blue-400  text-center align-middle items-center">01</div>
                    <div className=" capitalize text-center align-middle items-center">modern trends in public administration</div>
                </div>
            </div>
        </div>
        <div className=" text-center items-center align-middle">
            <div className='border-t-6 rounded-t-2xl border-orange-500 my-auto space-y-5 text-center items-center align-middle  aspect-[16/12] bg-gray-200/20'>
                <div>
                    <div className=" text-8xl font-bold text-blue-400  text-center align-middle items-center">01</div>
                    <div className=" capitalize text-center align-middle items-center">modern trends in public administration</div>
                </div>
            </div>
        </div>
        
    
    

  </div>


                
            
            
        </div>
    )
}

export default KeyThemes
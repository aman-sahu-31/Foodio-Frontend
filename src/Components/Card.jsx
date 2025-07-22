import React from 'react'
import m from '../assets/Photos/m.png'
import bg from '../assets/Photos/s-g.png'
import BestSelling from './BestSelling';
import { NavLink, Outlet } from 'react-router-dom'
function Card() { 
  return (
    <>
      <div className='  bg-[rgb(251,251,251)] rounded-2xl mt-2 h-100 flex items-center justify-between relative'>
        <div className='w-full  md:w-1/2 h-full   flex flex-col justify-center '>
          <p className='text-[15px] sm:text-[10px]  '>Order Restaurant Food, takeaway and groceries.</p>
          <p className='text-5xl  font-bold '>Feast Your Senses, <br /> <span className='text-[#fc8a06]'>Fast and Fresh</span></p>
          <form className='mt-5'>
            <label htmlFor="text" className='text-[15px] '>Enter a passcode to see what be deliver</label>
            <div className='relative mt-2'>
              <input type="text" className=' border p-2 rounded-3xl border-gray-400 bg w-60 ' placeholder='e.g. EC4R3TE' />
              <button className='p-2 px-5 bg-amber-500 rounded-4xl absolute left-40 w-35 '>Search</button>
            </div>
          </form>
        </div>
        <div className=' '>
        <img src={m} className='w-70 absolute hidden md:block  lg:block bottom-0 left-100  h-80 z-10' />
        </div>       
        <div className=' w-1/2  relative hidden lg:block'>
          <div className='w-full    rounded-l-full h-90 mt-10 bg-orange-400 '>
            <img src={bg} className='w-60 rounded-[5px] shadow-2xs h-65 absolute top-35 left-5  ' />

            <div className='w-70 h-17 rounded-[10px] bg-white absolute left-30 top-25 z-10 '>
              <div className='px-3'>
              <p className='flex  justify-between  text-[18px] font-bold '>Order <span className='text-sm font-normal'>Now</span></p>
              <p className='font-semibold text-[13px]'> We've Received Your Order !  </p>
              <p className='text-gray-400 text-[10px]'>Awaiting  Restorent Acceptnce</p>
              </div>
            </div>
            <div className='w-65 h-17 rounded-[10px] bg-white absolute left-50 top-50 z-10 '>
              <div className='px-3'>
              <p className='flex  justify-between  text-[18px] font-bold '>Order <span className='text-sm font-normal'>Now</span></p>
              <p className='font-semibold text-[13px]'> We've Received Your Order !  </p>
              <p className='text-gray-400 text-[10px]'>Awaiting  Restorent Acceptnce</p>
              </div>
              
            </div>
            <div className='w-70 h-17 rounded-[10px] bg-white absolute left-44 bottom-3 z-10 '>
              <div className='px-3'>
              <p className='flex  justify-between  text-[18px] font-bold '>Order <span className='text-sm font-normal'>Now</span></p>
              <p className='font-semibold text-[13px]'> We've Received Your Order !  </p>
              <p className='text-gray-400 text-[10px]'>Awaiting  Restorent Acceptnce</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
        <NavLink to={"/BestSelling"}  >
       <BestSelling/>
      </NavLink>
      <Outlet />
    </>
  )
}

export default Card
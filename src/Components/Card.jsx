import React from 'react'
import m from '../assets/m.png'

function Card() {
  return (
    <>
      <div className='  bg-[rgb(251,251,251)] rounded-2xl mt-2 h-100 flex relative'>
    <img src={m}  className='w-150 h-80 absolute bottom-0 left-55'/>
        <div className='w-1/2 h-full  flex flex-col justify-center pl-5 '>
          <p className='text-[13px]  '>Order Restaurant Food, takeaway and groceries.</p>
          <p className='text-4xl mt-3 font-bold '>Feast Your Senses, <br /> <span className='text-[#fc8a06]'>Fast and Fresh</span></p>
          <form className='mt-5'>
            <label htmlFor="text" className='text-[12px]'>Enter a passcode to see what be deliver</label>
            <div className='relative mt-1'>
              <input type="text" className=' border p-2 rounded-3xl border-gray-400 bg w-60 ' placeholder='e.g. EC4R3TE' />
              <button className='p-2 px-5 bg-amber-500 rounded-4xl absolute left-40 w-35 '>Search</button>
            </div>
          </form>
          
        </div>
        <div className=' w-1/2 bg-gray-600'>
        </div>

      </div>
    </>
  )
}

export default Card
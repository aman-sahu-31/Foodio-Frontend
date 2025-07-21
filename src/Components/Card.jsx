import React from 'react'


function Card() {
  return (
    <>
      <div className='  bg-[rgb(251,251,251)] rounded-2xl mt-2 h-100 flex'>
        <div className='w-1/2 h-full bg-violet-400 flex flex-col justify-center pl-5 '>
          <p className='text-[15px]  text-white'>Order Restaurant food, takeaway and groceries.</p>
          <p>Feast Your Senses, <span>Fast and Fresh</span></p>
          <form>
            <label htmlFor="text">Enter a passcode to see what be deliver</label>
            <div>
              <input type="text" />
              <button>Search</button>
            </div>
          </form>
        </div>
        <div className=' w-1/2 bg-gray-600'>h</div>

      </div>
    </>
  )
}

export default Card
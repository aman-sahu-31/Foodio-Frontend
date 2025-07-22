import React from 'react'
import logo1 from '../assets/Photos/image1.png'
import bg1 from '../assets/Photos/image2.png'
import { NavLink, Outlet } from 'react-router-dom'
import ReviewCard from '../Pages/ReviewCard'

function Partner() {
  return (
    <>
      <div className="grid mt-1 grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img src={logo1} alt="Partner" className="w-full h-72 object-cover" />
          <div className="absolute left-4 md:left-10 top-0 font-bold rounded-b-[8px] bg-white px-4 py-0.5 text-sm sm:text-base">
            Earn more with lower fees
          </div>
          <div className="absolute bottom-5 left-4 md:left-10 text-white">
            <p className="text-sm md:text-md text-orange-400">Signup as a business</p>
            <h2 className="text-2xl md:text-4xl font-extrabold">Partner with us</h2>
            <button className="w-36 md:w-40 bg-orange-400 mt-3 h-10 text-white rounded-full hover:bg-orange-600 transition text-[16px] md:text-[18px]">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img src={bg1} alt="Rider" className="w-full h-72 object-cover" />
          <div className="absolute left-4 md:left-10 top-0 font-bold rounded-b-[8px] bg-white px-4 py-0.5 text-sm sm:text-base">
            Avail exclusive perks
          </div>
          <div className="absolute bottom-5 left-4 md:left-10 text-white">
            <p className="text-sm md:text-md text-orange-400">Signup as a rider</p>
            <h2 className="text-2xl md:text-4xl font-bold">Ride with us</h2>
            <button className="w-36 md:w-40 bg-orange-400 mt-3 h-10 text-white rounded-full hover:bg-orange-600 transition text-[16px] md:text-[18px]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <NavLink to="/ReviewCard">
       <ReviewCard />
      </NavLink>
      <Outlet />
    </>
  )
}

export default Partner

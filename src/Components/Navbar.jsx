import React, { useState } from 'react'
import logo from '../assets/Photos/Foodi.png'
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'
import { TiLocation } from 'react-icons/ti'
import { FaShoppingBasket, FaCheckCircle, FaArrowDown } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className=" bg-white shadow pl-4  text-sm font-medium hidden md:block rounded-[5px] rounded-t-0px ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">🌟</span>
            <p>
              Get 5% Off your first order,
              <span className="text-[#fbaa4c] underline ml-1 cursor-pointer">
                Promo: ORDER5
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <TiLocation className="text-black text-lg" />
              <span className="text-sm">Regent Street, A6, AB200, London</span>
              <span className="text-orange-600 underline cursor-pointer hover:text-orange-400 text-sm">
                Change Location
              </span>
            </div>
            <div className="flex bg-green-700 h-13  text-white divide-x divide-green-600 rounded overflow-hidden border">
              <div className="relative flex items-center justify-center px-3">
                <FaShoppingBasket className="text-xl" />
                <FaCheckCircle className="absolute bottom-1 right-1 text-white bg-green-600 rounded-full text-[10px]" />
              </div>
              <div className="flex items-center justify-center px-3 py-2">
                <span className="text-sm font-semibold">23 Items</span>
              </div>
              <div className="flex items-center justify-center px-3 py-2">
                <span className="text-sm font-semibold">GBP 79.89</span>
              </div>
              <div className="flex items-center justify-center px-3 py-2">
                <div className="w-6 h-6 bg-white text-green-700 rounded-full flex items-center justify-center">
                  <FaArrowDown className="text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white  mt-5 mb-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 ml-5" />
          </div>
          <div className="hidden md:flex space-x-6 font-semibold text-sm">
            <p className="px-4 py-2 hover:bg-orange-200  rounded-full cursor-pointer">Home</p>
            <p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Browse Menu</p>
            <p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Special Offers</p>
            <p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Restaurants</p>
            <p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Track Order</p>
            <div className="hidden md:flex items-center bg-[#060b27] text-white rounded-full px-5 py-2 text-sm">
              <FaUser className="mr-2 text-orange-400" />
              <button className="mr-1">Login</button>/<button className="ml-1">Signup</button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4  font-semibold text-sm">
            <p className="block hover:bg-orange-200  px-4 py-2 rounded-full">Home</p>
            <p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Browse Menu</p>
            <p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Special Offers</p>
            <p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Restaurants</p>
            <p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Track Order</p>
            <div className="flex items-center bg-[#060b27] text-white rounded-full px-5 py-2 text-sm w-fit">
              <FaUser className="mr-2 text-orange-400" />
              <button className="mr-1">Login</button>/<button className="ml-1">Signup</button>
            </div>
          </div>
        )}
      </div>
   <Outlet/>
    </>
  )
}

export default Navbar

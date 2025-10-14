import React, { useState } from 'react'
import logo from '../assets/Photos/Foodi.png'
import { FaUser, FaBars, FaTimes, FaShoppingBasket, FaCheckCircle, FaArrowDown } from 'react-icons/fa'
import { TiLocation } from 'react-icons/ti'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Top promo bar */}
      <div className="bg-white shadow pl-4 text-sm font-medium hidden md:block rounded-[5px] rounded-t-0px">
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
              <span className="text-sm">Ab Road, Indore</span>
              <span className="text-orange-600 underline cursor-pointer hover:text-orange-400 text-sm">
                Change Location
              </span>
            </div>
            <div className="flex bg-green-700 h-13 text-white divide-x divide-green-600 rounded overflow-hidden border">
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

      {/* Main Navbar */}
      <div className="bg-white mt-5 mb-5">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-8 ml-5" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold text-sm items-center">
            {/* <NavLink to="/"><p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Home</p></NavLink> */}
            <NavLink to="/menubar"><p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Browse Menu</p></NavLink>
            <NavLink to="/offers"><p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Special Offers</p></NavLink>
            <NavLink to="/restaurent"><p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Restaurants</p></NavLink>
            <p className="px-4 py-2 hover:bg-orange-200 rounded-full cursor-pointer">Track Order</p>

            {/* Login/Signup Buttons */}
            <div className="flex items-center text-black border rounded-full text-sm px-3 py-1 gap-2">
              <FaUser className="mr-1 text-orange-400" />
              <NavLink to="/login" className="py-1 px-3 rounded-lg hover:bg-orange-100">Login</NavLink>
              <NavLink to="/signup" className="py-1 px-3 rounded-lg hover:bg-orange-100">Signup</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 font-semibold text-sm space-y-2">
            {/* <NavLink to="/"><p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Home</p></NavLink> */}
            <NavLink to="/menubar"><p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Browse Menu</p></NavLink>
            <NavLink to="/offers"><p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Special Offers</p></NavLink>
            <NavLink to="/restaurent"><p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Restaurants</p></NavLink>
            <p className="block hover:bg-orange-200 px-4 py-2 rounded-full">Track Order</p>

            {/* Mobile Login/Signup */}
            <div className="flex flex-col items-center bg-[#060b27] text-white rounded-full px-5 py-2 text-sm mt-2 w-full gap-2">
              <FaUser className="mb-2 text-orange-400" />
              <NavLink to="/login" className="px-4 py-2 rounded-lg bg-orange-500 text-white w-full text-center">Login</NavLink>
              <NavLink to="/signup" className="px-4 py-2 rounded-lg bg-gray-200 text-black w-full text-center">Signup</NavLink>
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </>
  )
}

export default Navbar

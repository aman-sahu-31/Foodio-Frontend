import React from 'react';
import { NavLink,Outlet } from 'react-router-dom'  
import Testimonial from '../Pages/Testimonial';
import BestCard from './BestCard';

function BestSelling() {
  return (
    <>
    <div className="mt-2 mb-5">
      <div className="flex justify-between items-center mb-2 ">
        <h2 className="text-2xl font-bold">BEST SELLING</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">OF</span>
          <button className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            VEGETABLE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
     <BestCard/>
    </div>
        <Testimonial/>
    </>
  );
}

export default BestSelling;

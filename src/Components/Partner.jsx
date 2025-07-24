import React from 'react';
import logo1 from '../assets/Photos/image1.png';
import bg1 from '../assets/Photos/image2.png';
import ReviewCard from '../Pages/ReviewCard';
import Restaurent from '../Pages/Restaurent';

function Partner() {
  return (
    <>
      <div className="bg-gray-100 shadow-xl p-4 sm:p-8 mt-5 sm:mt-10 rounded-2xl">
        <h1 className="font-Arbic text-3xl sm:text-4xl mb-6  font-bold text-gray-800">
          Grow with Us
        </h1>

        <div className="grid grid-cols-1 h-90 md:grid-cols-2 gap-6">
          {/* Partner Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src={logo1} alt="Partner with us" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-4 md:left-6 bg-white text-black font-semibold rounded-b-md px-4 py-1 text-sm sm:text-base">
              Earn more with lower fees
            </div>
            <div className="absolute bottom-5 left-4 md:left-6 text-white">
              <p className="text-sm sm:text-base text-orange-400">Signup as a business</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Partner with us</h2>
              <button className="mt-3 bg-orange-400 hover:bg-orange-600 transition w-36 sm:w-40 h-10 text-white rounded-full text-sm sm:text-base font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Rider Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src={bg1} alt="Ride with us" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-4 md:left-6 bg-white text-black font-semibold rounded-b-md px-4 py-1 text-sm sm:text-base">
              Avail exclusive perks
            </div>
            <div className="absolute bottom-5 left-4 md:left-6 text-white">
              <p className="text-sm sm:text-base text-orange-400">Signup as a rider</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Ride with us</h2>
              <button className="mt-3 bg-orange-400 hover:bg-orange-600 transition w-36 sm:w-40 h-10 text-white rounded-full text-sm sm:text-base font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
<Restaurent />
      <ReviewCard />
    </>
  );
}

export default Partner;

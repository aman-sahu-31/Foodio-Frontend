import React from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Subscribe from './Subscribe';

function ReviewCard() {
  return (
    <>
    <div className='mt-15 mb-2'>
      <h1 className='text-3xl font-Arbic'>Review Card</h1>
    <div className='w-full  mt-10 mb-15 h-full bg-yellow-400 rounded-sm transform rotate-1'>
      <div className="w-full p-6 bg-white rounded-md flex flex-col md:flex-row transform -rotate-1 items-start justify-center shadow-md mt-4 ">
        <div className="md:w-1/3 w-full border-r md:pr-6 pr-0 relative">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold ">4.9</h1>
            <p className="text-gray-500 text-sm">Based on 5000+ reviews</p>
          </div>

          <div className="space-y-1 text-sm">
            <div className="flex items-center text-gray-600">
              <div className="flex text-yellow-500 mr-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded mx-2">
                <div className="h-1 bg-yellow-500 w-[95%] rounded"></div>
              </div>
              <span className="text-right w-10">95%</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="flex text-yellow-500 mr-2">
                <FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded mx-2">
                <div className="h-1 bg-yellow-500 w-[5%] rounded"></div>
              </div>
              <span className="text-right w-10">5%</span>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="flex text-yellow-400 mr-2">
                <FaStar /><FaStar /><FaStar />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded mx-2"></div>
              <span className="text-right w-10">0%</span>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="flex text-yellow-400 mr-2">
                <FaStar /><FaStar />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded mx-2"></div>
              <span className="text-right w-10">0%</span>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="flex text-yellow-400 mr-2">
                <FaStar />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded mx-2"></div>
              <span className="text-right w-10">0%</span>
            </div>
          </div>
        </div>

        <div className="md:pl-8 pt-6 md:pt-0 w-full">
          <div className="text-yellow-500 text-sm mb-2 flex">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            Botanica rice crackers are a staple in my pantry. They are a healthier alternative to traditional crackers and chips, but still satisfy my craving for something spicy and crunchy. Chilli garlic flavor is my personal favorite – it's so delicious!
          </p>
          <p className="font-semibold text-gray-800 text-sm">
            Jennifer <span className="text-gray-500 font-normal">– From California</span>
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
    </div>
        <Subscribe />
    </>
  );
}

export default ReviewCard;

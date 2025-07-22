import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import testimonialImg from '../assets/Photos/testimonial.png';
import { NavLink, Outlet } from 'react-router-dom';
import Partner from '../Components/Partner';

function Testimonial() {
  return (
    <>
      <section className="py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="md:w-1/2 w-full bg-gray-100 p-4 rounded-md shadow-sm">
          <img
            src={testimonialImg}
            alt="Happy Customer"
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="md:w-1/2 w-full text-center flex items-center justify-center flex-col md:text-left">
          <h3 className="text-green-600 font-bold text-xl md:text-2xl mb-2 font-PermanentMarker">Testimonial</h3>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-Permanent">
            Customer Say About Us
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 px-2 md:px-0">
            <FaQuoteLeft className="inline mr-2 text-gray-400" />
            Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.
          </p>

          <div className="flex justify-center md:justify-start mb-3 text-green-500">
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
          </div>

          <p className="text-sm text-gray-500 mb-4">
            <strong>Customer</strong> - From Envato
          </p>

          <div className="flex justify-center md:justify-start gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>
          <Partner />
    </>
  );
}

export default Testimonial;

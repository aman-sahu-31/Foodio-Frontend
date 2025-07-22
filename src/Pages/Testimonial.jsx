import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import testimonialImg from '../assets/Photos/testimonial.png';
import Partner from '../Components/Partner';

function Testimonial() {
  return (
    <>
      <section className="py-12 px-4 md:px-20 mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 w-full h-80 bg-gray-200 transform -skew-x-12 px-6 pt-2 rounded-md shadow-md">
          <img
            src={testimonialImg}
            alt="Happy Customer"
            className="w-full h-full skew-x-12 object-center rounded"
          />
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-green-600 font-bold text-xl md:text-2xl mb-2 font-PermanentMarker">
            Testimonial
          </h3>

          <h2 className="text-2xl md:text-3xl font-Arbic font-bold mb-4 text-primary">
            Customer Say About Us
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 px-2 md:px-0">
            <FaQuoteLeft className="inline mr-2 text-gray-400" />
            Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.
          </p>

          <div className="flex text-green-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-4">
            <strong>Customer</strong> - From Envato
          </p>

          <div className="flex gap-2">
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

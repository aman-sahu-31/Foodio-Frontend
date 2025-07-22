import React from "react";
import Footer from "./Footer";

export default function Subscribe() {
  return (
    <>
      <div className="w-full flex items-center justify-center min-h-[24rem] mt-2 mb-2 bg-gray-50 px-4">
        <div className="text-center max-w-xl">
          <h4 className="text-gray-500 mb-2 text-sm">Our Newsletter</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Subscribe to Our Newsletter to <br />
            Get <span className="text-green-600">Updates on Our Latest Offers</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Get 25% off on your first order just by subscribing to our newsletter
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-5 py-3 rounded-full border border-gray-300 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-3 rounded-full bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
 
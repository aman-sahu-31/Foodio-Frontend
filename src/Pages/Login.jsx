import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';
import food from '../assets/Photos/Foodi.png';

function LoginDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
    setIsOpen(false);
  };

  return (
    <div className="relative"
    onClick={() => setIsOpen(true)}>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="text-right">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
          </div>

          {/* Logo */}
          <div className="text-center mb-6">
            <img src={food} alt="Logo" className="w-28 mx-auto" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-orange-500 mr-3" />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-orange-500 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="text-right text-sm text-orange-500 hover:underline cursor-pointer">
              Forgot your Password?
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
            >
              Login
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              Or Login using social Media
            </div>

            <div className="flex justify-center space-x-6 mt-2 text-xl">
              <a href="#" aria-label="Login with Google" className="text-red-500 hover:scale-110 transition">
                <FaGoogle />
              </a>
              <a href="#" aria-label="Login with Facebook" className="text-blue-600 hover:scale-110 transition">
                <FaFacebookF />
              </a>
            </div>
          </form>

          <p className="text-center text-sm mt-6 text-gray-700">
            Don’t have an account?{' '}
            <a href="/signup" className="text-orange-500 font-medium hover:underline">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginDrawer;

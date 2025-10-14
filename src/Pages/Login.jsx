import React from "react";
import { Mail, Lock, User } from "lucide-react";
import logo from '../assets/Photos/Foodi.png'
import { FaGoogle,FaFacebook } from "react-icons/fa";

function Login({ onClose, onLoginClick }) {

  
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-end z-50">
      <div className="w-full max-w-md bg-white h-full p-8 relative shadow-lg overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login Account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <div className="flex items-center  rounded-lg px-3 ">
            <User className="text-orange-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none border rounded-2xl px-2 py-2"
            />
          </div>
        </div>

       

        {/* Password */}
        <div className="mb-4">
          <div className="flex items-center  rounded-lg px-3 ">
            <Lock className="text-orange-500 mr-2" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none rounded-2xl border  px-2 py-2"
            />
          </div>
        </div>

     

        {/* Signup Button */}
        <button className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition">
          Register
        </button>

        {/* Divider */}
        <p className="text-center text-gray-500 my-3">Or Register with</p>

        {/* Social Login */}
        <div className="flex justify-center gap-6 mb-3">
          <button className="text-red-500 text-2xl "><FaGoogle/></button>
          <button className="text-blue-600 text-2xl"><FaFacebook/></button>
        </div>

        {/* Already have account */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-orange-500 font-semibold cursor-pointer"
            onClick={onLoginClick}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

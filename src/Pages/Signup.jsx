import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import food from '../assets/Photos/Foodi.png';

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Registered successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center shadow">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-8 relative">
        {/* Logo */}
        <div className="text-center mb-4">
          <img src={food} alt="Logo" className="w-30 mx-auto" />
        </div>

        <h2 className="text-xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaUser className="text-orange-500 mr-3" />
            <input type="text" placeholder="User Name" className="w-full focus:outline-none" required />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaEnvelope className="text-orange-500 mr-3" />
            <input type="email" placeholder="Email ID" className="w-full focus:outline-none" required />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-orange-500 mr-3" />
            <input type="password" placeholder="Password" className="w-full focus:outline-none" required />
          </div>

          <div className="text-sm text-gray-500">
            <input type="checkbox" required className="mr-2" />
            I agree to <span className="text-orange-500 underline">Terms & Conditions</span>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
          >
            Register Now
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">Or Register using social Media</div>

          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-600"><i className="fab fa-google">Google</i></a>
            <a href="#" className="text-sky-500"><i className="fab fa-facebook-f">Facebook</i></a>
          </div>
        </form>

        <p className="text-center text-sm mt-6 text-gray-700">
          Already have an account? <a href="/login" className="text-orange-500 font-medium hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

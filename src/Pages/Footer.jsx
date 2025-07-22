import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Grocery.</h4>
          <p className="text-sm text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex space-x-4 text-xl text-white">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaPinterestP className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Company</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Career</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Customer Services</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Track Your Order</li>
            <li className="hover:text-white cursor-pointer">Return</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Our Information</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">User Terms & Condition</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contact Info</h5>
          <p className="text-sm text-gray-300">+0123-456-789</p>
          <p className="text-sm text-gray-300">example@gmail.com</p>
          <p className="text-sm text-gray-300 mt-1">
            8502 Preston Rd.<br />
            Inglewood, Maine 98380
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-12 border-t border-green-800 pt-4">
        Copyright © 2024 <span className="text-green-400">Grocery Website Design</span>. All Rights Reserved.
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import logo from "../assets/Photos/Foodi.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import axios from "axios";

function Signup({ onClose, onLoginClick }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);

  // Step 1: Register User
  // const trySubmit = async (e) => {
  //   e.preventDefault();

  //   if (!fullName || !email || !password || !confirmPassword) {
  //     alert("All fields are required.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:8000/user/register", {
  //       first_name: fullName.split(" ")[0],
  //       last_name: fullName.split(" ")[1] || "",
  //       email: email,
  //       password: password,
  //       confirm_password: confirmPassword,
  //     });

  //     if (response.data.message === "Registration successful") {
  //       alert("Account created. OTP will be sent to your email.");

  //       // Step 2: Call OTP API
  //       await axios.post("http://localhost:8000/user/sendOtp", {
  //         email,
  //         otp_type: "verification",
  //       });

  //       // Show OTP input popup
  //       setShowOtpModal(true);
  //     } else {
  //       alert(response.data.message);
  //     }
  //   } catch (err) {
  //     alert(err.response?.data?.detail || "Registration failed. Try again.");
  //   }
  // };

  // // Step 3: Verify OTP
  // const handleOtpVerify = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/user/verifyOTP", {
  //       email,
  //       otp,
  //       otp_type: "verification",
  //     });

  //     if (res.data.message === "Email verified successfully") {
  //       alert("🎉 Registration complete! You can now login.");
  //       setShowOtpModal(false);
  //       setFull_Name("");
  //       setEmail("");
  //       setPassword("");
  //       setConfirmPassword("");
  //       onLoginClick(); // switch to login
  //     } else {
  //       alert(res.data.message);
  //     }
  //   } catch (error) {
  //     alert("OTP verification failed");
  //   }
  // };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
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
          Create Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={trySubmit}>
          {/* Full Name */}
          <div className="mb-4 flex items-center rounded-lg px-3 border">
            <User className="text-orange-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full outline-none px-2 py-2"
            />
          </div>

          {/* Email */}
          <div className="mb-4 flex items-center rounded-lg px-3 border">
            <Mail className="text-orange-500 mr-2" size={18} />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none px-2 py-2"
            />
          </div>

          {/* Password */}
          <div className="mb-4 flex items-center rounded-lg px-3 border">
            <Lock className="text-orange-500 mr-2" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none px-2 py-2"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6 flex items-center rounded-lg px-3 border">
            <Lock className="text-orange-500 mr-2" size={18} />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full outline-none px-2 py-2"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-80">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Enter OTP sent to your email
              </h3>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              />
              <button
                onClick={handleOtpVerify}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Verify OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;

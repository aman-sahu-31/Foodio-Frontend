import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock, User } from "lucide-react";
import logo from "../assets/Photos/Foodi.png";

function Signup({ onClose, onLoginClick }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const [statusMessage, setStatusMessage] = useState(""); // ✅ for inline messages

  // ========================
  // Register User
  // ========================
  const trySubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setStatusMessage("⚠️ All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setStatusMessage("⚠️ Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/user/SignUp", {
        Full_Name: fullName,
        Email: email,
        Password: password,
        Confirm_Password: confirmPassword,
      });

      if (response.data.message === "Registration Successful") {
        setStatusMessage("✅ Registration successful! Now send OTP to verify your email.");
        setOtpSent(false);
      } else {
        setStatusMessage(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setStatusMessage(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

// ========================
// Send OTP
// ========================
const handleSendOtp = async () => {
  try {
    const res = await axios.post("http://localhost:8000/user/SendOtp", {
      Email: email,
      Otp_Type: "verification", // ✅ spelling fixed
    });

    if (res.data.message === "OTP sent successfully") {
      setStatusMessage("📩 OTP sent to your email!");
      setOtpSent(true);
      setShowOtpModal(true);
    } else {
      setStatusMessage(res.data.message);
    }
  } catch (err) {
    console.log(err);
    setStatusMessage("Failed to send OTP");
  }
};

// ========================
// Verify OTP
// ========================
const handleOtpVerify = async () => {
  if (!otp) {
    setStatusMessage("⚠️ Please enter OTP");
    return;
  }

  try {
    const res = await axios.post("http://localhost:8000/user/verifyOTP", {
      Email: email,
      Otp: Number(otp),
      Otp_Type: "verification", // ✅ spelling fixed
    });

    if (res.data.message === "verification done") {
      setStatusMessage("🎉 Verification done! You can now login.");

      // ✅ close OTP modal & reset state
      setShowOtpModal(false);
      setOtpSent(false);

      // reset form
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setOtp("");

      // auto close signup after 2s
      setTimeout(() => {
        onLoginClick();
        onClose();
      }, 2000);
    } else {
      setStatusMessage(res.data.message);
    }
  } catch (error) {
    console.log(error);
    setStatusMessage("OTP verification failed");
  }
};


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

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={trySubmit}>
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

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        {/* Inline status message */}
        {statusMessage && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">
            {statusMessage}
          </p>
        )}

        {/* Show Send OTP Button After Registration */}
        {email && !otpSent && (
          <button
            onClick={handleSendOtp}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
          >
            Send OTP
          </button>
        )}

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-80">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Verify Your Email
              </h3>

              {/* Enter OTP */}
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              />

              {/* Verify OTP button */}
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

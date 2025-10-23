import React, { useState } from "react";
import axiosInstance from "../Axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Photos/Foodi.png";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", mobile: "", password: "", confirm_password: "", role: "User" });
  const [status, setStatus] = useState({ msg: "", error: false });

  // OTP states
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [otpType, setOtpType] = useState(""); // email or mobile
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // -------------------- Registration --------------------
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.confirm_password)
      return setStatus({ msg: "All fields required", error: true });
    if (form.password !== form.confirm_password)
      return setStatus({ msg: "Passwords do not match", error: true });

    try {
      const res = await axiosInstance.post("/user/register", form);
      setStatus({ msg: res.data.message, error: false });

      if (res.data.message === "Registration successful") {
        setShowOtpPage(true); // show OTP page after registration
      }
    } catch (err) {
      setStatus({ msg: err.response?.data?.message || "Server error", error: true });
    }
  };

  // -------------------- Send OTP --------------------
  const handleSendOtp = async (type) => {
    setOtpType(type);
    try {
      const payload =
        type === "email"
          ? { email: form.email, otp_type: "verification" }
          : { mobile: form.mobile, otp_type: "verification" };
      await axiosInstance.post("/user/send-otp", payload);
      setStatus({ msg: `OTP sent via ${type}`, error: false });
      setOtpSent(true);
    } catch {
      setStatus({ msg: `Failed to send OTP via ${type}`, error: true });
    }
  };

  // -------------------- Verify OTP --------------------
  const handleVerifyOtp = async () => {
    if (!otp) return setStatus({ msg: "Enter OTP", error: true });
    try {
      const payload =
        otpType === "email"
          ? { email: form.email, otp: Number(otp), otp_type: "verification" }
          : { mobile: form.mobile, otp: Number(otp), otp_type: "verification" };
      const res = await axiosInstance.post("/user/verify", payload);
      setStatus({ msg: res.data.message, error: false });
      if (res.data.message === "verification done") navigate("/login");
    } catch {
      setStatus({ msg: "OTP verification failed", error: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        <img src={img} alt="Signup Banner" className="w-1/2 h-15 mx-auto mt-2" />

        {!showOtpPage ? (
          <div className="p-8">
            <p className="text-center text-gray-500 mb-6">Create your account to get started!</p>
            <form onSubmit={handleRegister} className="space-y-4">
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" required />
              <input name="mobile" type="tel" placeholder="Mobile (optional)" value={form.mobile} onChange={handleChange} className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <select name="role" value={form.role} onChange={handleChange} className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="User">User</option>
                <option value="Owner">Owner</option>
                <option value="Admin">Admin</option>
              </select>
              <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" required />
              <input name="confirm_password" type="password" placeholder="Confirm Password" value={form.confirm_password} onChange={handleChange} className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" required />
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition transform hover:scale-[1.02]">
                Create Account
              </button>
            </form>
            {status.msg && <p className={`mt-4 text-center text-sm font-semibold ${status.error ? "text-red-600" : "text-green-600"}`}>{status.msg}</p>}
          </div>
        ) : (
          <div className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-center text-gray-800">Verify Account</h3>
            <p className="text-sm text-gray-500 text-center">Choose how to receive your OTP</p>

            <div className="flex flex-col space-y-3">
              {form.email && (
                <button onClick={() => handleSendOtp("email")} className="w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
                  Send OTP via Email ({form.email})
                </button>
              )}
              {form.mobile && (
                <button onClick={() => handleSendOtp("mobile")} className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition">
                  Send OTP via Mobile ({form.mobile})
                </button>
              )}
            </div>

            {otpSent && (
              <>
                <input value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} placeholder="Enter OTP" className="w-full border p-3 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <button onClick={handleVerifyOtp} className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                  Verify OTP
                </button>
              </>
            )}

            <button onClick={() => setShowOtpPage(false)} className="w-full text-gray-500 hover:underline mt-2">
              Back
            </button>

            {status.msg && <p className={`mt-2 text-center text-sm font-semibold ${status.error ? "text-red-600" : "text-green-600"}`}>{status.msg}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // for success/error messages
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });

      console.log(res.data);

      // ✅ Handle backend responses
      if (res.data.message === "Login Successful") {
        setMessage("Login Successful 🎉");
        setMessageType("success");

        const user = res.data.data;

        // ✅ Save token & user (plain string, not JSON)
        localStorage.setItem("token", res.data.accesstoken);
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ Redirect based on role after short delay
        setTimeout(() => {
          if (user.role === "Owner") navigate("/owner");
          else if (user.role === "Admin") navigate("/admin");
          else if (user.role === "User") navigate("/user");
          else navigate("/");
        }, 1000);
      } 
      else if (res.data.message === "User not found") {
        setMessage("Invalid email. Please try again.");
        setMessageType("error");
      } 
      else if (res.data.message === "Password Mismatch") {
        setMessage("Incorrect password. Please try again.");
        setMessageType("error");
      } 
      else if (res.data.message === "User not verified") {
        setMessage("Your account is not verified. Please verify your email.");
        setMessageType("error");
      } 
      else {
        setMessage(res.data.message || "Login failed. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-semibold text-center text-orange-500 mb-6">
          Welcome Back 👋
        </h2>

        {/* ✅ Message Display */}
        {message && (
          <div
            className={`text-center mb-4 py-2 rounded-lg font-medium ${
              messageType === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg mt-1 px-3 py-2">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                className="w-full focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg mt-1 px-3 py-2">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="password"
                className="w-full focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-orange-500 font-medium cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

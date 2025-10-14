import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // ✅ Get token directly from localStorage (no JSON.parse)
  const token = localStorage.getItem("token");

  // ❌ If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If token exists, render protected content
  return children;
}

export default ProtectedRoute;

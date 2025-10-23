import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  // Get token & user from localStorage
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  console.log("Protected Route User:", user);

  // If no token or user found → redirect
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Normalize allowedRoles to always be an array
  const rolesArray = Array.isArray(allowedRoles)
    ? allowedRoles
    : [allowedRoles];

  // If allowedRoles is provided and user's role is not allowed → redirect
  if (rolesArray.length > 0 && !rolesArray.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access
  return children;
}

export default ProtectedRoute;

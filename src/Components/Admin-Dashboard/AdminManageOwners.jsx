import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminManageOwners() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      // ✅ Always await the request and store in a variable
      const response = await axios.get(
        "http://localhost:8000/api/restaurant/my",
        { withCredentials: true } // Important for sending cookies
      );

      if (response.data.success) {
        setRestaurants(response.data.data || []);
        setError("");
      } else {
        setError(response.data.message || "Failed to fetch restaurants.");
      }
    } catch (err) {
      console.error("❌ Error fetching restaurants:", err);
      if (err.response?.status === 403) {
        setError("You do not have permission to view this data (403).");
      } else if (err.response?.status === 401) {
        setError("Unauthorized: Please log in again (401).");
      } else {
        setError("Something went wrong while fetching restaurants.");
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-violet-700 mb-4">
        🍽️ Manage Restaurants
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {restaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((r) => (
            <div
              key={r._id}
              className="p-4 bg-violet-50 rounded-lg shadow hover:shadow-lg transition-all"
            >
              <h2 className="text-lg font-semibold text-violet-700">
                {r.name}
              </h2>
              <p className="text-gray-600">📍 {r.location}</p>
              <p className="text-gray-500">⭐ {r.rating || "No rating yet"}</p>
              <p className="text-gray-500">Status: {r.status || "Pending"}</p>
            </div>
          ))}
        </div>
      ) : (
        !error && <p className="text-gray-500">No restaurants found.</p>
      )}
    </div>
  );
}

export default AdminManageOwners;

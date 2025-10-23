import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Axios/axiosInstance";

function OwnerMenuManagement() {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      // 🟠 Step 1: Validate restaurantId before API call
      if (!restaurantId || restaurantId === "undefined" || restaurantId === "null") {
        setError("❌ Invalid restaurant ID — please check the URL.");
        return;
      }

      try {
        setLoading(true);
        setError("");
        setMessage("");

        const res = await axiosInstance.get(`/restaurant/${restaurantId}`);

        // 🟠 Step 2: If backend returns invalid ID
        if (res.data?.success === false && res.data?.message?.toLowerCase().includes("invalid restaurant id")) {
          setError("❌ Invalid restaurant ID — please check the URL or contact support.");
          return;
        }

        // 🟠 Step 3: Handle other failures
        if (!res.data?.success) {
          setError(res.data?.message || "Failed to load restaurant data.");
          return;
        }

        // 🟢 Step 4: Load menu if available
        if (res.data?.data?.menu?.length > 0) {
          setMenuItems(res.data.data.menu);
          setMessage("✅ Menu loaded successfully!");
        } else {
          setMessage("No menu items found for this restaurant.");
          setMenuItems([]);
        }
      } catch (err) {
        console.error("Fetch menu error:", err);
        const backendMsg =
          err.response?.data?.message ||
          err.response?.data?.error ||
          "⚠️ Server error while fetching menu.";
        if (backendMsg.toLowerCase().includes("invalid restaurant id")) {
          setError("❌ Invalid restaurant ID — please check the URL or contact support.");
        } else {
          setError(backendMsg);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">🍴 Menu Management</h1>

      {/* 🔹 Loading */}
      {loading && (
        <div className="text-blue-600 bg-blue-50 border border-blue-200 p-3 rounded mb-3">
          Loading menu data...
        </div>
      )}

      {/* 🔹 Error Message */}
      {error && (
        <div className="text-red-700 bg-red-100 border border-red-300 p-3 rounded mb-3">
          {error}
        </div>
      )}

      {/* 🔹 Success Message */}
      {message && !error && (
        <div className="text-green-700 bg-green-100 border border-green-300 p-3 rounded mb-3">
          {message}
        </div>
      )}

      {/* 🔹 No restaurant ID */}
      {!restaurantId && !loading && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded">
          ⚠️ No restaurant selected. Please go back and choose one.
        </p>
      )}

      {/* 🔹 Menu Display */}
      {!loading && !error && menuItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
            >
              <img
                src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                <p className="text-orange-600 font-bold mt-2">₹{item.price}</p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    item.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.available ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Empty Menu */}
      {!loading && !error && menuItems.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No menu items available for this restaurant.
        </p>
      )}
    </div>
  );
}

export default OwnerMenuManagement;

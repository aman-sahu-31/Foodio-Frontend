import React, { useState, useEffect } from "react";
import axiosInstance from "../Axios/axiosInstance";

function OwnerMenuManagement() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // 🟢 Fetch all restaurants created by the owner
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/restaurant/my`);
        if (res.data?.success && res.data?.data?.length > 0) {
          setRestaurants(res.data.data);
        } else {
          setMessage("No restaurants found. Please create one first.");
        }
      } catch (err) {
        console.error("❌ Error fetching restaurants:", err);
        setError("Failed to load restaurants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  // 🟢 Fetch menu items for selected restaurant
  const fetchMenu = async (restaurantId) => {
    try {
      setLoading(true);
      setError("");
      setMessage("");

      const res = await axiosInstance.get(`/restaurant/${restaurantId}`);
      if (res.data?.success && res.data?.data?.menu) {
        setMenuItems(res.data.data.menu);
        setMessage(`✅ Menu loaded for ${res.data.data.name}`);
      } else {
        setMenuItems([]);
        setMessage("No menu items found for this restaurant.");
      }
    } catch (err) {
      console.error("❌ Error fetching menu:", err);
      setError("Failed to load menu for this restaurant.");
    } finally {
      setLoading(false);
    }
  };

  // 🟠 Handle restaurant selection
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    fetchMenu(restaurant._id);
  };

  // 🟢 Handle Add New Item (navigate or open modal)
  const handleAddItem = () => {
    alert(`🟢 Add new item for: ${selectedRestaurant?.name}`);
    // Here you can open a modal or navigate to /add-menu/${selectedRestaurant._id}
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">🍴 Menu Management</h1>

      {/* 🔹 Loading */}
      {loading && (
        <div className="text-blue-600 bg-blue-50 border border-blue-200 p-3 rounded mb-3">
          Loading...
        </div>
      )}

      {/* 🔹 Error Message */}
      {error && (
        <div className="text-red-700 bg-red-100 border border-red-300 p-3 rounded mb-3">
          {error}
        </div>
      )}

      {/* 🔹 Info/Success Message */}
      {message && !error && (
        <div className="text-green-700 bg-green-100 border border-green-300 p-3 rounded mb-3">
          {message}
        </div>
      )}

      {/* 🔹 Step 1: Show all restaurants if none selected */}
      {!selectedRestaurant && !loading && (
        <>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Your Created Restaurants:
          </h2>

          {restaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((rest) => (
                <div
                  key={rest._id}
                  onClick={() => handleSelectRestaurant(rest)}
                  className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg hover:border-orange-400 transition cursor-pointer"
                >
                  <img
                    src={rest.bannerImage || "https://via.placeholder.com/400x200?text=No+Image"}
                    alt={rest.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{rest.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{rest.address.fullAddress}</p>
                  <p className="text-sm text-gray-500 mt-1">{rest.timing.open} - {rest.timing.close}</p>
                  <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                    Manage Menu
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No restaurants found. Please create one first.
            </p>
          )}
        </>
      )}

      {/* 🔹 Step 2: Show Menu Items for Selected Restaurant */}
      {selectedRestaurant && !loading && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">
              🍽 Menu for {selectedRestaurant.name}
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                ← Back
              </button>
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                ➕ Add New Item
              </button>
            </div>
          </div>

          {/* Menu Cards */}
          {menuItems.length > 0 ? (
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
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
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
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No menu items available for this restaurant.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default OwnerMenuManagement;

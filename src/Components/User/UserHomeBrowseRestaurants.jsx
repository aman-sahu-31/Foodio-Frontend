import React, { useState } from "react";
import { MapPin, Star, Filter } from "lucide-react";

function UserHomeBrowseRestaurants() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  const restaurants = [
    {
      id: 1,
      name: "Spice Villa",
      location: "Bhopal",
      cuisine: "Indian",
      rating: 4.6,
      price: "₹₹",
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Sushi World",
      location: "Delhi",
      cuisine: "Japanese",
      rating: 4.3,
      price: "₹₹₹",
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Pasta Palace",
      location: "Mumbai",
      cuisine: "Italian",
      rating: 4.8,
      price: "₹₹",
      image:
        "https://images.unsplash.com/photo-1601924582971-d56e853b0a5a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Burger Town",
      location: "Pune",
      cuisine: "American",
      rating: 4.1,
      price: "₹",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Filtering logic
  const filteredRestaurants = restaurants.filter((r) => {
    return (
      (selectedLocation === "All" || r.location === selectedLocation) &&
      (selectedCuisine === "All" || r.cuisine === selectedCuisine) &&
      (selectedPrice === "All" || r.price === selectedPrice) &&
      (selectedRating === "All" || r.rating >= Number(selectedRating))
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Browse Restaurants 🍽️
      </h1>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800">
          <Filter className="text-orange-500 w-5 h-5" /> Filters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="All">All Locations</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
          </select>

          {/* Cuisine */}
          <select
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
            className="border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="All">All Cuisines</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
          </select>

          {/* Price */}
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="All">All Price Ranges</option>
            <option value="₹">₹ (Budget)</option>
            <option value="₹₹">₹₹ (Mid-range)</option>
            <option value="₹₹₹">₹₹₹ (Premium)</option>
          </select>

          {/* Rating */}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="All">All Ratings</option>
            <option value="4">4★ & above</option>
            <option value="4.5">4.5★ & above</option>
          </select>
        </div>
      </div>

      {/* Restaurant Cards */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {restaurant.name}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                  {restaurant.location}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-orange-600 font-medium">
                    {restaurant.cuisine}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 font-semibold">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-gray-700 font-medium mt-2">
                  Price: <span className="text-orange-500">{restaurant.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No restaurants found matching your filters.
        </p>
      )}
    </div>
  );
}

export default UserHomeBrowseRestaurants;

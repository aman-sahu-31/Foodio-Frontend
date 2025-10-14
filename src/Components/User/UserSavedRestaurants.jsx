import React, { useState } from "react";
import { Star, MapPin, Heart, Trash2, UtensilsCrossed } from "lucide-react";

function UserSavedRestaurants() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Spice Villa",
      image: "https://images.unsplash.com/photo-1600891964099-ecf9a25a4c0d",
      rating: 4.6,
      location: "Bhopal",
      cuisine: "Indian, Chinese",
      deliveryTime: "30 mins",
    },
    {
      id: 2,
      name: "Burger Hub",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      rating: 4.3,
      location: "Indore",
      cuisine: "Fast Food, Burgers",
      deliveryTime: "25 mins",
    },
    {
      id: 3,
      name: "Taste Junction",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      rating: 4.8,
      location: "Bhopal",
      cuisine: "North Indian, Snacks",
      deliveryTime: "35 mins",
    },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2 mb-8">
          <Heart size={28} className="text-orange-500" /> Saved Restaurants
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <UtensilsCrossed className="mx-auto text-gray-400 mb-4" size={50} />
            <h2 className="text-lg text-gray-600">
              You haven’t saved any restaurants yet.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => removeFavorite(res.id)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 shadow-md transition"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {res.name}
                    </h2>
                    <div className="flex items-center text-sm text-yellow-500 font-medium">
                      <Star size={15} className="mr-1" />
                      {res.rating}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="inline-block mr-1" />
                    {res.location}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">{res.cuisine}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    ⏱ {res.deliveryTime}
                  </p>

                  <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition text-sm font-semibold">
                    View Restaurant
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSavedRestaurants;

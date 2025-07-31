import React from 'react';
import restaurants from '../Pages/Json-File/MenuRestaurent.json';
import { useNavigate } from 'react-router-dom'; 

function MenuRestaurent() {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-indigo-700 tracking-wide">
        🍽️ Indore's Best Restaurants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {restaurants.map((res) => (
          <div
            key={res.id}
            onClick={() => navigate(`/restaurantCard/${res.id}`)}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-full h-48 object-cover" />
          <div className="p-5 space-y-3">
  <h2 className="text-xl font-bold text-indigo-800">{res.name}</h2>
  <p className="text-yellow-500 text-sm flex items-center gap-1">
    <span>{res.rating}</span>
    <span className="text-sm text-gray-500">(Customer Rating)</span>
  </p>
  <p className="text-gray-600 text-sm flex items-center gap-1">
    📍 <span>{res.location}</span>
  </p>
  <p className="text-sm text-gray-500">
    🍲 <span className="italic">Multi-Cuisine • Veg & Non-Veg</span>
  </p>
  <p className="text-sm text-gray-500">
    🕒 <span>Open: 11:00 AM – 11:00 PM</span>
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Dine-In</span>
    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Delivery</span>
    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-full">Takeaway</span>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuRestaurent;

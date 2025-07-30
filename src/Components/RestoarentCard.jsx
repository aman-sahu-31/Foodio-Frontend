import React from 'react';
import { useNavigate } from 'react-router-dom';
import restaurants from '../Pages/Json-File/RestaurantCard.json';

const RestoarentCard = () => {
  const navigate = useNavigate();

  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return <div className="p-4 text-gray-600">No restaurants available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {restaurants.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/restaurant/${item.id}`)}
          className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <img
            src={`https://source.unsplash.com/400x300/?restaurant,food,${item.name}`}
            alt={item.name}
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                ★ {item.rating}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{item.cuisine?.join(', ')}</p>
            <p className="text-gray-500 text-sm">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestoarentCard;

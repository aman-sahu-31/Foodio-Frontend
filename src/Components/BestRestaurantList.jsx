import React from 'react';
import Data from '../Pages/Json-File/BestCard.json';
import { useParams } from 'react-router-dom';

function RestaurantList() {
    const { id } = useParams();
const  selectedItem = Data.filter(item => item.id === parseInt(id));
 if (!selectedItem || !selectedItem.restaurantCheesePizza) {
    return <div className="p-6 text-red-500">No restaurant data found for this item.</div>;
  }
  const restaurantMap = {};

  Data.restaurantCheesePizza.forEach(item => {
    const name = item.restaurant;
    if (!restaurantMap[name]) {
      restaurantMap[name] = {
        restaurant: name,
        location: item.address,
        minPrice: item.price,
        rating: item.rating,
        distance: (Math.random() * 3 + 1.5).toFixed(1) + ' km' 
      };
    } else {
    
      restaurantMap[name].minPrice = Math.min(restaurantMap[name].minPrice, item.price);
    
      restaurantMap[name].rating = Math.max(restaurantMap[name].rating, item.rating);
    }
  });

  const restaurants = Object.values(restaurantMap);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((rest, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{rest.restaurant}</h2>
          <p className="text-gray-600">📍 {rest.location}</p>
          <p className="text-gray-600">💰 Starting at ₹{rest.minPrice}</p>
          <p className="text-gray-600">⭐ Rating: {rest.rating} / 5</p>
          <p className="text-gray-600">📏 Distance: {rest.distance}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;

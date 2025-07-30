import React from 'react';
import { useParams } from 'react-router-dom';
import Pizza from '../Pages/Json-File/PizzaRestaurant.json';

const MenuBarPizza = () => {
  const { id } = useParams();
  if (id !== 'Pizza') {
    return <div className="p-4 text-red-600 font-medium">🍕 No data available for "{id}"</div>;
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🍕 Pizza Restaurants in Indore</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Pizza.pizzaRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white px-3 py-2 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <div className='w-full h-38 '>
            <img src={restaurant.image} alt={restaurant.restaurantName}
              className="w-full  h-full object-cover"/>
              </div>
            <div className="py-1">
              <h3 className="text-xl font-Arbic font-semibold text-gray-900">{restaurant.restaurantName}</h3>
              <p className="text-sm text-gray-600 ">{restaurant.cuisine?.join(', ')}</p>
              <div className='flex  items-center justify-between'>
              <p className="text-sm text-gray-500">{restaurant.location}📍</p>
                <p className="text-green-700 text-sm">
                  ⭐ {restaurant.startingPizza?.rating} • {restaurant.deliveryTime}</p>
              </div>

              <div className="mt-1">
                <p className="text-sm text-gray-600">
                  {restaurant.startingPizza?.description}
                </p>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  Starting at ₹{restaurant.startingPizza?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBarPizza;

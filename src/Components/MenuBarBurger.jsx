import React from 'react';
import { useParams } from 'react-router-dom';
import BurgerData from '../Pages/Json-File/BurgerRestaurant.json';

const MenuBarBurger = () => {
  const { id } = useParams();
  if (id !== 'Burger') {
    return (
      <div className="p-4 text-red-600 font-medium">
        🍔 No data available for "{id}"
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🍔 Burger Restaurants in Indore
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BurgerData.burgerRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={restaurant.image}
              alt={restaurant.restaurantName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {restaurant.restaurantName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {restaurant.cuisine.join(', ')}
              </p>
              <p className="text-sm text-gray-500">📍 {restaurant.location}</p>

              <div className="mt-2">
                <p className="text-green-700 font-medium">
                  ⭐ {restaurant.startingBurger.rating} • {restaurant.deliveryTime}
                </p>
              </div>

              <div className="mt-2">
                <h4 className="text-md font-semibold text-gray-800">
                  🍔 {restaurant.startingBurger.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {restaurant.startingBurger.description}
                </p>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  Starting at ₹{restaurant.startingBurger.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBarBurger;

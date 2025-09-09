import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import Data from '../Pages/Json-File/BestCard.json';
// import { useNavigate } from 'react-router-dom';

function BestRestorantList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedItem = Data.find(item => item.id === parseInt(id));

  if (!selectedItem || !selectedItem.restaurantCheesePizza) {
    return <div className="p-6 text-red-500">No restaurant data found for this item.</div>;
  }
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-orange-500 text-sm mb-5 inline-block"
      >
        ← Back
      </button>
      <h2 className="text-xl font-bold text-gray-800 mb-4">🍕 Available at these Restaurants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedItem.restaurantCheesePizza.map((rest, index) => (
          
          <div key={index} className=" rounded-2xl p-4 bg-white shadow-md border border-gray-100"  
          >
               <div>
            <img src={rest.img} alt="" className='w-full h-40 rounded-[5px]' />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800">{rest.restaurant}</h3>
              <span className="text-yellow-500 font-medium text-sm">⭐ {rest.rating}/5</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">📍 {rest.location}</p>
            <p className="text-sm text-gray-600">💰 Starting from ₹{rest.minPrice}</p>
            <p className="text-sm text-gray-600">📏 {rest.distance}</p>
            <NavLink to={"/restaurantCard/2"}>
            <button className="mt-3 bg-orange-500 text-white text-sm px-4 py-1.5 rounded-full w-full hover:bg-orange-600 transition">
              Order Now
            </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BestRestorantList;

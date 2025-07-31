import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../Pages/Json-File/BestCard.json';

function BestRestorantList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedItem = Data.find(item => item.id === parseInt(id));

  if (!selectedItem || !selectedItem.restaurantCheesePizza) {
    return <div className="p-6 text-red-500">No restaurant data found for this item.</div>;
  }

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-orange-500 text-sm mb-5 inline-block"
      >
        ← Back
      </button>

      {/* Top Product Card */}
      {/* <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-6 p-4 flex flex-col md:flex-row items-center gap-4">
        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          className="w-full md:w-60 h-44 object-cover rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{selectedItem.title}</h1>
          <p className="text-sm text-gray-500 mb-2">{selectedItem.restaurant} • {selectedItem.address}</p>
          <div className="flex items-center gap-4">
            <div>
              <span className="text-lg font-semibold text-green-600">₹{selectedItem.price}</span>
              <span className="line-through ml-2 text-sm text-gray-400">₹{selectedItem.oldPrice}</span>
            </div>
            <span className="text-xs bg-orange-100 text-orange-500 font-medium px-2 py-1 rounded">
              {selectedItem.discount}
            </span>
          </div>
          <p className="text-yellow-500 mt-1">{"★".repeat(selectedItem.rating)} ({selectedItem.rating})</p>
        </div>
      </div> */}

      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">🍕 Available at these Restaurants</h2>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedItem.restaurantCheesePizza.map((rest, index) => (
          
          <div key={index} className=" rounded-2xl p-4 bg-white shadow-md border border-gray-100">
               <div>
              <img src={rest.img} alt="" className='w-full h-40' />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800">{rest.restaurant}</h3>
         

              <span className="text-yellow-500 font-medium text-sm">⭐ {rest.rating}/5</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">📍 {rest.location}</p>
            <p className="text-sm text-gray-600">💰 Starting from ₹{rest.minPrice}</p>
            <p className="text-sm text-gray-600">📏 {rest.distance}</p>
            <button className="mt-3 bg-orange-500 text-white text-sm px-4 py-1.5 rounded-full w-full hover:bg-orange-600 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestRestorantList;

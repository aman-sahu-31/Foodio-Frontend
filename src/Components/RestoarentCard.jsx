import React from 'react';
import Restaurent from '../Pages/Json-File/RestaurentCard.json';

function RestoarentCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {Restaurent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden max-w-sm w-full mx-auto transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
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
              <p className="text-gray-600 text-sm mb-1">{item.cuisine}</p>
              <p className="text-gray-500 text-sm">{item.location}</p>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>{item.price}</span>
                <span>{item.distance}</span>
              </div>
              <div className="mt-3 text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full w-fit">
                🪑 {item.facility}
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-700">
                  {item.offer}
                </button>
                <div className="text-center text-sm text-green-700 bg-green-100 p-2 rounded-md">
                  {item.bankOffer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RestoarentCard;

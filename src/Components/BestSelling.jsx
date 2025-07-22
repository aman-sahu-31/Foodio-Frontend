import React from 'react';

function BestSelling() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">BEST SELLING</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">OF</span>
          <button className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            VEGETABLE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative rounded-2xl shadow-md p-2 bg-white">
          <img
            src="https://i.pinimg.com/736x/fe/c3/b3/fec3b34d5edb094554ed761c0d6f9d17.jpg"
            alt="Momo"
            className="w-full h-44 object-cover rounded-xl"
          />
          <span className="absolute top-2 left-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
            🔥 -11%
          </span>
          <span className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
            ❤️
          </span>
          <div className="mt-2 px-2 text-sm">
            <p className="text-gray-700 font-medium">Steamed Veg Momos</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600 font-semibold">$8.00</span>
              <span className="line-through text-gray-400 text-xs">$9.00</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-400">★★★★★ (0)</span>
              <span className="text-black cursor-pointer">🛒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSelling;

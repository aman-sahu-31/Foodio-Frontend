import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Pages/Json-File/RestaurantCard.json';

const RestaurantExtraInfo = () => {
  const { id } = useParams();
  const item = data.find(r => String(r.id) === String(id));

  if (!item) {
    return <div className="text-center text-red-500">No restaurant data available.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-4 mt-6">
      <div className="flex flex-col md:flex-row gap-6">

        {/* ========== Sidebar: Categories ========== */}
        {item.menu?.categories && Object.keys(item.menu.categories).length > 0 && (
          <aside className="md:w-1/4 bg-orange-50 rounded-2xl shadow-md p-4 h-fit sticky top-6">
            <h3 className="text-lg font-bold text-orange-800 mb-4">📋 Menu Categories</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              {Object.entries(item.menu.categories).map(([category, items], index) => (
                <li key={index}>
                  <div className="font-semibold text-orange-700 mb-1">{category}</div>
                  <ul className="pl-3 space-y-0.5 text-gray-700">
                    {items.map((itemName, subIndex) => (
                      <li key={subIndex} className="flex items-center gap-2">
                        <span className="text-orange-500">🍴</span>
                        <span>{itemName}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* ========== Main Content ========== */}
        <main className="flex-1 space-y-8">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">★ {item.rating}</span>
          </div>

          {/* Image Section */}
          <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-md group">
            <img src={item.image} alt={item.name} className="w-full h-full object-center transform group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white space-y-0.5">
              <p className="text-sm font-medium">{item.location}</p>
              <p className="text-xs font-light">{item.type} • {item.price}</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-[13px] px-3 py-2 rounded-full font-bold shadow">Open Now</div>
          </div>

          {/* Special Offers */}
          {Array.isArray(item.offers) && item.offers.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800">🎁 Special Offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {item.offers.map((offer, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all bg-gradient-to-br from-orange-50 to-yellow-100">
                    <div className="p-5 space-y-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600">{offer.title}</h4>
                      <p className="text-sm text-gray-700">Only ₹{offer.perGuest}/guest</p>
                      <div className="text-sm mt-2 bg-orange-100 text-orange-700 px-2 py-1 rounded-full w-fit font-semibold">🎯 Pre-book now</div>
                      <p className="text-xs text-gray-500">Limited slots available.</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow">EXCLUSIVE</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Dishes */}
          {item.menu?.recommended?.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-800">🍲 Recommended Dishes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {item.menu.recommended.map((dish, index) => (
                  <div key={index} className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
                    {dish.badge && <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">{dish.badge}</div>}
                    <img src={dish.img} alt={dish.name} className="w-full h-40 object-cover" />
                    <div className="p-3">
                      <h4 className="text-[16px] font-bold text-gray-800">{dish.name}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{dish.description || 'Delicious & freshly prepared'}</p>
                      <div className="flex items-center mt-2">{dish.rating && <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded">★ {dish.rating}</div>}</div>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-lg font-bold text-gray-800">₹{dish.price}</p>
                        <button className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded hover:bg-purple-200">Add</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Offers */}
          {item.menu?.AdditionalOffers?.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-800">🎁 Additional Offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {item.menu.AdditionalOffers.map((offer, index) => (
                  <div key={index} className="border border-gray-400 rounded-xl shadow-md px-2 py-1 bg-gradient-to-b from-white to-rose-50">
                    <div className="flex gap-3">
                      <div className="flex items-center justify-center">
                        <img src={offer.img} alt={offer.title} className="w-15 h-5 object-center" />
                      </div>
                      <div>
                        <h4 className="text-md font-bold text-gray-900 mb-1">{offer.title}</h4>
                        <p className="text-[10px] text-gray-700 mb-2">@₹{offer.dis}/guest</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Maggi Items */}
          {item.menu?.maggiItems?.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-800">🍜 Maggi Items</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {item.menu.maggiItems.map((maggi, index) => (
                  <div key={index} className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
                    {maggi.badge && <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">{maggi.badge}</div>}
                    <img src={maggi.img} alt={maggi.name} className="w-full h-40 object-cover" />
                    <div className="p-3">
                      <h4 className="text-[16px] font-bold text-gray-800">{maggi.name}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{maggi.description || 'Tasty hot maggi'}</p>
                      <div className="flex items-center mt-2">{maggi.rating && <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded">★ {maggi.rating}</div>}</div>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-lg font-bold text-gray-800">₹{maggi.price}</p>
                        <button className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded hover:bg-purple-200">Add</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default RestaurantExtraInfo;

import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Pages/Json-File/MenuRestaurent.json';

const RestaurantExtraInfo = () => {
  const { id } = useParams();
  const item = data.find(r => String(r.id) === String(id));

  if (!item) {
    return <div className="text-center text-red-500">No restaurant data available.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
        <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
          ★ {item.rating}
        </span>
      </div>
      <div className="relative h-52 rounded overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-center" />
        <div className="absolute bottom-2 left-2 bg-gray-500/50 bg-opacity-50 text-white p-2 rounded">
          <p className="text-sm">{item.location}</p>
          <p className="text-xs">{item.type} • {item.price}</p>
        </div>
      </div>
      {Array.isArray(item.offers) && item.offers.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">🎁 Offers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {item.offers.map((offer, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-xl shadow-md p-4 bg-gradient-to-b from-white to-rose-50"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-1">{offer.title}</h4>
                <p className="text-sm text-gray-700 mb-2">@₹{offer.perGuest}/guest</p>

                <div className="text-xs text-gray-700  border-t pt-2 mt-2">
                  <div className='flex justify-between'>

                    <span className="font-semibold text-orange-500">Pre-book offer</span>
                    <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-600 font-bold rounded text-[10px]">
                      ONE EXCLUSIVE
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1 text-sm">Limited slots, buy offer and book your table</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {item.Data?.recommended?.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">🍲 Recommended Dishes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
            {item.Data.recommended.map((dish, index) => (
              <div key={index} className="border border-gray-300 overflow-hidden p-2 rounded-lg  flex  shadow-sm hover:shadow-md transition">
                <div className='w-30 flex items-center overflow-hidden  justify-center'>
                  <img src={dish.img} className='w-20 h-20 flex rounded-[5px]' />
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-700">{dish.name}</h4>
                  <p className="text-sm text-gray-600">₹{dish.price}</p>
                  {dish.rating && (
                    <p className="text-yellow-600 text-sm">
                      ⭐ {dish.rating} ({dish.reviews || 0} reviews)
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {item.Data?.AdditionalOffers?.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">🎁 Additional Offers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {item.Data.AdditionalOffers.map((offer, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-xl shadow-md px-2 py-1 bg-gradient-to-b from-white to-rose-50 " >
                  <div className='flex gap-3'>
                 <div className=' flex items-center justify-center'>
                  <img src={offer.img} alt={offer.title} className='w-15 h-5 object-center' />
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
      {item.Data?.maggiItems?.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">🍜 Maggi Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {item.Data.maggiItems.map((maggi, index) => (
              <div key={index} className="border bg-white border-gray-300 p-2 flex items-center justify-around rounded-lg shadow-sm ">
                 <div className=' w-1/3 h-15 '>
                  <img src={maggi.img} className='w-full h-full flex rounded-[5px]' alt="" />
                </div>
                <div className=' w-42'>
                  <h4 className="font-semibold text-gray-700">{maggi.name}</h4>
                  <p className="text-yellow-600 text-sm">
                    ⭐ {maggi.rating} ({maggi.reviews || 0} reviews)
                  </p>
                  <p className="text-sm text-gray-600 px-1">₹{maggi.price}</p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      )}
      {item.Data?.categories && Object.keys(item.Data.categories).length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">📋 Menu Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-700">
            {Object.keys(item.Data.categories).map((cat, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow-sm">
                <h4 className="font-bold text-[16px]">{cat}</h4>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  {item.Data.categories[cat].map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantExtraInfo;

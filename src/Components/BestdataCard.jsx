import React from 'react'
import { useParams } from 'react-router-dom'
import restaurant from '../Pages/Json-File/Bestdatacard.json'

function BestdataCard() {
  const { id } = useParams();
  const selectedItem = restaurant.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div className="p-6 text-red-500">No restaurant data found for this item.</div>;
  }

  return (
    <div className="p-6">
      <div className="rounded-xl overflow-hidden shadow-lg mb-10">
        <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-3xl font-bold">{selectedItem.name}</h2>
          <p className="text-gray-500">{selectedItem.location}</p>
          <p className="text-yellow-500 text-xl">{selectedItem.rating}</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">🍽️ Recommended Dishes</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {selectedItem.Data.recommended.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price}</p>
                <p className="text-sm text-yellow-600">⭐ {item.rating} ({item.reviews} reviews)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">🍜 Maggi Specials</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {selectedItem.Data.maggiItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price}</p>
                <p className="text-sm text-yellow-600">⭐ {item.rating} ({item.reviews} reviews)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestdataCard;

import React from 'react'
import Card from '../Pages/Json-File/BestCard.json'
import { useNavigate } from 'react-router-dom'
function BestCard() {

  const navigate = useNavigate();

  return (
    <>
   <div className="grid grid-cols-1 p-2 mt-7 object-contain sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   {Card.map((item) => (
        <div key={item.id} className="relative object-contain   rounded-2xl mx-3 my-1 shadow-md p-2 bg-white"
        onClick={() => navigate(`/details/${item.id}`)}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-44 object-cover rounded-xl"
          />
          <span className="absolute top-2 left-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
            🔥 {item.discount}
          </span>
          <span className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
            {item.isFavorite ? '❤️' : '🤍'}
          </span>
          <div className="mt-2 px-2 text-sm">
            <p className="text-gray-700  font-bold">{item.title}</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600 font-semibold">{item.price.toFixed(2)}</span>
              <span className="line-through text-gray-400 text-xs">{item.oldPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-orange-400">{"★".repeat(item.rating)} ({item.rating})</span>
              <span className="text-black cursor-pointer">🛒</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default BestCard
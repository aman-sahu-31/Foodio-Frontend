import React from 'react';
import Card from '../Pages/Json-File/AddCard.json'; // your JSON file
import { useNavigate } from 'react-router-dom';

function AddCard() {
    const navigate = useNavigate();

    return (
        <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
            {Card.map((item, index) => (
                <div
                    key={index}
                    onClick={() => navigate(`/AddCard/${item.id}`)}
                    className="flex bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition cursor-pointer"
                >
                    {/* Left: Image */}
                    <div className="w-2/5 h-100">
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-center rounded-l-xl"
                        />
                    </div>

                    <div className="flex-1 px-4 py-3">
                        <div className="flex items-center justify-center space-x-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3176/3176360.png"
                                alt="veg"
                                className="w-4 h-4"
                            />
                            <span className="text-xs text-gray-500">by Shravan Meals by Lunchbox</span>
                            <div className="flex items-center bg-green-100 text-green-700 text-xs font-bold px-1.5 py-0.5 rounded ml-auto">
                                ★ {item.rating}
                            </div>
                        </div>

                        <h3 className="text-[35px] font-bold text-gray-800 mt-2">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {item.description}
                        </p>

                        <div className="mt-2">
                            <div className="bg-green-50 text-green-700 text-xs px-2 py-1 inline-block rounded">
                                Get upto 25% off - <span className="font-semibold">Use Code PARTY</span>
                            </div>
                            <div className="text-blue-600 text-xs ml-2 inline-block cursor-pointer">
                                + 6 Offers
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <p className="text-xl font-bold">₹{item.price}</p>
                        <button
                            className="bg-indigo-600 w-30 mr-10 hover:bg-indigo-700 text-white text-sm font-bold px-6 py-3 rounded-lg shadow"
                            onClick={(e) => {
                                e.stopPropagation();
                                alert(`Added: ${item.name}`);
                            }}
                            >
                            Add
                        </button>
                            </div>
                    </div>
                   
                </div>
            ))}
        </div>
    );
}

export default AddCard;

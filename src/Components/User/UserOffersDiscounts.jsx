import React, { useState } from "react";
import { Tag, Gift, Percent } from "lucide-react";

function UserOffersDiscounts() {
  const [offers] = useState([
    {
      id: 1,
      title: "Flat 50% Off on Your First Order",
      restaurant: "Spice Villa",
      code: "WELCOME50",
      validity: "Valid till 31 Oct 2025",
      image:
        "https://images.unsplash.com/photo-1601924638867-3ec3ce2eac5f?w=800&q=80",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free - Burgers",
      restaurant: "Burger Hub",
      code: "B1G1BURGER",
      validity: "Valid till 25 Oct 2025",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    },
    {
      id: 3,
      title: "20% Off on Orders Above ₹499",
      restaurant: "Taste Junction",
      code: "SAVE20",
      validity: "Valid till 15 Nov 2025",
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13083?w=800&q=80",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 flex items-center gap-3 mb-10">
          <Gift size={32} /> Exciting Offers & Discounts
        </h1>

        {offers.length === 0 && (
          <p className="text-gray-500 text-center text-lg py-10">
            🎁 No offers available at the moment.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="relative h-56 sm:h-64">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                {/* Restaurant Name */}
                <span className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                  {offer.restaurant}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  {offer.title}
                </h2>

                <div className="flex items-center gap-2 text-orange-600 font-semibold">
                  <Percent size={18} />
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-lg font-medium">
                    {offer.code}
                  </span>
                </div>

                <p className="text-gray-500 text-sm">{offer.validity}</p>

                <button className="mt-3 bg-orange-600 text-white py-2 rounded-2xl hover:bg-orange-700 transition text-sm font-semibold flex items-center justify-center gap-2">
                  <Tag size={16} /> Apply Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserOffersDiscounts;

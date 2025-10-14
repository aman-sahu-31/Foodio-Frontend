import React, { useState } from "react";

function AdminOffersPromotions() {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      restaurant: "Spice Villa",
      title: "10% Off Pizza",
      description: "Get 10% off on all pizza orders above ₹200",
      code: "PIZZA10",
      status: "Pending",
      date: "2025-10-12",
    },
    {
      id: 2,
      restaurant: "Taste Hub",
      title: "Festive Deal",
      description: "Buy 1 Get 1 Free Veg Burger",
      code: "BURGERBOGO",
      status: "Approved",
      date: "2025-10-10",
    },
    {
      id: 3,
      restaurant: "Foodies Delight",
      title: "Cold Drink Discount",
      description: "20% off on all cold drinks",
      code: "COLD20",
      status: "Pending",
      date: "2025-09-30",
    },
  ]);

  const toggleStatus = (id) => {
    setPromotions((prev) =>
      prev.map((promo) => {
        if (promo.id === id) {
          if (promo.status === "Approved") return { ...promo, status: "Rejected" };
          if (promo.status === "Rejected") return { ...promo, status: "Approved" };
          if (promo.status === "Pending") return { ...promo, status: "Approved" };
        }
        return promo;
      })
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Promotions & Offers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.length > 0 ? (
          promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold text-gray-800">{promo.title}</h2>
                <p className="text-gray-600">Restaurant: {promo.restaurant}</p>
                <p className="text-gray-700 mt-1">{promo.description}</p>
                <p className="text-gray-500 text-sm mt-1">Code: {promo.code}</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    promo.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : promo.status === "Rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {promo.status}
                </span>

                <button
                  onClick={() => toggleStatus(promo.id)}
                  className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-sm"
                >
                  {promo.status === "Approved" ? "Reject" : "Approve"}
                </button>
              </div>

              <p className="text-gray-400 text-xs mt-3">Created on: {promo.date}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No promotions available.
          </p>
        )}
      </div>
    </div>
  );
}

export default AdminOffersPromotions;

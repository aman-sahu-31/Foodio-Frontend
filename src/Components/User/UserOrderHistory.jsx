import React, { useState } from "react";
import { Clock, CheckCircle, XCircle, UtensilsCrossed, Receipt } from "lucide-react";

function UserOrderHistory() {
  const [orders] = useState([
    {
      id: "ORD12345",
      restaurant: "Spice Villa",
      items: "Paneer Butter Masala, Garlic Naan",
      date: "Oct 10, 2025",
      total: "₹520",
      status: "Delivered",
    },
    {
      id: "ORD67890",
      restaurant: "Burger Hub",
      items: "Cheese Burger, Fries, Coke",
      date: "Oct 8, 2025",
      total: "₹350",
      status: "Pending",
    },
    {
      id: "ORD54321",
      restaurant: "Taste Junction",
      items: "Veg Thali, Lassi",
      date: "Sep 29, 2025",
      total: "₹280",
      status: "Cancelled",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle size={18} className="text-green-600" />;
      case "Cancelled":
        return <XCircle size={18} className="text-red-600" />;
      default:
        return <Clock size={18} className="text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2 mb-8">
          <Receipt size={28} /> Order History
        </h1>

        {orders.length === 0 ? (
          <p className="text-gray-500 text-center text-lg py-10">
            🍴 No previous orders found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {order.restaurant}
                    </h2>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">
                    <UtensilsCrossed size={15} className="inline-block mr-1" />
                    {order.items}
                  </p>
                  <p className="text-gray-500 text-sm">Date: {order.date}</p>
                  <p className="text-gray-800 font-semibold mt-2">
                    Total: {order.total}
                  </p>
                </div>

                <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition text-sm font-semibold">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserOrderHistory;

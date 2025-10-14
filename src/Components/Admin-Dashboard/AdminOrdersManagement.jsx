import React, { useState } from "react";

function AdminOrdersManagement() {
  const [orders, setOrders] = useState([
    {
      id: 101,
      user: "Rahul Sharma",
      restaurant: "Spice Villa",
      status: "Delivered",
      total: 450,
      date: "2025-10-12",
    },
    {
      id: 102,
      user: "Anjali Mehta",
      restaurant: "Taste Hub",
      status: "Pending",
      total: 320,
      date: "2025-10-11",
    },
    {
      id: 103,
      user: "Rohan Verma",
      restaurant: "Foodies Delight",
      status: "Cancelled",
      total: 200,
      date: "2025-10-10",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Orders Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Order ID: {order.id}</h2>
                <p className="text-gray-600">User: {order.user}</p>
                <p className="text-gray-700 font-medium mt-1">Restaurant: {order.restaurant}</p>
                <p className="text-gray-700 mt-1">Total: ₹{order.total}</p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {order.status}
                </span>

                <p className="text-gray-400 text-sm">{order.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default AdminOrdersManagement;

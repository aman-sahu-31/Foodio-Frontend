import React from "react";
import { Eye, CheckCircle, XCircle, Clock } from "lucide-react";
import OwnerSidebar from "./OwnerSidebar";

function OwnerOrder() {
  // Sample static data (you can later replace this with your backend or JSON)
  const orders = [
    {
      id: "ORD-001",
      customer: "Aman Sahu",
      restaurant: "Spice Villa",
      items: "Cheese Pizza, Coke",
      total: "₹450",
      status: "Delivered",
      date: "2025-10-05",
    },
    {
      id: "ORD-002",
      customer: "Priya Sharma",
      restaurant: "Taste Town",
      items: "Veg Maggi, Cold Coffee",
      total: "₹270",
      status: "Pending",
      date: "2025-10-06",
    },
    {
      id: "ORD-003",
      customer: "Rahul Verma",
      restaurant: "Foodie’s Hub",
      items: "Paneer Roll, Sprite",
      total: "₹320",
      status: "Cancelled",
      date: "2025-10-06",
    },
  ];

  return (
    <div className="flex">
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">📦 Orders Details</h2>

      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold">Order ID</th>
              <th className="py-3 px-4 font-semibold">Customer</th>
              <th className="py-3 px-4 font-semibold">Restaurant</th>
              <th className="py-3 px-4 font-semibold">Items</th>
              <th className="py-3 px-4 font-semibold">Total</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Date</th>
              <th className="py-3 px-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-orange-50 transition"
              >
                <td className="py-3 text-sm px-2 ">{order.id}</td>
                <td className="py-3 px-2 text-sm">{order.customer}</td>
                <td className="py-3 px-2 text-sm">{order.restaurant}</td>
                <td className="py-3 px-2 text-sm">{order.items}</td>
                <td className="py-3 px-2 text-sm font-semibold">{order.total}</td>
                <td className="py-3 px-2 text-sm">
                  {order.status === "Delivered" && (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <CheckCircle size={16} /> Delivered
                    </span>
                  )}
                  {order.status === "Pending" && (
                    <span className="flex items-center gap-1 text-yellow-600 font-medium">
                      <Clock size={16} /> Pending
                    </span>
                  )}
                  {order.status === "Cancelled" && (
                    <span className="flex items-center gap-1 text-red-600 font-medium">
                      <XCircle size={16} /> Cancelled
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-gray-600">{order.date}</td>
                <td className="py-3 px-4 text-center">
                  <button className="flex items-center justify-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition">
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default OwnerOrder;

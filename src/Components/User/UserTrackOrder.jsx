import React, { useState } from "react";
import { Clock, MapPin, CheckCircle, Truck, Utensils, Loader2 } from "lucide-react";

function UserTrackOrder() {
  const [order] = useState({
    id: "ORD-10234",
    restaurant: "Spice Villa",
    location: "Bhopal",
    status: "Out for Delivery",
    estimatedDelivery: "12:45 PM",
    items: ["Paneer Butter Masala", "2 Butter Naan", "Sweet Lassi"],
    orderTime: "12:10 PM",
    deliveryPerson: "Ravi Sharma",
  });

  const steps = [
    { label: "Order Placed", icon: <Utensils />, completed: true },
    { label: "Preparing", icon: <Loader2 />, completed: true },
    { label: "Out for Delivery", icon: <Truck />, completed: order.status === "Out for Delivery" || order.status === "Delivered" },
    { label: "Delivered", icon: <CheckCircle />, completed: order.status === "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-6 ">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
          Track Your Order
        </h1>

        {/* Restaurant & Order Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-4">
          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{order.restaurant}</h2>
            <p className="text-gray-600 flex items-center justify-center md:justify-start gap-1 mt-1">
              <MapPin size={16} /> {order.location}
            </p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              <span className="font-medium text-gray-800">Order ID:</span> {order.id}
            </p>
          </div>
          <div className="text-center md:text-right mt-3 md:mt-0">
            <p className="text-sm text-gray-500">Estimated Delivery</p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600">{order.estimatedDelivery}</p>
          </div>
        </div>

        {/* Order Items */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Your Items</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {order.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="relative mt-6 pl-6 md:pl-10">
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 relative">
              <div
                className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full z-10 text-white ${
                  step.completed ? "bg-gradient-to-tr from-orange-500 to-orange-600" : "bg-gray-300"
                }`}
              >
                {step.icon}
              </div>
              <div className="ml-4 md:ml-6">
                <h4 className={`font-semibold text-base md:text-lg ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                  {step.label}
                </h4>
                <p className={`text-sm md:text-base ${step.completed ? "text-gray-500" : "text-gray-400"}`}>
                  {step.completed ? "Completed" : "Pending"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="mt-6 p-4 md:p-6 bg-orange-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-gray-800 font-medium">
              <span className="text-orange-600">Delivery Partner:</span> {order.deliveryPerson}
            </p>
            <p className="text-gray-600 text-sm sm:text-base flex items-center justify-center sm:justify-start gap-1 mt-1">
              <Clock size={14} /> Order placed at {order.orderTime}
            </p>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700 transition font-semibold">
            Contact Rider
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTrackOrder;

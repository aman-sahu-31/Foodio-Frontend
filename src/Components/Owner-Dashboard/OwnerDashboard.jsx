import React from "react";

function OwnerDashboard() {
  // Dashboard Quick Stats
  const stats = [
    {
      title: "Total Orders",
      value: 120,
      icon: "📦",
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Total Revenue",
      value: "₹25,400",
      icon: "💰",
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      title: "Active Offers",
      value: 8,
      icon: "🎁",
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    {
      title: "Pending Orders",
      value: 15,
      icon: "⏳",
      bg: "bg-red-100",
      text: "text-red-600",
    },
    {
      title: "Top-Selling Items",
      value: 5,
      icon: "⭐",
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  // Recent Orders (sample data)
  const recentOrders = [
    { id: "ORD-001", customer: "Aman", restaurant: "Spice Villa", amount: "₹450", status: "Delivered" },
    { id: "ORD-002", customer: "Priya", restaurant: "Taste Town", amount: "₹320", status: "Pending" },
    { id: "ORD-003", customer: "Rahul", restaurant: "Foodie's Hub", amount: "₹500", status: "Delivered" },
    { id: "ORD-004", customer: "Sneha", restaurant: "Foodie's Hub", amount: "₹380", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
   

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl ${stat.bg} ${stat.text}`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h3 className="text-xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white shadow-md rounded-2xl p-6 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Restaurant</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-orange-50 transition">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.restaurant}</td>
                <td className="py-2 px-4 font-semibold">{order.amount}</td>
                <td
                  className={`py-2 px-4 font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OwnerDashboard;

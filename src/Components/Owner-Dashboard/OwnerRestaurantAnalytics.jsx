import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function OwnerRestaurantAnalytics() {
  // Sample data with restaurant names
  const ordersData = [
    { day: "Mon", orders: 30 },
    { day: "Tue", orders: 45 },
    { day: "Wed", orders: 60 },
    { day: "Thu", orders: 50 },
    { day: "Fri", orders: 70 },
    { day: "Sat", orders: 90 },
    { day: "Sun", orders: 80 },
  ];

  const topItems = [
    { name: "Cheese Pizza", orders: 120 },
    { name: "Veg Burger", orders: 90 },
    { name: "Paneer Tikka", orders: 75 },
    { name: "Maggi", orders: 60 },
    { name: "Cold Drink", orders: 50 },
  ];

  const activeTimes = [
    { time: "8 AM", orders: 15 },
    { time: "12 PM", orders: 50 },
    { time: "4 PM", orders: 30 },
    { time: "8 PM", orders: 80 },
    { time: "10 PM", orders: 40 },
  ];

  const COLORS = ["#FF7F50", "#FFBB28", "#00C49F", "#0088FE", "#FF8042"];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-600">Restaurant Analytics</h1>

      {/* Daily/Weekly Orders */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Orders This Week</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ordersData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="day" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#FF7F50" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Selling Items */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Top Selling Items</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={topItems}
              dataKey="orders"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {topItems.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Most Active Order Times */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Most Active Order Times</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activeTimes} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#00C49F" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sample Restaurants Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Spice Villa", "Taste Hub", "Foodies' Corner"].map((restaurant, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{restaurant}</h3>
            <p className="text-gray-500 mb-4">Weekly Orders: {ordersData.reduce((a, b) => a + b.orders, 0)}</p>
            <button className="mt-auto px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OwnerRestaurantAnalytics;

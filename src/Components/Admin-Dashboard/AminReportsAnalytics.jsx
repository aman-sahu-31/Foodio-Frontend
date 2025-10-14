import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AdminReportsAnalytics() {
  // Sample data
  const salesData = [
    { day: "Mon", sales: 5000 },
    { day: "Tue", sales: 7000 },
    { day: "Wed", sales: 6500 },
    { day: "Thu", sales: 8000 },
    { day: "Fri", sales: 9000 },
    { day: "Sat", sales: 12000 },
    { day: "Sun", sales: 10000 },
  ];

  const topRestaurants = [
    { name: "Spice Villa", orders: 120 },
    { name: "Taste Hub", orders: 90 },
    { name: "Foodies Delight", orders: 75 },
    { name: "Urban Tandoor", orders: 60 },
    { name: "Burger Town", orders: 50 },
  ];

  const topItems = [
    { name: "Cheese Pizza", orders: 150 },
    { name: "Paneer Tikka", orders: 120 },
    { name: "Veg Burger", orders: 100 },
    { name: "Maggi", orders: 80 },
    { name: "Cold Drink", orders: 70 },
  ];

  const COLORS = ["#FF7F50", "#FFBB28", "#00C49F", "#0088FE", "#FF8042"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Reports & Analytics</h1>

      {/* Sales Chart */}
      <div className="mb-8 bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Daily Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#FF7F50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Restaurants */}
      <div className="mb-8 bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Top Performing Restaurants</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={topRestaurants}
              dataKey="orders"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {topRestaurants.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Most Ordered Items */}
      <div className="mb-8 bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Most Ordered Items</h2>
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
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminReportsAnalytics;

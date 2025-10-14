import React from "react";
import { Users, Coffee, ShoppingCart, Clock } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function AdminDashboard() {
  // Dummy data
  const stats = {
    totalUsers: 1200,
    totalRestaurants: 85,
    totalOrders: 4500,
    pendingOrders: 120,
  };

  const revenueData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 35000 },
    { month: "Mar", revenue: 50000 },
    { month: "Apr", revenue: 48000 },
    { month: "May", revenue: 60000 },
    { month: "Jun", revenue: 75000 },
    { month: "Jul", revenue: 70000 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Admin Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow flex items-center space-x-4 hover:shadow-2xl transition">
          <Users className="w-10 h-10 text-orange-500" />
          <div>
            <p className="text-gray-500">Total Users</p>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center space-x-4 hover:shadow-2xl transition">
          <Coffee className="w-10 h-10 text-green-500" />
          <div>
            <p className="text-gray-500">Total Restaurants</p>
            <p className="text-2xl font-bold">{stats.totalRestaurants}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center space-x-4 hover:shadow-2xl transition">
          <ShoppingCart className="w-10 h-10 text-blue-500" />
          <div>
            <p className="text-gray-500">Total Orders</p>
            <p className="text-2xl font-bold">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center space-x-4 hover:shadow-2xl transition">
          <Clock className="w-10 h-10 text-red-500" />
          <div>
            <p className="text-gray-500">Pending Orders</p>
            <p className="text-2xl font-bold">{stats.pendingOrders}</p>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-xl shadow mb-8 hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="revenue" stroke="#FF7F50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Growth Analytics */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold mb-4">Growth Analytics</h2>
        <p className="text-gray-600 mb-2">
          Users growth increased by <span className="text-green-500 font-semibold">25%</span> compared to last month.
        </p>
        <p className="text-gray-600 mb-2">
          Restaurants added this month: <span className="text-blue-500 font-semibold">12</span>
        </p>
        <p className="text-gray-600">
          Total orders increased by <span className="text-orange-500 font-semibold">15%</span>.
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;

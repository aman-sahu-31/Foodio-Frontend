import React, { useState } from "react";
import { CheckCircle, XCircle, Clock, CreditCard } from "lucide-react";
import OwnerSidebar from "./OwnerSidebar";

function OwnerPayment() {
  // Sample transactions data
  const payments = [
    {
      id: "TXN001",
      customer: "Aman Sahu",
      restaurant: "Spice Villa",
      amount: 450,
      method: "UPI",
      status: "Completed",
      date: "2025-10-05",
    },
    {
      id: "TXN002",
      customer: "Priya Sharma",
      restaurant: "Taste Town",
      amount: 270,
      method: "Card",
      status: "Pending",
      date: "2025-10-06",
    },
    {
      id: "TXN003",
      customer: "Rahul Verma",
      restaurant: "Foodie's Hub",
      amount: 320,
      method: "Wallet",
      status: "Failed",
      date: "2025-10-04",
    },
    {
      id: "TXN004",
      customer: "Sneha Singh",
      restaurant: "Foodie's Paradise",
      amount: 600,
      method: "UPI",
      status: "Completed",
      date: "2025-10-06",
    },
  ];

  const [filter, setFilter] = useState("All");

  // Filtered data
  const filteredPayments =
    filter === "All"
      ? payments
      : payments.filter((p) => p.status === filter);

  return (
    <div className="flex">
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        💳 Payment Transactions
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3">
          <CreditCard className="text-orange-500" size={28} />
          <div>
            <p className="text-gray-600 text-sm">Total Revenue</p>
            <h3 className="text-xl font-semibold">₹1640</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3">
          <CheckCircle className="text-green-500" size={28} />
          <div>
            <p className="text-gray-600 text-sm">Completed</p>
            <h3 className="text-xl font-semibold">2</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3">
          <Clock className="text-yellow-500" size={28} />
          <div>
            <p className="text-gray-600 text-sm">Pending</p>
            <h3 className="text-xl font-semibold">1</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3">
          <XCircle className="text-red-500" size={28} />
          <div>
            <p className="text-gray-600 text-sm">Failed</p>
            <h3 className="text-xl font-semibold">1</h3>
          </div>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transaction List</h3>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Transactions Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold">Transaction ID</th>
              <th className="py-3 px-4 font-semibold">Customer</th>
              <th className="py-3 px-4 font-semibold">Restaurant</th>
              <th className="py-3 px-4 font-semibold">Amount</th>
              <th className="py-3 px-4 font-semibold">Method</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((txn) => (
              <tr
                key={txn.id}
                className="border-b hover:bg-orange-50 transition"
              >
                <td className="py-3 px-4">{txn.id}</td>
                <td className="py-3 px-4">{txn.customer}</td>
                <td className="py-3 px-4">{txn.restaurant}</td>
                <td className="py-3 px-4 font-semibold text-gray-800">
                  ₹{txn.amount}
                </td>
                <td className="py-3 px-4">{txn.method}</td>
                <td className="py-3 px-4">
                  {txn.status === "Completed" && (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <CheckCircle size={16} /> Completed
                    </span>
                  )}
                  {txn.status === "Pending" && (
                    <span className="flex items-center gap-1 text-yellow-600 font-medium">
                      <Clock size={16} /> Pending
                    </span>
                  )}
                  {txn.status === "Failed" && (
                    <span className="flex items-center gap-1 text-red-600 font-medium">
                      <XCircle size={16} /> Failed
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-gray-600">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default OwnerPayment;

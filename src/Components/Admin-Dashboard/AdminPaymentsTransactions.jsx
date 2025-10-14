import React, { useState } from "react";

function AdminPaymentsTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 201,
      user: "Rahul Sharma",
      restaurant: "Spice Villa",
      amount: 450,
      status: "Completed",
      date: "2025-10-12",
    },
    {
      id: 202,
      user: "Anjali Mehta",
      restaurant: "Taste Hub",
      amount: 320,
      status: "Pending Refund",
      date: "2025-10-11",
    },
    {
      id: 203,
      user: "Rohan Verma",
      restaurant: "Foodies Delight",
      amount: 200,
      status: "Completed",
      date: "2025-10-10",
    },
  ]);

  const revenueSummary = transactions.reduce(
    (summary, tx) => {
      if (tx.status === "Completed") summary.totalRevenue += tx.amount;
      if (tx.status === "Pending Refund") summary.pendingRefunds += tx.amount;
      return summary;
    },
    { totalRevenue: 0, pendingRefunds: 0 }
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Payments & Transactions</h1>

      {/* Revenue Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-lg text-center">
          <h2 className="text-gray-500 font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">₹{revenueSummary.totalRevenue}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-lg text-center">
          <h2 className="text-gray-500 font-semibold">Pending Refunds</h2>
          <p className="text-2xl font-bold text-red-600 mt-2">₹{revenueSummary.pendingRefunds}</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Transaction ID</th>
              <th className="p-2">User</th>
              <th className="p-2">Restaurant</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-2">{tx.id}</td>
                <td className="p-2">{tx.user}</td>
                <td className="p-2">{tx.restaurant}</td>
                <td className="p-2">₹{tx.amount}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      tx.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="p-2">{tx.date}</td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPaymentsTransactions;

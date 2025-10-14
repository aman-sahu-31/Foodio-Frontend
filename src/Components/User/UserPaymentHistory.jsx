import React, { useState } from "react";

function UserPaymentHistory() {
  const [payments] = useState([
    {
      id: "ORD-10234",
      restaurant: "Spice Villa",
      amount: 450,
      date: "2025-10-10",
      method: "UPI",
      status: "Completed",
    },
    {
      id: "ORD-10235",
      restaurant: "Taste Hub",
      amount: 320,
      date: "2025-10-09",
      method: "Credit Card",
      status: "Completed",
    },
    {
      id: "ORD-10236",
      restaurant: "Foodies Delight",
      amount: 500,
      date: "2025-10-08",
      method: "Cash",
      status: "Refunded",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Payment History
        </h1>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Restaurant</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Date</th>
                <th className="p-3">Payment Method</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-t hover:bg-orange-50 transition">
                  <td className="p-3 font-medium">{payment.id}</td>
                  <td className="p-3">{payment.restaurant}</td>
                  <td className="p-3">₹{payment.amount}</td>
                  <td className="p-3">{payment.date}</td>
                  <td className="p-3">{payment.method}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : payment.status === "Refunded"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
              {payments.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No payment records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserPaymentHistory;

import React, { useState } from "react";

function AdminComplaintsFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      type: "Complaint",
      user: "Rahul Sharma",
      restaurant: "Spice Villa",
      message: "The pizza was cold and late.",
      date: "2025-10-12",
      status: "Pending",
    },
    {
      id: 2,
      type: "Feedback",
      user: "Anjali Mehta",
      restaurant: "Taste Hub",
      message: "Loved the Veg Burger! Keep it up.",
      date: "2025-10-10",
      status: "Resolved",
    },
    {
      id: 3,
      type: "Complaint",
      user: "Rohan Verma",
      restaurant: "Spice Villa",
      message: "Delivery person was rude.",
      date: "2025-09-30",
      status: "Pending",
    },
  ]);

  const toggleStatus = (id) => {
    setFeedbacks((prev) =>
      prev.map((fb) =>
        fb.id === id
          ? { ...fb, status: fb.status === "Pending" ? "Resolved" : "Pending" }
          : fb
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Complaints & Feedbacks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.length > 0 ? (
          feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div className="mb-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    fb.type === "Complaint" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                  }`}
                >
                  {fb.type}
                </span>
              </div>

              <h2 className="text-lg font-semibold text-gray-800">{fb.restaurant}</h2>
              <p className="text-gray-600 mb-2">By: {fb.user}</p>
              <p className="text-gray-700 mb-4">{fb.message}</p>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    fb.status === "Resolved" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {fb.status}
                </span>
                <button
                  onClick={() => toggleStatus(fb.id)}
                  className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-sm"
                >
                  {fb.status === "Resolved" ? "Mark Pending" : "Mark Resolved"}
                </button>
              </div>

              <p className="text-gray-400 text-xs mt-3">{fb.date}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No feedbacks or complaints.</p>
        )}
      </div>
    </div>
  );
}

export default AdminComplaintsFeedbacks;

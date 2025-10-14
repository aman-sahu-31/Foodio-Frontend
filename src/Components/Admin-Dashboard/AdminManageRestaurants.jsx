import React, { useState } from "react";

function AdminManageRestaurants() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Spice Villa",
      city: "Bhopal",
      area: "City Center",
      rating: 4.5,
      status: "Pending",
    },
    {
      id: 2,
      name: "Taste Hub",
      city: "Indore",
      area: "MG Road",
      rating: 4.8,
      status: "Approved",
    },
    {
      id: 3,
      name: "Foodies Delight",
      city: "Bhopal",
      area: "Near Lake",
      rating: 3.9,
      status: "Rejected",
    },
  ]);

  const toggleStatus = (id) => {
    setRestaurants((prev) =>
      prev.map((res) => {
        if (res.id === id) {
          if (res.status === "Approved") return { ...res, status: "Rejected" };
          if (res.status === "Rejected") return { ...res, status: "Approved" };
          if (res.status === "Pending") return { ...res, status: "Approved" };
        }
        return res;
      })
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Manage Restaurants</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.length > 0 ? (
          restaurants.map((res) => (
            <div
              key={res.id}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold text-gray-800">{res.name}</h2>
                <p className="text-gray-600">{res.city}, {res.area}</p>
                <p className="text-gray-700 font-medium mt-1">Rating: {res.rating} ⭐</p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    res.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : res.status === "Rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {res.status}
                </span>

                <button
                  onClick={() => toggleStatus(res.id)}
                  className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-sm"
                >
                  {res.status === "Approved" ? "Reject" : "Approve"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default AdminManageRestaurants;

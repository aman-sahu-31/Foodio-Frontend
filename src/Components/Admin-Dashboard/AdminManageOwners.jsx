import React, { useState } from "react";
import { UserCheck, UserX, UserPlus } from "lucide-react";

function AdminManageOwners() {
  const [owners, setOwners] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      restaurant: "Spice Villa",
      status: "Pending",
    },
    {
      id: 2,
      name: "Anjali Mehta",
      email: "anjali@example.com",
      restaurant: "Taste Hub",
      status: "Verified",
    },
    {
      id: 3,
      name: "Rohan Verma",
      email: "rohan@example.com",
      restaurant: "Foodies Delight",
      status: "Blocked",
    },
  ]);

  const toggleStatus = (id) => {
    setOwners((prev) =>
      prev.map((owner) => {
        if (owner.id === id) {
          if (owner.status === "Verified") return { ...owner, status: "Blocked" };
          if (owner.status === "Blocked") return { ...owner, status: "Verified" };
          if (owner.status === "Pending") return { ...owner, status: "Verified" };
        }
        return owner;
      })
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center md:text-left">
        Manage Restaurant Owners
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {owners.length > 0 ? (
          owners.map((owner) => (
            <div
              key={owner.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between border-l-4 
                border-orange-500"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{owner.name}</h2>
                <p className="text-gray-500">{owner.email}</p>
                <p className="text-gray-700 font-medium mt-1">{owner.restaurant}</p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    owner.status === "Verified"
                      ? "bg-green-100 text-green-600"
                      : owner.status === "Blocked"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {owner.status}
                </span>

                <button
                  onClick={() => toggleStatus(owner.id)}
                  className={`flex items-center gap-1 px-3 py-1 rounded text-sm transition
                    ${
                      owner.status === "Verified"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                >
                  {owner.status === "Verified" ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                  {owner.status === "Verified" ? "Block" : "Verify"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No owners found.</p>
        )}
      </div>
    </div>
  );
}

export default AdminManageOwners;

import React, { useState } from "react";
import { UserCheck, UserX, Trash2 } from "lucide-react";

function AdminManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      joined: "2025-01-12",
      status: "Active",
    },
    {
      id: 2,
      name: "Anjali Mehta",
      email: "anjali@example.com",
      joined: "2025-03-05",
      status: "Suspended",
    },
    {
      id: 3,
      name: "Rohan Verma",
      email: "rohan@example.com",
      joined: "2025-06-20",
      status: "Active",
    },
  ]);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Suspended" : "Active" }
          : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center md:text-left">
        Manage Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between border-l-4 border-orange-500"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-gray-700 font-medium mt-1">
                  Joined: {user.joined}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>

                <div className="flex  items-center gap-2">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className={`flex items-center gap-1 px-3 py-1 rounded text-sm transition ${
                      user.status === "Active"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {user.status === "Active" ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                    {user.status === "Active" ? "Suspend" : "Activate"}
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-red-500 hover:text-white transition text-sm"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default AdminManageUsers;

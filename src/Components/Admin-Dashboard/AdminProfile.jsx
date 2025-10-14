import React, { useState } from "react";
import { Camera } from "lucide-react";
import img from "../../assets/Photos/image2.png";

function AdminProfile() {
  const [admin, setAdmin] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Super Admin",
    joined: "2025-01-01",
    avatar: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(admin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setAdmin(form);
    setEditMode(false);
  };

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Profile Summary */}
        <div className="bg-orange-500 text-white flex flex-col items-center justify-center p-8 md:w-1/3">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={img}
              alt="avatar"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            {editMode && (
              <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md">
                <Camera className="text-orange-500 w-5 h-5" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
            )}
          </div>
          <h2 className="text-xl font-bold">{admin.name}</h2>
          <p className="text-sm">{admin.role}</p>
          <p className="text-xs mt-1 opacity-80">Joined: {admin.joined}</p>
        </div>

        {/* Right Side - Details & Edit Form */}
        <div className="p-8 md:w-2/3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Profile Details</h1>
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Save
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-gray-600 font-semibold">Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
                />
              ) : (
                <p className="mt-2 text-gray-800">{admin.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-600 font-semibold">Email</label>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
                />
              ) : (
                <p className="mt-2 text-gray-800">{admin.email}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="text-gray-600 font-semibold">Role</label>
              <p className="mt-2 text-gray-800">{admin.role}</p>
            </div>

            {/* Joined Date */}
            <div>
              <label className="text-gray-600 font-semibold">Joined Date</label>
              <p className="mt-2 text-gray-800">{admin.joined}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;

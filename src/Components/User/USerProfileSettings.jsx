import React, { useState } from "react";
import { User, Mail, MapPin, Edit, Lock } from "lucide-react";

function UserProfileSettings() {
  const [user, setUser] = useState({
    profilePic: "https://i.pravatar.cc/150?img=12",
    firstName: "Arthur",
    lastName: "Nancy",
    email: "bradley.ortiz@gmail.com",
    phone: "477-046-1827",
    address: "116 Jaskolski Stravenue Suite 883",
    password: "********",
  });

  const [formData, setFormData] = useState({ ...user });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-orange-100 text-orange-600 px-5 py-2 rounded-lg hover:bg-orange-200 transition"
            >
              Edit
            </button>
          )}
        </div>

        <div className="md:flex">
          {/* Left Column */}
          <div className="md:w-1/3 p-6 flex flex-col items-center border-r border-gray-200">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover shadow-md mb-4"
            />
            {isEditing && (
              <input
                type="text"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleChange}
                placeholder="Profile Image URL"
                className="w-full text-sm px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            )}
            <h3 className="text-xl font-semibold mt-3">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-gray-500 mt-1">{user.email}</p>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 p-6 space-y-4">
            {/* First & Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 font-medium flex items-center gap-1">
                  <User size={16} /> First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={isEditing ? formData.firstName : user.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isEditing ? "focus:ring-2 focus:ring-orange-400" : "bg-gray-100"
                  }`}
                />
              </div>
              <div>
                <label className="text-gray-600 font-medium flex items-center gap-1">
                  <User size={16} /> Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={isEditing ? formData.lastName : user.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isEditing ? "focus:ring-2 focus:ring-orange-400" : "bg-gray-100"
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-600 font-medium flex items-center gap-1">
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={isEditing ? formData.email : user.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 rounded-lg border ${
                  isEditing ? "focus:ring-2 focus:ring-orange-400" : "bg-gray-100"
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-600 font-medium flex items-center gap-1">
                <User size={16} /> Phone
              </label>
              <input
                type="text"
                name="phone"
                value={isEditing ? formData.phone : user.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 rounded-lg border ${
                  isEditing ? "focus:ring-2 focus:ring-orange-400" : "bg-gray-100"
                }`}
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-gray-600 font-medium flex items-center gap-1">
                <MapPin size={16} /> Address
              </label>
              <input
                type="text"
                name="address"
                value={isEditing ? formData.address : user.address}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 rounded-lg border ${
                  isEditing ? "focus:ring-2 focus:ring-orange-400" : "bg-gray-100"
                }`}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-600 font-medium flex items-center gap-1">
                <Lock size={16} /> Password
              </label>
              <input
                type="password"
                name="password"
                value={isEditing ? formData.password : user.password}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 rounded-lg border ${
                  isEditing ? "focus:ring-2 focus:ring-orange-400" : "bg-gray-100"
                }`}
              />
              {isEditing && (
                <p className="text-sm text-green-600 mt-1 cursor-pointer hover:underline">
                  Change Password
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileSettings;

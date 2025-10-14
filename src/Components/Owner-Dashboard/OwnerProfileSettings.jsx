import React from "react";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import OwnerSidebar from "./OwnerSidebar";

function OwnerProfileSettings() {
  // Sample owner data (replace with your API data later)
  const owner = {
    name: "Aman Sahu",
    email: "aman.sahu@example.com",
    phone: "9838260196",
    dob: "2000-12-01",
    city: "Bhopal",
    profileImage:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80",
  };

  return (
    <div className="flex">
            <div className="p-6 flex items-center  w-full justify-center">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={owner.profileImage}
            alt={owner.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
          />
          <div>
            <h2 className="text-2xl font-semibold">{owner.name}</h2>
            <p className="text-gray-500">Owner</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <User className="text-orange-500" size={20} />
            <span className="font-medium text-gray-700">{owner.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-orange-500" size={20} />
            <span className="font-medium text-gray-700">{owner.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-orange-500" size={20} />
            <span className="font-medium text-gray-700">{owner.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-orange-500" size={20} />
            <span className="font-medium text-gray-700">{owner.dob}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-orange-500" size={20} />
            <span className="font-medium text-gray-700">{owner.city}</span>
          </div>
        </div>

        {/* Optional Edit Button */}
        <div className="mt-6 text-center">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OwnerProfileSettings;

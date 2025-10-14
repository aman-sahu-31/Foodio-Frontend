import React, { useState } from "react";
import { Star, MapPin, Edit, Check, X } from "lucide-react";
import rs from "../../assets/Photos/image2.png"

// Sample static data — replace with API data later
const initialRestaurants = [
  {
    id: 1,
    name: "Spice Villa",
    location: "Bhopal",
    rating: 4.5,
    open: true,
    timing: "10:00 AM - 10:00 PM",
    facilities: ["Wi-Fi", "Parking", "AC"],
    image: "https://images.unsplash.com/photo-1555992336-cbf0e3e5d43c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Foodie's Paradise",
    location: "Indore",
    rating: 4.7,
    open: false,
    timing: "11:00 AM - 11:00 PM",
    facilities: ["AC", "Home Delivery"],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
  },
   {
    id: 3,
    name: "Spice Villa",
    location: "Bhopal",
    rating: 4.5,
    open: true,
    timing: "10:00 AM - 10:00 PM",
    facilities: ["Wi-Fi", "Parking", "AC"],
    image: "../../assets/Photos/image2.png",
  },
  {
    id: 4,
    name: "Foodie's Paradise",
    location: "Indore",
    rating: 4.7,
    open: false,
    timing: "11:00 AM - 11:00 PM",
    facilities: ["AC", "Home Delivery"],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
  }
];

function OwnerRestaurantManagement() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  // Start editing a restaurant
  const handleEdit = (resto) => {
    setEditingId(resto.id);
    setFormData({ ...resto });
  };

  // Save edited restaurant
  const handleSave = () => {
    setRestaurants((prev) =>
      prev.map((r) => (r.id === editingId ? formData : r))
    );
    setEditingId(null);
    setFormData({});
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Manage My Restaurants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((resto) => (
          <div
            key={resto.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={resto.image}

              alt={resto.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              {editingId === resto.id ? (
                <>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="border p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={formData.timing}
                    onChange={(e) =>
                      setFormData({ ...formData, timing: e.target.value })
                    }
                    className="border p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={formData.facilities.join(", ")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facilities: e.target.value.split(",").map(f => f.trim()),
                      })
                    }
                    className="border p-2 rounded mb-2 w-full"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <label className="font-medium">Open Status:</label>
                    <input
                      type="checkbox"
                      checked={formData.open}
                      onChange={(e) =>
                        setFormData({ ...formData, open: e.target.checked })
                      }
                      className="w-5 h-5"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    >
                      <Check size={16} /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-1 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      <X size={16} /> Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{resto.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin size={16} className="mr-1 text-orange-500" />
                    {resto.location}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Timing: {resto.timing}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Facilities: {resto.facilities.join(", ")}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-yellow-500 font-medium">
                      <Star size={16} className="mr-1" />
                      {resto.rating}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          resto.open ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                      >
                        {resto.open ? "Open" : "Closed"}
                      </span>
                      <button
                        onClick={() => handleEdit(resto)}
                        className="flex items-center gap-1 text-orange-600 border border-orange-500 px-3 py-1 rounded text-sm hover:bg-orange-50 transition"
                      >
                        <Edit size={14} /> Edit
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OwnerRestaurantManagement;

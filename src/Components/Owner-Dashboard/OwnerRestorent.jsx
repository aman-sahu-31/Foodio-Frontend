import React, { useState, useEffect } from "react";
import { Star, MapPin, Edit, Check, X, Plus } from "lucide-react";
import axiosInstance from "../Axios/axiosInstance";

function OwnerRestorent({ userId }) {
  const [restaurants, setRestaurants] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Default restaurant data for new creation
  const initialCreateData = {
    name: "",
    rating: "",
    foodType: "",
    pricePerPerson: "",
    city: "",
    area: "",
    pincode: "",
    fullAddress: "",
    nearby: "",
    bannerImage: "",
    images: "",
    openTime: "",
    closeTime: "",
    wifi: false,
    parking: false,
    ac: false,
    delivery: false,
    takeaway: false,
    reservation: false,
  };

  const [createData, setCreateData] = useState(initialCreateData);

  // 🔹 Fetch all restaurants from backend (permanent data)
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axiosInstance.get(`/restaurant/my`);
        console.log("Fetched restaurants:", res);
        setRestaurants(res.data.data || []);
      } catch (err) {
        console.error("❌ Error fetching restaurants:", err);
      }
    };
    fetchRestaurants();
  }, []);

  // 🔹 Create new restaurant (Permanent Save)
  const handleCreateRestaurant = async () => {
    try {
      setLoading(true);

      const newRestaurant = {
        userId,
        name: createData.name,
        rating: parseFloat(createData.rating || 0),
        foodType: createData.foodType
          ? createData.foodType.split(",").map((f) => f.trim())
          : [],
        pricePerPerson: parseFloat(createData.pricePerPerson || 0),
        address: {
          city: createData.city,
          area: createData.area,
          pincode: createData.pincode,
          fullAddress: createData.fullAddress,
          location: { type: "Point", coordinates: [0, 0] },
        },
        nearby: createData.nearby
          ? createData.nearby.split(",").map((n) => n.trim())
          : [],
        bannerImage: createData.bannerImage,
        images: createData.images
          ? createData.images.split(",").map((i) => i.trim())
          : [],
        timing: {
          open: createData.openTime,
          close: createData.closeTime,
          days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        facilities: {
          wifi: createData.wifi,
          parking: createData.parking,
          ac: createData.ac,
          delivery: createData.delivery,
          takeaway: createData.takeaway,
          reservation: createData.reservation,
        },
      };

      const res = await axiosInstance.post("/restaurant/create", newRestaurant);

      // Update state immediately (UI sync)
      setRestaurants((prev) => [...prev, res.data.data]);
      setShowCreateForm(false);
      setCreateData(initialCreateData);
      alert("✅ Restaurant created successfully!");
    } catch (err) {
      console.error("❌ Create failed:", err);
      alert(`🚨 Failed to create restaurant! ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Edit existing restaurant (enable edit mode)
  const handleEdit = (resto) => {
    setEditingId(resto._id);
    setFormData({ ...resto });
  };

  // 🔹 Save edited restaurant (Permanent update)
  const handleSave = async () => {
    try {
      const res = await axiosInstance.put(`/restaurant/${editingId}`, formData);

      // Update UI with latest backend data
      setRestaurants((prev) =>
        prev.map((r) => (r._id === editingId ? res.data.data : res))
      );

      setEditingId(null);
      setFormData({});
      alert("✅ Restaurant updated successfully!");
    } catch (err) {
      console.error("❌ Update failed:", err);
      alert(`🚨 Failed to save changes! ${err.response?.data?.message || err.message}`);
    }
  };

  // 🔹 Delete restaurant (Permanent delete)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this restaurant?")) return;

    try {
      await axiosInstance.delete(`/restaurant/${id}`);
      setRestaurants((prev) => prev.filter((r) => r._id !== id));
      alert("🗑️ Restaurant deleted successfully!");
    } catch (err) {
      console.error("❌ Delete failed:", err);
      alert(`🚨 Failed to delete restaurant! ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage My Restaurants</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-600 transition"
        >
          <Plus size={18} /> Add Restaurant
        </button>
      </div>

      {/* Create Restaurant Form */}
      {showCreateForm && (
        <div className="p-6 bg-white rounded-lg shadow mb-6 space-y-4">
          <h3 className="text-lg font-semibold">Create New Restaurant</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.keys(initialCreateData).map((field) =>
              !["wifi", "parking", "ac", "delivery", "takeaway", "reservation"].includes(field) ? (
                <input
                  key={field}
                  type={["rating", "pricePerPerson"].includes(field) ? "number" : "text"}
                  placeholder={field}
                  value={createData[field]}
                  onChange={(e) =>
                    setCreateData({ ...createData, [field]: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
              ) : null
            )}

            {/* Facilities Checkboxes */}
            <div className="flex flex-wrap gap-4 col-span-2">
              {["wifi", "parking", "ac", "delivery", "takeaway", "reservation"].map((f) => (
                <label key={f} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={createData[f]}
                    onChange={(e) =>
                      setCreateData({ ...createData, [f]: e.target.checked })
                    }
                  />
                  {f.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleCreateRestaurant}
            disabled={loading}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            {loading ? "Creating..." : "Create Restaurant"}
          </button>
        </div>
      )}

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((resto) => (
          <div
            key={resto._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={resto.bannerImage || resto.images?.[0]}
              alt={resto.name}
              className="h-40 w-full object-center"
            />
            <div className="p-4">
              {editingId === resto._id ? (
                <>
                  <input
                    type="text"
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border p-2 rounded mb-2 w-full"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    >
                      <Check size={16} /> Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
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
                    {resto.address?.fullAddress || resto.address?.city}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Timing: {resto.timing?.open} - {resto.timing?.close} (
                    {resto.timing?.days?.join(", ")})
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Facilities:{" "}
                    {Object.keys(resto.facilities || {})
                      .filter((k) => resto.facilities[k])
                      .join(", ")}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-yellow-500 font-medium">
                      <Star size={16} className="mr-1" />
                      {resto.rating}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(resto)}
                        className="flex items-center gap-1 text-orange-600 border border-orange-500 px-3 py-1 rounded text-sm hover:bg-orange-50 transition"
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(resto._id)}
                        className="flex items-center gap-1 text-red-600 border border-red-500 px-3 py-1 rounded text-sm hover:bg-red-50 transition"
                      >
                        <X size={14} /> Delete
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

export default OwnerRestorent;

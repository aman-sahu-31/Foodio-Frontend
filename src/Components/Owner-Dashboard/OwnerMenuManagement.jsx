import React, { useState, useEffect } from "react";
import axiosInstance from "../Axios/axiosInstance";

function OwnerMenuManagement() {
  const [restaurants, setRestaurants] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // ✅ Menu Form State
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    category: "Others",
    price: "",
    variants: [{ label: "", price: 0, quantity: 1 }],
  });

  // 🟢 Fetch all restaurants created by the owner
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/restaurant/my`);
        if (res.data?.success && res.data?.data?.length > 0) {
          setRestaurants(res.data.data);
        } else {
          setMessage("No restaurants found. Please create one first.");
        }
      } catch (err) {
        console.error("❌ Error fetching restaurants:", err);
        setError("Failed to load restaurants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  // 🟢 Fetch menu items for selected restaurant
  const fetchMenu = async (restaurantId) => {
    try {
      setLoading(true);
    const res = await axiosInstance.get(`/menu/${restaurantId}`);
if (res.data?.success && res.data?.data?.length > 0) {
  setMenuItems(res.data.data);
  setMessage(`✅ Menu loaded successfully.`);
} else {
  setMenuItems([]);
  setMessage("No menu items found for this restaurant.");
}

    } catch (err) {
      console.error("❌ Error fetching menu:", err);
      setError("Failed to load menu for this restaurant.");
    } finally {
      setLoading(false);
    }
  };

  // 🟠 Handle restaurant selection
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    fetchMenu(restaurant._id);
  };

  // 🟢 Add new variant row
  const addVariant = () => {
    setFormData({
      ...formData,
      variants: [...formData.variants, { label: "", price: 0, quantity: 1 }],
    });
  };

  // 🟢 Handle variant change
  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index][field] = value;
    setFormData({ ...formData, variants: updatedVariants });
  };

  // 🟢 Open Add Modal
  const handleAddItem = () => {
    setFormData({
      name: "",
      description: "",
      image: "",
      category: "Others",
      price: "",
      variants: [{ label: "", price: 0, quantity: 1 }],
    });
    setEditingItem(null);
    setShowModal(true);
  };

  // 🟢 Open Edit Modal
  const handleEditItem = (item) => {
    setFormData(item);
    setEditingItem(item);
    setShowModal(true);
  };

  // 🟢 Delete Menu Item
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axiosInstance.delete(`/menu/${id}`);
      setMessage("✅ Menu item deleted successfully.");
      fetchMenu(selectedRestaurant._id);
    } catch (err) {
      console.error("❌ Error deleting menu item:", err);
      setError("Failed to delete menu item.");
    }
  };

  // 🟢 Submit Add / Update Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRestaurant) return alert("Select a restaurant first.");

    try {
      const payload = {
        ...formData,
        restaurant: selectedRestaurant._id,
      };

      if (editingItem) {
        // 🔹 Update existing item
        await axiosInstance.put(`/menu/${editingItem._id}`, payload);
        setMessage("✅ Menu item updated successfully.");
      } else {
        // 🔹 Create new item
        await axiosInstance.post(`/menu/create`, payload);
        setMessage("✅ Menu item created successfully.");
      }

      setShowModal(false);
      fetchMenu(selectedRestaurant._id);
    } catch (err) {
      console.error("❌ Error saving menu item:", err);
      setError("Failed to save menu item.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">🍴 Menu Management</h1>

      {/* Loading / Error / Message */}
      {loading && <p className="text-blue-600 mb-2">Loading...</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}

      {/* Step 1: Select Restaurant */}
      {!selectedRestaurant && (
        <>
          <h2 className="text-xl mb-4">Select Your Restaurant:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants.map((rest) => (
              <div
                key={rest._id}
                onClick={() => handleSelectRestaurant(rest)}
                className="bg-white border rounded-lg shadow-md p-4 cursor-pointer hover:border-orange-500"
              >
                <img
                  src={rest.bannerImage || "https://via.placeholder.com/400x200"}
                  alt={rest.name}
                  className="w-full h-40 object-center rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{rest.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Step 2: Menu for Selected Restaurant */}
      {selectedRestaurant && (
        <div>
          <div className="flex justify-between mt-6 mb-4">
            <h2 className="text-2xl font-bold text-gray-700">
              🍽 Menu of {selectedRestaurant.name}
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                ← Back
              </button>
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg"
              >
                ➕ Add Item
              </button>
            </div>
          </div>

          {/* Menu List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item._id}
                className="bg-white border rounded-lg shadow p-4 hover:shadow-lg"
              >
                <img
                  src={item.image || "https://via.placeholder.com/300x200"}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="font-bold text-orange-600 mt-1">₹{item.price}</p>
                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => handleEditItem(item)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Add / Edit */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white w-full max-w-lg rounded-lg p-6 shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? "✏️ Update Menu Item" : "➕ Add New Menu Item"}
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Item Name"
                className="w-full p-2 border rounded mb-3"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border rounded mb-3"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
              <input
                type="text"
                placeholder="Image URL"
                className="w-full p-2 border rounded mb-3"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
              <input
                type="number"
                placeholder="Base Price"
                className="w-full p-2 border rounded mb-3"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />

              <h4 className="font-semibold mb-2">Variants:</h4>
              {formData.variants.map((variant, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Label (e.g. 4 pcs, 250 gm)"
                    className="flex-1 p-2 border rounded"
                    value={variant.label}
                    onChange={(e) =>
                      handleVariantChange(index, "label", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    className="w-28 p-2 border rounded"
                    value={variant.price}
                    onChange={(e) =>
                      handleVariantChange(index, "price", e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addVariant}
                className="text-sm text-blue-600 underline mb-3"
              >
                ➕ Add Variant
              </button>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded"
                >
                  {editingItem ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerMenuManagement;

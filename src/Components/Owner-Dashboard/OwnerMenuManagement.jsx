import React, { useState } from "react";

function OwnerMenuManagement() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Cheese Pizza",
      description: "Delicious cheesy pizza with tomato sauce",
      price: 250,
      image: "",
      available: true,
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    image: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setMenuItems((prev) =>
        prev.map((item) => (item.id === form.id ? form : item))
      );
    } else {
      setMenuItems((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, name: "", description: "", price: "", image: "", available: true });
  };

  const handleEdit = (item) => {
    setForm(item);
  };

  const handleDelete = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Menu Management</h1>

      {/* Form to Add/Edit */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 bg-white shadow rounded space-y-3"
      >
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          <span>Available</span>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          {form.id ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-orange-600 font-bold text-lg">₹{item.price}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      item.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No menu items added yet.</p>
        )}
      </div>
    </div>
  );
}

export default OwnerMenuManagement;

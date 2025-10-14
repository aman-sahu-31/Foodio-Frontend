import React, { useState } from "react";

function OwnerManageOffers() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "10% Off Pizza",
      description: "Get 10% off on all pizza orders above ₹200",
      code: "PIZZA10",
      discount: 10,
      active: true,
    },
    {
      id: 2,
      title: "Free Cold Drink",
      description: "Get a free cold drink on orders above ₹300",
      code: "DRINKFREE",
      discount: 0,
      active: false,
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    code: "",
    discount: "",
    active: true,
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
      setOffers((prev) => prev.map((offer) => (offer.id === form.id ? form : offer)));
    } else {
      setOffers((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, title: "", description: "", code: "", discount: "", active: true });
  };

  const handleEdit = (offer) => setForm(offer);
  const handleDelete = (id) => setOffers((prev) => prev.filter((offer) => offer.id !== id));
  const toggleActive = (id) =>
    setOffers((prev) =>
      prev.map((offer) => (offer.id === id ? { ...offer, active: !offer.active } : offer))
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Manage Offers</h1>

      {/* Add/Edit Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{form.id ? "Edit Offer" : "Add New Offer"}</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Offer Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="code"
            placeholder="Coupon Code"
            value={form.code}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount (%)"
            value={form.discount}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-400"
            required
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <span>Active</span>
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            {form.id ? "Update Offer" : "Add Offer"}
          </button>
        </form>
      </div>

      {/* Attractive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-orange-100 text-orange-800 uppercase text-sm">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Discount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr
                key={offer.id}
                className="border-b hover:bg-orange-50 transition cursor-pointer"
              >
                <td className="p-3 font-medium">{offer.title}</td>
                <td className="p-3">{offer.description}</td>
                <td className="p-3 font-mono">{offer.code}</td>
                <td className="p-3">{offer.discount}%</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      offer.active ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {offer.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="p-3 space-x-2 flex items-center justify-center mt-2 text-sm">
                  <button
                    onClick={() => handleEdit(offer)}
                    className="px-3 py-1 bg-blue-500 rounded-full text-white  hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(offer.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleActive(offer.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                  >
                    {offer.active ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
            {offers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No offers added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OwnerManageOffers;

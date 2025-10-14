import React, { useState } from "react";
import { Pencil, Save, X } from "lucide-react";

function AdminSettings() {
  const [settings, setSettings] = useState({
    paymentGateway: "Razorpay",
    terms: "Default terms & conditions...",
    adminName: "Admin Name",
    adminEmail: "admin@example.com",
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(settings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSettings(form);
    setEditMode(false);
  };

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center md:text-left">
        Admin Settings
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Payment Gateway Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Payment Gateway</h2>
            {editMode && (
              <span className="text-sm text-gray-500">Editable</span>
            )}
          </div>
          {editMode ? (
            <input
              type="text"
              name="paymentGateway"
              value={form.paymentGateway}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
            />
          ) : (
            <p className="text-gray-700">{settings.paymentGateway}</p>
          )}
        </div>

        {/* Terms & Conditions Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Terms & Conditions</h2>
            {editMode && <span className="text-sm text-gray-500">Editable</span>}
          </div>
          {editMode ? (
            <textarea
              name="terms"
              value={form.terms}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none h-32"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-line">{settings.terms}</p>
          )}
        </div>

        {/* Admin Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Admin Profile</h2>
            {editMode && <span className="text-sm text-gray-500">Editable</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 font-semibold">Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="adminName"
                  value={form.adminName}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
              ) : (
                <p className="mt-2 text-gray-700">{settings.adminName}</p>
              )}
            </div>
            <div>
              <label className="text-gray-600 font-semibold">Email</label>
              {editMode ? (
                <input
                  type="email"
                  name="adminEmail"
                  value={form.adminEmail}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
              ) : (
                <p className="mt-2 text-gray-700">{settings.adminEmail}</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center md:justify-end gap-4 mt-4">
          {editMode ? (
            <>
              <button
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
              >
                <X className="w-4 h-4" /> Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              <Pencil className="w-4 h-4" /> Edit Settings
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;

import React, { useState } from "react";
import { MessageCircle, Phone, Mail, Send } from "lucide-react";

function UserHelpCenter() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issueType: "Order Issue",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted. We'll get back to you soon!");
    setForm({ name: "", email: "", issueType: "Order Issue", message: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center">
        Help Center & Support
      </h1>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Options */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border-l-4 border-orange-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MessageCircle className="text-orange-500 w-6 h-6" />
            Need Assistance?
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help you with order issues, refunds, or restaurant complaints.  
            Choose your preferred contact option below or fill out the support form.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
              <Phone className="text-orange-500 w-5 h-5" />
              <div>
                <h3 className="font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
              <Mail className="text-orange-500 w-5 h-5" />
              <div>
                <h3 className="font-semibold text-gray-800">Email Support</h3>
                <p className="text-gray-600 text-sm">support@foodiapp.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
              <MessageCircle className="text-orange-500 w-5 h-5" />
              <div>
                <h3 className="font-semibold text-gray-800">Live Chat</h3>
                <p className="text-gray-600 text-sm">Available 9 AM – 10 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border-l-4 border-orange-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Send className="text-orange-500 w-6 h-6" />
            Submit a Support Request
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Issue Type</label>
              <select
                name="issueType"
                value={form.issueType}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option>Order Issue</option>
                <option>Refund Request</option>
                <option>Restaurant Complaint</option>
                <option>Account or Login Issue</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded h-28 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                placeholder="Describe your issue..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserHelpCenter;

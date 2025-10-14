import React, { useState } from "react";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";

function UserMyCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cheese Margherita Pizza",
      price: 299,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1601924638867-3ec3ce2eac5f?w=800&q=80",
    },
    {
      id: 2,
      name: "Crispy Veg Burger",
      price: 199,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    },
    {
      id: 3,
      name: "Cold Coffee",
      price: 99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800&q=80",
    },
  ]);

  // Increase Quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50   ">
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2 mb-6">
          <ShoppingCart size={30} /> My Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center text-lg py-10">
            Your cart is empty 🛒
          </p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  {/* Image & Details */}
                  <div className="flex items-center gap-4 w-full sm:w-2/3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-orange-600 font-medium">₹{item.price}</p>
                      <p className="text-gray-500 text-sm">
                        Subtotal: ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 ml-3"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 bg-orange-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Order Summary
              </h2>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Items Total</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Delivery Charge</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold text-lg border-t pt-2">
                <span>Grand Total</span>
                <span>₹{total + 40}</span>
              </div>

              <button className="mt-5 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl text-lg font-semibold transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserMyCart;

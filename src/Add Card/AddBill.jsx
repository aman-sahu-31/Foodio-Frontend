        import React from 'react';
        import { useLocation, useParams } from 'react-router-dom';

        const AddBill = () => {
        const { id } = useParams();
        const location = useLocation();
        const { totalPrice, totalAddOn, title, selectedAddOns } = location.state || {};
        if(!selectedAddOns){
            return <div className="text-red-500 text-center mt-4">No billing data found for item {id}.</div>;
        }


        return (
            <div className="bg-gray-50 min-h-screen pb-28 px-4">
            <div className="py-4">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-sm text-gray-600">Estimated delivery: 25-30 mins to Home</p>
            </div>

            {/* Ordered Item */}
            <div className=" p-4 bg-white rounded shadow mb-4">
                <div className='flex justify-between'>
                <p className="font-bold text-xl">{title}</p>
                <div className="flex justify-between items-center gap-5 mb-2">
                <div className="flex items-center border rounded">
                    <button className="px-2">-</button>
                    <span className="px-2">1</span>
                    <button className="px-2">+</button>
                </div>
                <p className="font-semibold">₹{totalPrice - totalAddOn}</p>
                </div>
                </div>
                <button className="text-indigo-600 text-sm">+ Add more items</button>
                <input
                className="border rounded lg:w-1/4 sm:w-full  flex mt-2 p-2 text-sm"
                placeholder="Add a note for the restaurant"
                />
            </div>

            {/* Coupon Header */}
            <div className="bg-white p-4 rounded shadow mb-4">
                <p className="bg-blue-100/50 w-1/3 text-blue-600 font-semibold p-2 rounded  mb-2">
                Save extra by applying coupons on every order
                </p>

                <div className="flex justify-between mb-2">
                <p>You saved ₹5 on delivery</p>
                <p className="text-green-600 text-sm">Auto-applied</p>
                </div>
                <div className="flex justify-between">
                <p>You saved ₹150 with 'GET150'</p>
                <button className="text-red-500 text-sm">Remove</button>
                </div>
            </div>

            {/* Delivery Details */}
            <div className="bg-white p-4 rounded shadow mb-4 space-y-2">
                <p className="font-bold">Delivery in 25-30 mins</p>
                <p>Delivery at <strong>Home</strong>: 31 house number, Shiv Shakti Nagar...</p>
                <input
                className="border rounded lg:w-1/4 sm:full p-2 text-sm"
                placeholder="Add instructions for delivery partner"
                />
                <p className="text-sm">Aman, <span className="font-semibold">+91-6263250677</span></p>
            </div>

            {/* Total Bill */}
            <div className="bg-white p-4 rounded shadow mb-4">
                <div className="flex justify-between font-bold">
                <p>Total Bill</p>
                <div className="text-right">
                    <p className="line-through text-gray-400 text-sm">₹355.35</p>
                    <p>₹{totalPrice.toFixed(2)}</p>
                </div>
                </div>
                <p className="text-green-600 text-sm">You saved ₹{(355.35 - totalPrice).toFixed(2)} Incl. taxes and charges</p>
            </div>

            {/* Donate */}
            <div className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
                <div>
                <p className="font-bold text-sm">Let's serve a brighter future 🌟</p>
                <p className="text-xs text-gray-600">Through nutritious meals, you can empower young minds for greatness</p>
                </div>
                <div className="flex items-center gap-2">
                <p className="font-semibold">₹3</p>
                <button className="border border-red-600 text-red-600 px-4 py-1 rounded font-bold">ADD</button>
                </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white p-4 rounded shadow mb-4 text-xs text-gray-500">
                CANCELLATION POLICY<br />
                Help us reduce food waste by avoiding cancellations after placing your order. A 100% cancellation fee will be applied.
            </div>

            {/* Zomato Balance */}
            <div className="bg-white p-4 rounded shadow mb-4 flex justify-between text-sm">
                <p>Zomato Money Balance: ₹0</p>
                <button className="text-red-600 font-semibold">Add money</button>
            </div>

            {/* Fixed Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-between items-center p-4">
                <div>
                <p className="text-xs text-gray-500">PAY USING</p>
                <p className="font-bold text-sm">Amazon Pay UPI</p>
                </div>
                <div className="flex items-center gap-4">
                <p className="font-bold">₹{totalPrice.toFixed(2)} TOTAL</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded font-bold">
                    Place Order
                </button>
                </div>
            </div>
            </div>
        );
        };

        export default AddBill;

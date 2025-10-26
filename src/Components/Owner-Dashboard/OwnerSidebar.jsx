import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Store,
  CreditCard,
  User,
  LogOut,
  Menu,
  X,
  Star,
  Gift,
  BarChart2,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/Photos/Foodi.png";

function OwnerSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // 🧠 Get user data from Redux store
  const user = useSelector((state) => state.owner);

  // First restaurant ID
  const restaurantId = user?.restaurants?.[0]?._id || null;

  const handleLogout = () => {
    dispatch?.({ type: "OWNER_LOGOUT" }); 
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const menuItems = [
    { name: "Dashboard", icon: <Store className="inline mr-2" />, path: "/owner/dashboard" },
  { name: "Restaurants", icon: <Store className="inline mr-2" />, path: "/owner/restaurants" },
    {  name: "Menu Management", icon: <Store className="inline mr-2" />, path: "/owner/menu"},
    { name: "Manage Offers", icon: <Gift className="inline mr-2" />, path: "/owner/offers" },
    { name: "Reviews & Ratings", icon: <Star className="inline mr-2" />, path: "/owner/reviews" },
    { name: "Orders", icon: <CreditCard className="inline mr-2" />, path: "/owner/orders" },
    { name: "Restaurant Analytics", icon: <BarChart2 className="inline mr-2" />, path: "/owner/analytics" },
    { name: "Payments & Earnings", icon: <CreditCard className="inline mr-2" />, path: "/owner/payments" },
    { name: "Profile Settings", icon: <User className="inline mr-2" />, path: "/owner/profile" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Mobile Hamburger */}
      <div className="absolute top-4 left-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <img src={logo} alt="logo" className="w-24 mx-auto mb-5" />
          <hr className="mb-3" />

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg font-medium transition-colors
                  ${isActive
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.icon} {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t bg-white">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 hover:text-red-700 transition"
          >
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-6 bg-gray-50 min-h-screen transition-all duration-300">
        <div className="bg-white shadow rounded-lg p-4 mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome back, {user?.name || "Owner"} 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Hope you're having a great day managing your restaurant!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={user?.profilePic || "https://via.placeholder.com/150"}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {user?.name || "Owner"}
              </h2>
              <p className="text-gray-500 text-sm">{user?.role || "Owner"}</p>
            </div>
          </div>
        </div>

        <Outlet context={{ restaurantId }} />
      </div>
    </div>
  );
}

export default OwnerSidebar;

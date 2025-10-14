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
import { logoutUser } from "../Features/userSlices";
import logo from "../../assets/Photos/Foodi.png";

function UserLayout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user); // Redux user
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { name: "Home / Browse Restaurants", icon: <Store className="inline mr-2" />, path: "/User/dashboard" },
    { name: "Saved Restaurants", icon: <Store className="inline mr-2" />, path: "/User/restaurants" },
    { name: "My Cart", icon: <Store className="inline mr-2" />, path: "/User/cart" },
    { name: "Order History", icon: <Gift className="inline mr-2" />, path: "/User/orders" },
    { name: "Track Order", icon: <Star className="inline mr-2" />, path: "/User/track" },
    { name: "Payment History", icon: <CreditCard className="inline mr-2" />, path: "/User/payments" },
    { name: "Offers & Discounts", icon: <BarChart2 className="inline mr-2" />, path: "/User/offers" },
    { name: "Profile Settings", icon: <CreditCard className="inline mr-2" />, path: "/User/profile" },
    { name: "Support / Help Center", icon: <User className="inline mr-2" />, path: "/User/help" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Hamburger */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Logo + Navigation */}
          <div className="p-4">
            <img src={logo} alt="logo" className="w-24 mx-auto mb-5" />
            <hr className="mb-3" />
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon} {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="p-4 border-t bg-white">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 hover:text-red-700 transition"
            >
              <LogOut className="w-5 h-5 mr-2" /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1  ml-0 md:ml-64 p-6 transition-all duration-300">
        {/* Welcome / Profile */}
        <div className=" shadow rounded-lg p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome back, {user.name ? user.name : "Guest"} 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Hope you're having a great day!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={user.profilePic || "https://i.pravatar.cc/100?img=12"}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name ? user.name : "Guest"}
              </h2>
              <p className="text-gray-500 text-sm">{user.role || "User"}</p>
            </div>
          </div>
        </div>

        {/* Nested Pages */}
        <div className="pb-10 ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default UserLayout;

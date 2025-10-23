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
  Users,
} from "lucide-react";
import logo from "../../assets/Photos/Foodi.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Features/userSlices";

function AdminLayout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const admin=useSelector((state)=>state.admin);

  const handleLogout = () => {
    dispatch(logoutUser());

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard Overview", icon: <BarChart2 className="w-5 h-5 mr-3" />, path: "/admin/dashboard" },
    { name: "Manage Owners", icon: <Users className="w-5 h-5 mr-3" />, path: "/admin/owners" },
    { name: "Manage Users", icon: <User className="w-5 h-5 mr-3" />, path: "/admin/users" },
    { name: "Manage Restaurants", icon: <Store className="w-5 h-5 mr-3" />, path: "/admin/restaurants" },
    { name: "Orders Management", icon: <CreditCard className="w-5 h-5 mr-3" />, path: "/admin/orders" },
    { name: "Payments & Transactions", icon: <CreditCard className="w-5 h-5 mr-3" />, path: "/admin/payments" },
    { name: "Reports & Analytics", icon: <BarChart2 className="w-5 h-5 mr-3" />, path: "/admin/analytics" },
    { name: "Offers & Promotions", icon: <Gift className="w-5 h-5 mr-3" />, path: "/admin/offers" },
    { name: "Complaints / Feedbacks", icon: <Star className="w-5 h-5 mr-3" />, path: "/admin/feedbacks" },
    { name: "Settings", icon: <CreditCard className="w-5 h-5 mr-3" />, path: "/admin/settings" },
    { name: "Profile", icon: <User className="w-5 h-5 mr-3" />, path: "/admin/profile" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Mobile Hamburger */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-md shadow-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="p-4">
            <img src={logo} alt="logo" className="w-24 mx-auto mb-6" />
            <hr className="mb-4" />

            <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
              {menuItems.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive
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

          {/* Logout Button */}
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
      <main className="flex-1 ml-0 md:ml-64 bg-gray-50 min-h-screen overflow-y-auto p-6 transition-all duration-300">
        {/* Sticky Header */}
               <div className="bg-white shadow rounded-lg p-4 mb-6 flex items-center justify-between">
                 <div>
                   <h1 className="text-2xl font-semibold text-gray-800">
                     Welcome back, {admin.name} 👋
                   </h1>
                   <p className="text-gray-500 text-sm mt-1">
                     Hope you're having a great day managing your restaurant!
                   </p>
                 </div>
                 <div className="flex items-center gap-3">
                   <img
                     src={admin.profilePic}
                     alt="User"
                     className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
                   />
                   <div>
                     <h2 className="text-lg font-semibold text-gray-800">
                       {admin.name}
                     </h2>
                     <p className="text-gray-500 text-sm">{admin.role}</p>
                   </div>
                 </div>
               </div>
       
               <div>
               </div>

        {/* Outlet for Nested Routes */}
        <div className="pb-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import SpecialOffers from "./Components/SpecialOffers";
import MenuRestaurent from "./Pages/MenuRestaurent";
import RestaurantExtraInfo from "./Components/RestaurantExtraInfo";
import BestRestorantList from "./Components/BestRestaurantList";
import Menubar from "./Components/Menubar";
import MenuRestoData from "./Pages/MenuRestoData";
import AddCard from "./Add Card/AddCard";
import AddOnsCard from "./Add Card/AddOnsData";
import AddBill from "./Add Card/AddBill";
import BestdataCard from "./Components/BestdataCard";
import OwnerSidebar from "./Components/Owner-Dashboard/OwnerSidebar";
import OwnerDashboard from "./Components/Owner-Dashboard/OwnerDashboard";
import OwnerRestorent from "./Components/Owner-Dashboard/OwnerRestorent";
import OwnerOrder from "./Components/Owner-Dashboard/OwnerOrder";
import OwnerPayment from "./Components/Owner-Dashboard/OwnerPayment";
import OwnerProfile from "./Components/Owner-Dashboard/OwnerProfileSettings";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/Protected-Route/ProtectedRoute";
import AdminDashboard from "./Components/Admin-Dashboard/AdminDashboard";
import UserHomeBrowseRestaurants from "./Components/User/UserHomeBrowseRestaurants";
import UserLayout from "./Components/User/UserLayout";
import AdminLayout from "./Components/Admin-Dashboard/AdminLayout";
import OwnerMenuManagement from "./Components/Owner-Dashboard/OwnerMenuManagement";
import OwnerRestaurantAnalytics from "./Components/Owner-Dashboard/OwnerRestaurantAnalytics";
import OwnerReviewsRatings from "./Components/Owner-Dashboard/OwnerReviewsRatings";
import OwnerManageOffers from "./Components/Owner-Dashboard/OwnerManageOffers";
import AdminComplaintsFeedbacks from "./Components/Admin-Dashboard/AdminComplaintsFeedbacks";
import AdminManageOwners from "./Components/Admin-Dashboard/AdminManageOwners";
import AdminManageRestaurants from "./Components/Admin-Dashboard/AdminManageRestaurants";
import AdminManageUsers from "./Components/Admin-Dashboard/AdminManageUsers";
import AdminOffersPromotions from "./Components/Admin-Dashboard/AdminOffersPromotions";
import AdminOrdersManagement from "./Components/Admin-Dashboard/AdminOrdersManagement";
import AdminPaymentsTransactions from "./Components/Admin-Dashboard/AdminPaymentsTransactions";
import AdminProfile from "./Components/Admin-Dashboard/AdminProfile";
import AdminSettings from "./Components/Admin-Dashboard/AdminSettings";
import AdminReportsAnalytics from "./Components/Admin-Dashboard/AminReportsAnalytics";
import UserHelpCenter from "./Components/User/UserHelpCenter";
import UserMyCart from "./Components/User/UserMyCart";
import UserOffersDiscounts from "./Components/User/UserOffersDiscounts";
import UserOrderHistory from "./Components/User/UserOrderHistory";
import UserPaymentHistory from "./Components/User/UserPaymentHistory";
import USerProfileSettings from "./Components/User/USerProfileSettings";
import UserSavedRestaurants from "./Components/User/UserSavedRestaurants";
import UserTrackOrder from "./Components/User/UserTrackOrder";
import SignUp from "./Components/Login/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- USER SIDE ---------- */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<Card />} />
          <Route path="offers" element={<SpecialOffers />} />
          <Route path="Menubar" element={<Menubar />} />
          <Route path="restaurent" element={<MenuRestaurent />} />
          <Route path="details/:id" element={<BestRestorantList />} />
          <Route path="restaurantCard/:id" element={<MenuRestoData />} />
          <Route path="restaurant/:id" element={<RestaurantExtraInfo />} />
          <Route path="AddCard/:id" element={<AddCard />} />
          <Route path="addOnscard/:id" element={<AddOnsCard />} />
          <Route path="Bill/:id" element={<AddBill />} />
          <Route path="data" element={<BestdataCard />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>

        {/* ---------- OWNER SIDE ---------- */}
        <Route
          path="/owner/*"
          element={
            <ProtectedRoute allowedRoles="Owner">
              <OwnerSidebar />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="restaurants" element={<OwnerRestorent />} />
          <Route path="orders" element={<OwnerOrder />} />
          <Route path="payments" element={<OwnerPayment />} />
          <Route path="profile" element={<OwnerProfile />} />
          {/* ✅ Corrected Menu Management Route */}
          <Route path="menu/:restaurantId" element={<OwnerMenuManagement />} />
          <Route path="analytics" element={<OwnerRestaurantAnalytics />} />
          <Route path="reviews" element={<OwnerReviewsRatings />} />
          <Route path="offers" element={<OwnerManageOffers />} />
        </Route>

        {/* ---------- ADMIN SIDE ---------- */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles="Admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="feedbacks" element={<AdminComplaintsFeedbacks />} />
          <Route path="owners" element={<AdminManageOwners />} />
          <Route path="restaurants" element={<AdminManageRestaurants />} />
          <Route path="users" element={<AdminManageUsers />} />
          <Route path="offers" element={<AdminOffersPromotions />} />
          <Route path="orders" element={<AdminOrdersManagement />} />
          <Route path="payments" element={<AdminPaymentsTransactions />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="analytics" element={<AdminReportsAnalytics />} />
        </Route>

        {/* ---------- USER DASHBOARD ---------- */}
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles="User">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<UserHomeBrowseRestaurants />} />
          <Route path="help" element={<UserHelpCenter />} />
          <Route path="cart" element={<UserMyCart />} />
          <Route path="offers" element={<UserOffersDiscounts />} />
          <Route path="orders" element={<UserOrderHistory />} />
          <Route path="payments" element={<UserPaymentHistory />} />
          <Route path="profile" element={<USerProfileSettings />} />
          <Route path="restaurants" element={<UserSavedRestaurants />} />
          <Route path="track" element={<UserTrackOrder />} />
        </Route>

        {/* ---------- 404 ---------- */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-3xl font-bold text-red-500">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

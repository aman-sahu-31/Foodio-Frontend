import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import SpecialOffers from './Components/SpecialOffers';
import MenuRestaurent from './Pages/MenuRestaurent';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RestaurantExtraInfo from './Components/RestaurantExtraInfo'; 
import BestRestorantList from './Components/BestRestaurantList';
import Menubar from './Components/Menubar';
import MenuRestoData from './Pages/MenuRestoData';
import BestdataCard from './Components/BestdataCard';
function App() {
  return (
    <BrowserRouter>
      <Routes>  <Route path="/restaurant/:id" element={<BestRestorantList />} />
        <Route path="/carddata/:id" element={<BestdataCard />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Card />} />
          <Route path="offers" element={<SpecialOffers/>} />
          <Route path="Menubar" element={<Menubar />} />
          <Route path="restaurent" element={<MenuRestaurent />} />
          <Route path="/details/:id" element={<BestRestorantList/>} />
          <Route path="/carddata/:id" element={<BestdataCard/>} />
          <Route path="/restaurantCard/:id" element={<MenuRestoData/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="restaurant/:id" element={<RestaurantExtraInfo/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import MenuBar from './Components/MenuBar';
import SpecialOffers from './Components/SpecialOffers';
import MenuRestaurent from './Pages/MenuRestaurent';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RestaurantExtraInfo from './Components/RestaurantExtraInfo'; 
// import MenuBarPizza from './Components/MenubarPizza';
import MenuBarBurger from './Components/MenuBarBurger';
import BestRestorantList from './Components/BestRestaurantList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Card />} />
          <Route path="menu" element={<MenuBar/>} />
          <Route path="offers" element={<SpecialOffers />} />
          <Route path="restaurent" element={<MenuRestaurent />} />
          <Route path="/details/:id" element={<BestRestorantList/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="restaurant/:id" element={<RestaurantExtraInfo/>} />
          <Route path="menu/:id" element={<MenuBar/>} />
          <Route path="menu/:id/Burger" element={<MenuBarBurger />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

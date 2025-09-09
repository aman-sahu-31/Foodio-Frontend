import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import SpecialOffers from './Components/SpecialOffers';
import MenuRestaurent from './Pages/MenuRestaurent';

import RestaurantExtraInfo from './Components/RestaurantExtraInfo'; 
import BestRestorantList from './Components/BestRestaurantList';
import Menubar from './Components/Menubar';
import MenuRestoData from './Pages/MenuRestoData';
import AddCard from './Add Card/AddCard';
import AddOnsCard from './Add Card/AddOnsData';
import AddBill from './Add Card/AddBill';
import BestdataCard from './Components/BestdataCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Card />} />
          <Route path="offers" element={<SpecialOffers/>} />
          <Route path="Menubar" element={<Menubar />} />
          <Route path="restaurent" element={<MenuRestaurent />} />
          <Route path="details/:id" element={<BestRestorantList/>} />
          <Route path="restaurantCard/:id" element={<MenuRestoData/>} />
        
          <Route path="restaurant/:id" element={<RestaurantExtraInfo/>} />
          <Route path="AddCard/:id" element={<AddCard/>}/>
          <Route path="addOnscard/:id" element={<AddOnsCard />} />
          <Route path="Bill/:id" element={<AddBill />} />
        <Route path="data" element={<BestdataCard/>} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

async function fetchData() {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default App;
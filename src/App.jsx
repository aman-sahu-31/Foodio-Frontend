import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Menubar from './Components/Menubar';
import SpecialOffersSection from './Components/SpecialOffersSectio';
import MenuRestaurent from './Pages/MenuRestaurent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Card />} />
          <Route path="Menu" element={<Menubar/>} />
          <Route path="Offers" element={<SpecialOffersSection/>} />
          <Route path="restaurent" element={<MenuRestaurent/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

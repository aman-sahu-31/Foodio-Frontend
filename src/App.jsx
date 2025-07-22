import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import BestSelling from './Components/BestSelling';
import Partner from './Components/Partner';
import Testimonial from './Pages/Testimonial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Card />} />
          <Route path="BestSelling" element={<BestSelling />} />
          <Route path="Testimonial" element={<Testimonial />} />
          <Route path="Partner" element={<Partner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

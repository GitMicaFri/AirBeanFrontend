
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Pages/Landing/landing'
import CoffeeMenuPage from './Pages/CoffeeMenu/coffeeMenu';

function App() {
  return (
    //<LandingPage />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/coffee-menu" element={<CoffeeMenuPage />} />  
      </Routes>
    </Router>
  )
      
}

export default App

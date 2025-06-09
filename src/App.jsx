
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Pages/Landing/landing'
import CoffeeMenuPage from './Pages/CoffeeMenu/coffeeMenu'
import OrderHistoryPage from './Pages/OrderHistory/history'
import PopUpMenuPage from './Pages/PopUpMenu/popUpMenu'
import ProfilePage from './Pages/Profile/profile'
import StatusPage from './Pages/Profile/profile'

function App() {
  return (
    //<LandingPage />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/coffee-menu" element={<CoffeeMenuPage />} />
        <Route path="/coffee-menu" element={<OrderHistoryPage />} /> 
        <Route path="/coffee-menu" element={<PopUpMenuPage />} /> 
        <Route path="/coffee-menu" element={<ProfilePage />} /> 
        <Route path="/coffee-menu" element={<StatusPage />} />   
      </Routes>
    </Router>
  )
      
}

export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Pages/Landing/landing'
import AboutPage from './Pages/About/about'
import CoffeeMenuPage from './Pages/CoffeeMenu/coffeeMenu'
import OrderHistoryPage from './Pages/OrderHistory/history'
import PopUpMenuPage from './Pages/PopUpMenu/popUpMenu'
import ProfilePage from './Pages/Profile/profile'
import StatusPage from './Pages/Status/status'

function App() {
  return (
    //<LandingPage />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coffee-menu" element={<CoffeeMenuPage />} />
        <Route path="/history" element={<OrderHistoryPage />} /> 
        <Route path="/popUpMenu" element={<PopUpMenuPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/status" element={<StatusPage />} />   
      </Routes>
    </Router>
  )
      
}

export default App

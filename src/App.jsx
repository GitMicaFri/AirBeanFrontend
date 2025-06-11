// App.jsx //
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Pages/Landing/landing'
import AboutPage from './Pages/About/about'
import NavMenu from './Pages/NavMenu/navMenu';
import CoffeeMenuPage from './Pages/CoffeeMenu/coffeeMenu'
import OrderHistoryPage from './Pages/OrderHistory/history'
import ProfilePage from './Pages/Profile/profile'
import StatusPage from './Pages/Status/status'
import Cart from './Pages/Cart/cart'

function App() {
  console.log("Rendering App component");  // Debug-logg
  return (
    //<LandingPage />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/navmenu" element={<NavMenu />} />
        <Route path="/coffee-menu" element={<CoffeeMenuPage />} />
        <Route path="/history" element={<OrderHistoryPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/status" element={<StatusPage />} /> 
        <Route path="/cart" element={<Cart />}/>  
      </Routes>
    </Router>
  )
      
}

export default App

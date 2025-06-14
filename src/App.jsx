// App.jsx //
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Pages/Landing/Landing'
import AboutPage from './Pages/About/About'
import NavMenu from './Pages/NavMenu/NavMenu';
import CoffeeMenuPage from './Pages/CoffeeMenu/CoffeeMenu'
import ProfilePage from './Pages/Profile/Profile'
import StatusPage from './Pages/Status/Status'
import Cart from './Pages/Cart/Cart'

function App() {
  console.log("Rendering App component");
  return (
    //<LandingPage />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/navmenu" element={<NavMenu />} />
        <Route path="/coffee-menu" element={<CoffeeMenuPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/status" element={<StatusPage />} /> 
        <Route path="/cart" element={<Cart />}/>  
      </Routes>
    </Router>
  )
      
}

export default App

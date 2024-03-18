import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage'
import OrderHistory from './Pages/OrderHistory/OrderHistory.jsx'
import OrderOnItsWay from './Pages/OrderOnItsWay/OrderOnItsWay.jsx'
import OurCoffee from './Pages/OurCoffee/OurCoffee.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Welcome from './Pages/Welcome/Welcome.jsx'
//import YourOrder from './Pages/YourOrder/YourOrder.jsx'

//OrderHistory
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderonitsway" element={<OrderOnItsWay />} />
        <Route path="/ourcoffee" element={<OurCoffee />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/welcome" element={<Welcome />} />
        {/*<Route path="/yourorder" element={<YourOrder />} />*/}
        
      </Routes>
    </Router>
  </React.StrictMode>
);
// Den här filen startar projektet //
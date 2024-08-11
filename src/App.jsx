import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; 
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Careers from "./pages/Careers"; 
import JobDetail from './pages/JobDetail'; 
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import OtherPage from './pages/OtherPage';
import InsurancePopup from "./components/InsurancePopup";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="homePage">
        <div className="page">
          <div className="headr">
            <div className="logo">
              <div id="img1">
                <img src="/resim1.png" alt="resim1" />
                <div id="insurance">Insurance</div>
              </div>
            </div>
            
            <div className="homeMenu" onClick={toggleMenu}>
              <img src="/resim14.png" alt="resim14" />
            </div>

            <ul className={`headerul ${isMenuOpen ? 'active' : ''}`}>
              <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
              <li><NavLink to="/login" className="loginButton" onClick={() => setIsMenuOpen(false)}>Log in</NavLink></li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job-detail" element={<JobDetail />} /> 
          <Route path="/Blogs" element={<Blogs />} /> 
          <Route path="/Blog-Detail" element={<BlogDetail />} /> 
          <Route path="/insurance-popup" element={<InsurancePopup />} />
          <Route path="/other-page" element={<OtherPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

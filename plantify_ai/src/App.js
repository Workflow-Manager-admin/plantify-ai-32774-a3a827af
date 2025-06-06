// PUBLIC_INTERFACE
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import AIAdvisor from './pages/AIAdvisor';
import PlantCare from './pages/PlantCare';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <div className="logo">
                <span className="logo-symbol" aria-label="Plantify">🪴</span> Plantify <span style={{ color: "var(--base-light)", fontWeight:400, fontSize: 14 }}>AI</span>
              </div>
              <div style={{ display:"flex", gap: 20 }}>
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/shop">Shop</Link>
                <Link className="btn" to="/ai-advisor">AI Advisor</Link>
                <Link className="btn" to="/plant-care">Plant Care</Link>
                <Link className="btn" to="/faq">FAQ</Link>
                <Link className="btn" to="/about">About</Link>
                <Link className="btn" to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/ai-advisor" element={<AIAdvisor />} />
            <Route path="/plant-care" element={<PlantCare />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
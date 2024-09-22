// src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Finallogo from "./assets/Finallogo.jpg";
import headerImage from "./assets/header agriculture page_Landscape.png";
import GovernmentSchemes from "./assets/GovernmentSchemes"; 
import Cropprice from "./assets/Cropprice"; 
import Farmingtool from "./assets/Farmingtool"; 
import LearnMore from "./assets/LearnMore"; 
import WeatherReport from "./assets/WeatherReport"; 

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [fadeIn, setFadeIn] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);

  const handleTabChange = (tab) => {
    if (activeTab === tab) return;
    setFadeIn(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFadeIn(true);
    }, 300);
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar background">
          <ul className="nav-list">
            <div className="logo">
              <img src={Finallogo} alt="logo" />
            </div>
            <li>
              <Link to="/" onClick={() => handleTabChange("home")}>Home</Link>
            </li>
            <li>
              <Link to="/weather" onClick={() => handleTabChange("weather")}>Weather</Link>
            </li>
            <li>
              <Link to="/resources" onClick={() => handleTabChange("resources")}>Resources</Link>
            </li>
            <li>
              <Link to="/community" onClick={() => handleTabChange("community")}>Community</Link>
            </li>
          </ul>
          <div className="rightNav">
            <input type="text" name="search" id="search" placeholder="Search..." />
            <button className="btn btn-sm">Search</button>
          </div>
        </nav>

        <section className="section">
          <div className={`box-main fade-in ${fadeIn ? "fade-in-active" : ""}`}>
            <Routes>
              <Route path="/" element={
                activeTab === "home" && (
                  <div className={`tab-content ${activeTab === "home" ? "tab-content-active" : ""}`}>
                    <div className="image-container">
                      <img src={headerImage} alt="Home page banner" className="banner-image" />
                      <div className="text-overlay">
                        <h1 className="animated-text">
                          <span className="line word1">Welcome</span>
                          <span className="line word2">to</span>
                          <span className="line word3">AgriConnect</span>
                        </h1>
                        <p className="slogan">Connecting Farmers, Growing Futures</p>
                        <Link to="/learn-more" className="learn-more-button">Learn More</Link>
                      </div>
                    </div>
                    <h1 className="text-big">Current Market Prices</h1>
                    <p className="text-small">Stay updated with the latest prices of vegetables, crops, and tools. Whether you're a small-scale or large-scale farmer, having access to accurate market rates can help you sell your produce at the best price and invest in tools at the right time.</p>
                    <div className="button-container">
                      <Link to="/cropprice" className="learn-more-button">Learn More</Link>
                    </div>
                    <h1 className="text-big">Government Schemes</h1>
                    <p className="text-small">Explore government initiatives and schemes specifically designed to benefit farmers. We provide details about available subsidies, loans, and insurance schemes, making it easier for you to access financial aid and support programs.</p>
                    <div className="button-container">
                      <Link to="/government-schemes" className="learn-more-button">Learn More</Link>
                    </div>
                    <h1 className="text-big">Farming Tools & Machinery</h1>
                    <p className="text-small">Find the best tools and equipment for your farming needs. We provide reviews, pricing, and details on where you can buy modern machinery to make your farming practices more efficient.</p>
                    <div className="button-container">
                      <Link to="/farmingtool" className="learn-more-button">Learn More</Link>
                    </div>
                  </div>
                )
              } />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/government-schemes" element={<GovernmentSchemes />} />
              <Route path="/cropprice" element={<Cropprice />} />
              <Route path="/farmingtool" element={<Farmingtool />} />
              <Route path="/weather" element={<WeatherReport />} />
              <Route path="/resources" element={<div>Resources Content</div>} />
              <Route path="/community" element={<div>Community Content</div>} />
            </Routes>
          </div>
        </section>

        <div className="chatbot-button" onClick={toggleChat}>
          💬
        </div>

        {chatVisible && (
          <div className="chat-window">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/P2cKXl8hhG_3VbCHlJthi"
              width="100%"
              style={{ height: "100%" }}
              frameBorder="0"
              title="Chatbot"
            />
          </div>
        )}

        <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
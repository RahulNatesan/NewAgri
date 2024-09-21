// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Finallogo from "./assets/Finallogo.jpg";
import headerImage from "./assets/header agriculture page_Landscape.png";
import GovernmentSchemes from "./assets/GovernmentSchemes";
import Cropprice from "./assets/Cropprice"; // Import Cropprice component
import Farmingtool from "./assets/Farmingtool"; // Import Farmingtool component
import './Farmingtool.css';



function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
              <Link to="/tutorials" onClick={() => handleTabChange("tutorials")}>Tutorials</Link>
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
          <div className="box-main">
            <Routes>
              <Route path="/" element={
                activeTab === "home" && (
                  <div className={`tab-content ${activeTab === "home" ? "tab-content-active" : ""}`}>
                    <div className="image-container">
                      <img src={headerImage} alt="Home page banner" className="banner-image" />
                      <div className="text-overlay"></div>
                    </div>
                    <h1 className="text-big center"><b>Welcome to AgriConnect</b></h1>
                    <h1 className="text-big">Empowering Farmers with Knowledge & Resources</h1>
                    <p className="text-small">At AgriConnect, our goal is to bridge the gap between farmers and essential agricultural information. We aim to provide a one-stop platform that helps farmers in making informed decisions and improving their productivity.</p>
                    <h1 className="text-big">Current Market Prices</h1>
<p className="text-small">
    Stay updated with the latest prices of vegetables, crops, and tools. Whether you're a small-scale or large-scale farmer, having access to accurate market rates can help you sell your produce at the best price and invest in tools at the right time.
</p>
<Link to="/cropprice" className="learn-more-button">Learn More</Link>

<h1 className="text-big">Government Schemes</h1>
<p className="text-small">
    Explore government initiatives and schemes specifically designed to benefit farmers. We provide details about available subsidies, loans, and insurance schemes, making it easier for you to access financial aid and support programs.
</p>
<Link to="/government-schemes" className="learn-more-button">Learn More</Link>

<h1 className="text-big">Farming Tools & Machinery</h1>
<p className="text-small">
    Find the best tools and equipment for your farming needs. We provide reviews, pricing, and details on where you can buy modern machinery to make your farming practices more efficient.
</p>
<Link to="/farmingtool" className="learn-more-button">Learn More</Link>
                    <h1 className="text-big">Agri Tips & Best Practices</h1>
                    <p className="text-small">Enhance your knowledge with expert tips on crop management, sustainable farming practices, and organic farming. Learn about pest control, water management, and soil health to increase your yield.</p>
                    <h1 className="text-big">Connect with Experts</h1>
                    <p className="text-small">Need advice on a specific issue? Connect with agricultural experts and get personalized recommendations based on your farm's needs. Whether it's choosing the right crops for your soil or understanding the latest technology in farming, we've got you covered.</p>
                    <h1 className="text-big">Join the AgriConnect Community</h1>
                    <p className="text-small">Become part of a growing network of farmers who are sharing knowledge, experiences, and solutions to common challenges in agriculture. Together, we can cultivate success.</p>
                  </div>
                )
              } />
              <Route path="/government-schemes" element={<GovernmentSchemes />} />
              <Route path="/cropprice" element={<Cropprice />} />
              <Route path="/farmingtool" element={<Farmingtool />} />
              {/* Add other routes here */}
              <Route path="/tutorials" element={<div>Tutorials Content</div>} />
              <Route path="/resources" element={<div>Resources Content</div>} />
              <Route path="/community" element={<div>Community Content</div>} />
            </Routes>
          </div>
        </section>

        <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from "react";
import "./App.css";
import Finallogo from "./assets/Finallogo.jpg";

function App() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setTimeout(() => {
      setActiveTab(tab);
    }, 300); // Delay for 300ms
  };

  return (
    <div className="container">
      <nav className="navbar background">
      <ul className="nav-list">
          <div className="logo">
            <img src={Finallogo} alt="logo" />
          </div>
          <li>
            <a onClick={() => handleTabChange("home")} href="#home" tabIndex="0">Home</a>
          </li>
          <li>
            <a onClick={() => handleTabChange("tutorials")} href="#tutorials" tabIndex="0">Tutorials</a>
          </li>
          <li>
            <a onClick={() => handleTabChange("resources")} href="#resources" tabIndex="0">Resources</a>
          </li>
          <li>
            <a onClick={() => handleTabChange("community")} href="#community" tabIndex="0">Community</a>
          </li>
        </ul>

        <div className="rightNav">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <button className="btn btn-sm">Search</button>
        </div>
      </nav>

      <section className="section">
        <div className="box-main">
          {activeTab === "home" && (
            <div className={`tab-content ${activeTab === "home" ? "tab-content-active" : ""}`}>
              <h1 className="text-big center"><b>Welcome to AgriConnect</b></h1><br></br>
              <h1 className="text-big">Empowering Farmers with Knowledge & Resources</h1>
              <p className="text-small">At AgriConnect, our goal is to bridge the gap between farmers and essential agricultural information. We aim to provide a one-stop platform that helps farmers in making informed decisions and improving their productivity.</p>

              <h1 className="text-big">Current Market Prices</h1>
              <p className="text-small">Stay updated with the latest prices of vegetables, crops, and tools. Whether you're a small-scale or large-scale farmer, having access to accurate market rates can help you sell your produce at the best price and invest in tools at the right time.</p>

              <h1 className="text-big">Government Schemes</h1>
              <p className="text-small">Explore government initiatives and schemes specifically designed to benefit farmers. We provide details about available subsidies, loans, and insurance schemes, making it easier for you to access financial aid and support programs.</p>

              <h1 className="text-big">Weather Updates</h1>
              <p className="text-small">Make timely decisions based on real-time weather updates. Be it sowing, irrigating, or harvesting—knowing the weather conditions will help you plan better and avoid potential losses.</p>

              <h1 className="text-big">Farming Tools & Machinery</h1>
              <p className="text-small">Find the best tools and equipment for your farming needs. We provide reviews, pricing, and details on where you can buy modern machinery to make your farming practices more efficient.</p>

              <h1 className="text-big">Agri Tips & Best Practices</h1>
              <p className="text-small">Enhance your knowledge with expert tips on crop management, sustainable farming practices, and organic farming. Learn about pest control, water management, and soil health to increase your yield.</p>

              <h1 className="text-big">Connect with Experts</h1>
              <p className="text-small">Need advice on a specific issue? Connect with agricultural experts and get personalized recommendations based on your farm's needs. Whether it's choosing the right crops for your soil or understanding the latest technology in farming, we've got you covered.</p>

              <h1 className="text-big">Join the AgriConnect Community</h1>
              <p className="text-small">Become part of a growing network of farmers who are sharing knowledge, experiences, and solutions to common challenges in agriculture. Together, we can cultivate success.</p>
            </div>
          )}
          {activeTab === "tutorials" && (
  <div className={`tab-content ${activeTab === "tutorials" ? "tab-content-active" : ""}`}>
    <h1 className="text-big center"><b>Learn with Tutorials</b></h1><br></br>
    <h1 className="text-big">Enhance Your Farming Skills</h1>
    <p className="text-small">Explore our comprehensive tutorials designed to improve your farming knowledge and practices.</p>

    <h1 className="text-big">Crop Management</h1>
    <p className="text-small">Learn best practices for managing different types of crops, including soil preparation, planting techniques, and harvesting methods.</p>

    <h1 className="text-big">Sustainable Farming</h1>
    <p className="text-small">Discover techniques to farm sustainably, including crop rotation, organic farming, and water conservation methods.</p>

    <h1 className="text-big">Soil Health</h1>
    <p className="text-small">Understand the importance of soil health and learn how to improve soil quality for better crop yields.</p>

    <h1 className="text-big">Pest Control</h1>
    <p className="text-small">Get insights into effective pest management strategies to protect your crops from harmful insects and diseases.</p>
  </div>
)}


{activeTab === "resources" && (
  <div className={`tab-content ${activeTab === "resources" ? "tab-content-active" : ""}`}>
    <h1 className="text-big center"><b>Resources Opportunities</b></h1><br></br>
    <h1 className="text-big">Access Valuable Resources</h1>
    <p className="text-small">Find various resources to support your farming journey and enhance your productivity.</p>

    <h1 className="text-big">Market Prices</h1>
    <p className="text-small">Stay updated with real-time market prices for vegetables, fruits, and tools to make informed selling and buying decisions.</p>

    <h1 className="text-big">Government Schemes</h1>
    <p className="text-small">Explore subsidies, grants, and loans available for farmers to support your financial needs.</p>

    <h1 className="text-big">Training Programs</h1>
    <p className="text-small">Find training programs aimed at skill development in agriculture, designed to improve your techniques and knowledge.</p>

    <h1 className="text-big">Farming Equipment</h1>
    <p className="text-small">Discover resources for purchasing or renting the latest farming tools and machinery to enhance your efficiency.</p>
  </div>
)}


{activeTab === "community" && (
  <div className={`tab-content ${activeTab === "community" ? "tab-content-active" : ""}`}>
    <h1 className="text-big center"><b>Community Resources</b></h1><br></br>
    <h1 className="text-big">Join Our Farming Community</h1>
    <p className="text-small">Connect with fellow farmers and share valuable experiences and knowledge.</p>

    <h1 className="text-big">Forums</h1>
    <p className="text-small">Participate in discussions about farming challenges, solutions, and share your insights with the community.</p>

    <h1 className="text-big">Networking Events</h1>
    <p className="text-small">Join local events to meet other farmers and agricultural experts for collaboration and support.</p>

    <h1 className="text-big">Expert Q&A</h1>
    <p className="text-small">Ask questions and get answers from agricultural specialists tailored to your specific farming needs.</p>

    <h1 className="text-big">Success Stories</h1>
    <p className="text-small">Read inspiring stories from farmers who have achieved success through innovative practices and hard work.</p>
  </div>
)}


        </div>
        
      </section>

      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default App;

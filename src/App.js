
import React, { useState } from "react";
import Tabs from "./components/Tabs";
import "./styles.css";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg"
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-badge">Product Showcase</div>
        <h1 className="app-title">Discover Our Journey</h1>
        <p className="app-subtitle">
          Explore our history, vision, and goals through an intuitive and
          elegant interface designed for modern users.
        </p>
      </header>

      <div className="hero-section">
        <div className="hero-image-wrap">
          <img src={selectedImage} alt="Company showcase" className="hero-image" />
          <div className="image-overlay"></div>
        </div>
        <div className="hero-content">
          <Tabs onTabChange={setSelectedImage} />
        </div>
      </div>
    </div>
  );
};

export default App;

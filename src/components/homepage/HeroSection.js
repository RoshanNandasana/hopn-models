import React from "react";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-card">
      <img
        src="/images/cardmodel.jpg"
        alt="Source Verified Talent"
        className="hero-img"
      />
      <div className="hero-overlay">
        <h3>Source Verified Talent</h3>
        <p>
          Access a curated network of models, talents, and influencers for promotional work, 
          expert spaces, photoshoots, ads, and digital content creation.
        </p>
        <button>View Models</button>
      </div>
    </div>

    <div className="hero-card">
      <img
        src="/images/cardmodel2.jpg"
        alt="Explore Opportunities"
        className="hero-img"
      />
      <div className="hero-overlay">
        <h3>Explore Modeling Opportunities</h3>
        <p>
          Find modeling work that fits your style and experience. 
          Let our platform connect you with trusted clients and real opportunities.
        </p>
        <button>View Models</button>
      </div>
    </div>
  </section>
);

export default HeroSection;

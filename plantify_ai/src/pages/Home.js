import React from "react";

// PUBLIC_INTERFACE
function Home() {
  /**
   * Home (Landing) page
   * - Hero section: Welcome, app intro, call to action for AI Advisor.
   * - Hero image or illustration.
   * - Carousel placeholder for featured plants.
   */
  return (
    <div className="container" style={{ paddingTop: 120 }}>
      <section className="hero">
        <div className="subtitle">Welcome to Plantify AI</div>
        <h1 className="title">Your Smart Plant Shop & AI Advisor</h1>
        <div className="description">
          Discover curated plants, get expert advice instantly, and make your space greener.
        </div>
        <button className="btn btn-large" onClick={() => window.location.href='/ai-advisor'}>
          Ask the AI Plant Advisor
        </button>
        <div style={{ height: 40 }} />
        <div className="featured-carousel">
          <h3 style={{ color: "var(--base-light)" }}>Featured Plants</h3>
          <div style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {/* Placeholder: replace with dynamic plants from JSON */}
            <div className="plant-card">Plant #1</div>
            <div className="plant-card">Plant #2</div>
            <div className="plant-card">Plant #3</div>
            <div className="plant-card">Plant #4</div>
          </div>
          <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: 8 }}>
            Shop our most popular selections!
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

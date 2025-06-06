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
    <div className="container" style={{ paddingTop: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <section className="hero">
        <div className="subtitle" tabIndex={0}>Welcome to Plantify AI</div>
        <h1 className="title" tabIndex={0}>Your Smart Plant Shop &amp; AI Advisor</h1>
        <div className="description">
          Discover curated plants, get expert advice instantly, and make your space greener.
        </div>
        <button
          className="btn btn-large"
          onClick={() => window.location.href = '/ai-advisor'}
          style={{ marginTop: 8, marginBottom: 10 }}
          aria-label="Ask the AI Plant Advisor"
        >
          🌱 Ask the AI Plant Advisor
        </button>
        <div style={{ height: 22 }} aria-hidden="true" />
        <div className="featured-carousel" aria-label="Featured Plant Selections">
          <h3 className="subtitle" style={{ marginBottom: 10, marginTop: 2 }}>Featured Plants</h3>
          <div className="plant-grid" style={{ marginBottom: 7 }}>
            {/* Placeholder: replace with dynamic plants from JSON */}
            <div className="plant-card" tabIndex={0}>🪴 Monstera</div>
            <div className="plant-card" tabIndex={0}>🌵 Snake Plant</div>
            <div className="plant-card" tabIndex={0}>🌿 Fern</div>
            <div className="plant-card" tabIndex={0}>🌼 Peace Lily</div>
          </div>
          <div className="description" style={{ fontSize: "0.99rem", color: "var(--text-secondary)", marginTop: 5 }}>
            Shop our most popular selections!
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from "react";

// PUBLIC_INTERFACE
function Shop() {
  /**
   * Shop page
   * - Shows list of products (plants) in cards - placeholder for dynamic content.
   * - Filter controls (static placeholders).
   * - Button to AI Advisor.
   */
  return (
    <div className="container" style={{ paddingTop: 96, flexDirection: "column" }}>
      <h1 className="title" tabIndex={0} style={{ fontSize: "2.35rem" }}>🛒 Plant Shop</h1>
      <div className="description">
        Browse our collection of indoor and outdoor plants. Use filters to find your perfect match!
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: 'wrap', marginBottom: 32, marginTop: 13 }}>
        <button className="btn" aria-label="Show Indoor Plants">Indoor</button>
        <button className="btn" aria-label="Show Outdoor Plants">Outdoor</button>
        <button className="btn" aria-label="Show Low Light Plants">Low Light</button>
        <button className="btn" aria-label="Show High Light Plants">High Light</button>
        <button className="btn" aria-label="Sort by price">Price: $ - $$$</button>
        <button
          className="btn btn-large"
          style={{ marginLeft: "auto", background: "var(--accent)", color: "#fff" }}
          onClick={() => window.location.href = "/ai-advisor"}
          aria-label="Get AI Help"
        >
          🤖 Need AI Help?
        </button>
      </div>
      <div className="plant-grid">
        {/* Placeholder - plant cards to be rendered from plants.json */}
        <div className="plant-card" tabIndex={0} aria-label="Monstera plant card">🪴 Monstera</div>
        <div className="plant-card" tabIndex={0} aria-label="Snake Plant card">🌵 Snake Plant</div>
        <div className="plant-card" tabIndex={0} aria-label="Fern card">🌿 Fern</div>
        <div className="plant-card" tabIndex={0} aria-label="Peace Lily card">🌼 Peace Lily</div>
        <div className="plant-card" tabIndex={0} aria-label="ZZ Plant card">🪴 ZZ Plant</div>
      </div>
    </div>
  );
}

export default Shop;

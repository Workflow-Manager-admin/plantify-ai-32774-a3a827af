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
    <div className="container" style={{ paddingTop: 100 }}>
      <h1 className="title" style={{ fontSize: "2.2rem" }}>Plant Shop</h1>
      <div className="description">
        Browse our collection of indoor and outdoor plants. Use filters to find your perfect match!
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <button className="btn">Indoor</button>
        <button className="btn">Outdoor</button>
        <button className="btn">Low Light</button>
        <button className="btn">High Light</button>
        <button className="btn">Price: $ - $$$</button>
        <button className="btn" style={{ marginLeft: 'auto' }}
          onClick={() => window.location.href="/ai-advisor"}>
          Need AI Help?
        </button>
      </div>
      <div className="plant-grid" style={{
        display: "flex",
        gap: 24,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {/* Placeholder - plant cards to be rendered from plants.json */}
        <div className="plant-card">Plant Card #1</div>
        <div className="plant-card">Plant Card #2</div>
        <div className="plant-card">Plant Card #3</div>
      </div>
    </div>
  );
}

export default Shop;

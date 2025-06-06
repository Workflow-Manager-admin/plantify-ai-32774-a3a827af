import React from "react";

// PUBLIC_INTERFACE
function PlantCare() {
  /**
   * Plant Care Page
   * - AI-based care question input (same as AIAdvisor, reused UI).
   * - Static FAQ answers below.
   */
  return (
    <div className="container" style={{ paddingTop: 100, maxWidth: 700 }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>Plant Care Tips & AI Help</h1>
      <div className="description">
        Get care tips from our AI, or browse frequently-asked questions below.
      </div>
      <form style={{ display: "flex", gap: 8, marginTop: 16, marginBottom: 32 }}>
        <input type="text"
          className="input"
          placeholder="Ask about plant care, e.g. How often to water monstera?"
          style={{ flex: 1, padding: "10px 12px", borderRadius: 4, border: "1px solid var(--border-color)" }}
          disabled
        />
        <button className="btn" type="button" disabled>Ask AI</button>
      </form>
      <div style={{ marginTop: 12 }}>
        <h2 style={{ color: "var(--base-light)" }}>Plant Care FAQs</h2>
        <ul style={{ color: "var(--text-secondary)" }}>
          <li>How much sunlight do typical houseplants need?</li>
          <li>How often should I water succulents?</li>
          <li>What is the best soil for ferns?</li>
          <li>Why are my leaves turning yellow?</li>
        </ul>
        <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          More details and interactive tips coming soon...
        </div>
      </div>
    </div>
  );
}

export default PlantCare;

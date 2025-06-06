import React from "react";

// PUBLIC_INTERFACE
function PlantCare() {
  /**
   * Plant Care Page
   * - AI-based care question input (same as AIAdvisor, reused UI).
   * - Static FAQ answers below.
   */
  return (
    <div className="container" style={{ paddingTop: 96, maxWidth: 700, flexDirection: "column" }}>
      <h1 className="title" style={{ fontSize: "2.12rem" }} tabIndex={0}>Plant Care Tips &amp; AI Help</h1>
      <div className="description">
        Get care tips from our AI, or browse frequently-asked questions below.
      </div>
      <form style={{ display: "flex", gap: 8, marginTop: 18, marginBottom: 24 }}>
        <input
          type="text"
          className="input"
          placeholder="Ask about plant care, e.g. How often to water monstera?"
          style={{ flex: 1 }}
          aria-label="Ask a plant care question"
          disabled
        />
        <button className="btn btn-large" type="button" aria-label="Ask AI" disabled>Ask AI</button>
      </form>
      <div style={{ marginTop: 2 }}>
        <h2 className="subtitle" style={{ marginBottom: 8, color: "var(--primary)" }}>Plant Care FAQs</h2>
        <ul className="faq-list" style={{ color: "var(--text-secondary)", listStyle: "disc inside", paddingLeft: "1.2em", marginTop: 6, marginBottom: 12 }}>
          <li tabIndex={0}>How much sunlight do typical houseplants need?</li>
          <li tabIndex={0}>How often should I water succulents?</li>
          <li tabIndex={0}>What is the best soil for ferns?</li>
          <li tabIndex={0}>Why are my leaves turning yellow?</li>
        </ul>
        <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          More details and interactive tips coming soon...
        </div>
      </div>
    </div>
  );
}

export default PlantCare;

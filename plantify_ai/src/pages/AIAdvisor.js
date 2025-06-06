import React from "react";

// PUBLIC_INTERFACE
function AIAdvisor() {
  /**
   * AI Advisor Page
   * - Contains chat-like interface.
   * - Integrates with OpenAI API (placeholder, logic in openai.js).
   */
  return (
    <div className="container" style={{ paddingTop: 100, maxWidth: 600 }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>AI Plant Advisor</h1>
      <div className="description">
        Have a plant question or need recommendations? Type below and let Plantify's AI Advisor help you!
      </div>
      <div style={{
        border: "1px solid var(--border-color)",
        background: "rgba(255,255,255,0.02)",
        padding: 16,
        borderRadius: 8,
        minHeight: 220,
        marginBottom: 20,
        marginTop: 12
      }}>
        {/* Placeholder for chat messages */}
        <div style={{
          color: "var(--text-secondary)",
          fontStyle: "italic",
        }}>
          Chat feature coming soon!
        </div>
      </div>
      <form style={{ display: 'flex', gap: 8 }}>
        <input type="text" className="input" placeholder="Ask the AI about plants..." style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 4,
            border: "1px solid var(--border-color)"
        }} disabled />
        <button className="btn" type="button" disabled>Send</button>
      </form>
    </div>
  );
}

export default AIAdvisor;

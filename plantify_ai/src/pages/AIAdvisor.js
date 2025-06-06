import React from "react";

// PUBLIC_INTERFACE
function AIAdvisor() {
  /**
   * AI Advisor Page
   * - Contains chat-like interface.
   * - Integrates with OpenAI API (placeholder, logic in openai.js).
   */
  return (
    <div className="container" style={{ paddingTop: 96, maxWidth: 600, flexDirection: "column" }}>
      <h1 className="title" style={{ fontSize: "2.15rem" }} tabIndex={0}>AI Plant Advisor</h1>
      <div className="description">
        Have a plant question or need recommendations? Type below and let Plantify's AI Advisor help you!
      </div>
      <div className="chat-container" style={{ minHeight: 178, marginTop: 14, marginBottom: 18 }}>
        {/* Placeholder for chat messages */}
        <div style={{
          color: "var(--text-secondary)",
          fontStyle: "italic",
        }}>
          Chat feature coming soon!
        </div>
      </div>
      <form style={{ display: 'flex', gap: 8 }} role="search">
        <input
          type="text"
          className="input"
          placeholder="Ask the AI about plants..."
          style={{ flex: 1 }}
          aria-label="Type your plant question"
          disabled
        />
        <button
          className="btn"
          type="button"
          aria-label="Send AI Query"
          disabled
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default AIAdvisor;

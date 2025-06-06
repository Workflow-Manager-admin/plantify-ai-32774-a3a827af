import React from "react";

// PUBLIC_INTERFACE
function FAQ() {
  /**
   * FAQ Page
   * - Static common questions/answers.
   * - Optional AI chat prompt (disabled in skeleton).
   */
  return (
    <div className="container" style={{ paddingTop: 100, maxWidth: 700 }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>Frequently Asked Questions</h1>
      <div className="description">
        Answers to common questions about Plantify AI.
      </div>
      <div style={{
        margin: "16px 0 32px 0"
      }}>
        <form style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            className="input"
            placeholder="Ask a question (coming soon)"
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 4,
              border: "1px solid var(--border-color)",
            }}
            disabled
          />
          <button className="btn" type="button" disabled>Ask AI</button>
        </form>
      </div>
      <div>
        <ul>
          <li>
            <strong>Do I need an account to buy plants?</strong>
            <div>No, Plantify AI is frontend-only, no login needed. Shop and chat freely!</div>
          </li>
          <li>
            <strong>How do I get help selecting plants?</strong>
            <div>Use the AI Plant Advisor for tailored suggestions.</div>
          </li>
          <li>
            <strong>Is my data private?</strong>
            <div>Yes! There’s no backend – your queries stay on your device.</div>
          </li>
          <li>
            <strong>Can I contact support?</strong>
            <div>Reach us via the Contact page for more help.</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQ;

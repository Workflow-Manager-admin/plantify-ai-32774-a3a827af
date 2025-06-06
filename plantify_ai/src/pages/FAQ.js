import React from "react";

// PUBLIC_INTERFACE
function FAQ() {
  /**
   * FAQ Page
   * - Static common questions/answers.
   * - Optional AI chat prompt (disabled in skeleton).
   */
  return (
    <div className="container" style={{ paddingTop: 96, maxWidth: 700, flexDirection: "column" }}>
      <h1 className="title" style={{ fontSize: "2.1rem" }} tabIndex={0}>Frequently Asked Questions</h1>
      <div className="description">
        Answers to common questions about <b>Plantify AI</b>.
      </div>

      <div style={{ margin: "16px 0 30px 0", width: "100%" }}>
        <form style={{ display: "flex", gap: 8 }} role="search">
          <input
            type="text"
            className="input"
            placeholder="Ask a question (coming soon)"
            style={{ flex: 1 }}
            aria-label="Ask about Plantify AI"
            disabled
          />
          <button className="btn" type="button" aria-label="Ask AI" disabled>
            Ask AI
          </button>
        </form>
      </div>

      <div className="faq-list" aria-label="Frequently Asked Questions List" style={{ width: "100%" }}>
        <ul>
          <li className="faq-card" tabIndex={0} style={{ marginBottom: 15 }}>
            <strong>Do I need an account to buy plants?</strong>
            <div className="description">No, Plantify AI is frontend-only, no login needed. Shop and chat freely!</div>
          </li>
          <li className="faq-card" tabIndex={0} style={{ marginBottom: 15 }}>
            <strong>How do I get help selecting plants?</strong>
            <div className="description">Use the AI Plant Advisor for tailored suggestions.</div>
          </li>
          <li className="faq-card" tabIndex={0} style={{ marginBottom: 15 }}>
            <strong>Is my data private?</strong>
            <div className="description">Yes! There’s no backend – your queries stay on your device.</div>
          </li>
          <li className="faq-card" tabIndex={0}>
            <strong>Can I contact support?</strong>
            <div className="description">Reach us via the Contact page for more help.</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQ;

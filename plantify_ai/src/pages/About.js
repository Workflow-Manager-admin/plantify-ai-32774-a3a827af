import React from "react";

// PUBLIC_INTERFACE
function About() {
  /**
   * About Us page
   * - Explains the project, who's behind it, and which technologies are used.
   * - Icons/logos (to be added).
   */
  return (
    <div className="container" style={{ paddingTop: 100, maxWidth: 700 }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>About Plantify AI</h1>
      <div className="description" style={{ marginBottom: 24 }}>
        Plantify AI is an internship project inspired by the love for plants and tech – a smart digital plant shop using artificial intelligence to assist, educate, and inspire.
      </div>
      <div>
        <h3 style={{ color: "var(--base-light)" }}>Technologies Used</h3>
        <ul>
          <li>React JS (Frontend SPA)</li>
          <li>OpenAI API (for smart plant advice)</li>
          <li>CSS3 (custom, modern design)</li>
        </ul>
      </div>
      <div>
        <h3 style={{ color: "var(--base-light)" }}>Created For</h3>
        <div className="description">
          Demonstration/internship project – not a real store. Built to showcase software skills and AI integration.
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        {/* Placeholder for tech logos/icons */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <span style={{ fontSize: 32 }}>🪴</span>
          <span style={{ fontSize: 28 }}>⚛️</span>
          <span style={{ fontSize: 32 }}>🤖</span>
        </div>
      </div>
    </div>
  );
}

export default About;

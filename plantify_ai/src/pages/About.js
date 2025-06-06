import React from "react";

// PUBLIC_INTERFACE
function About() {
  /**
   * About Us page
   * - Explains the project, who's behind it, and which technologies are used.
   * - Icons/logos (to be added).
   */
  return (
    <div className="container" style={{ paddingTop: 96, maxWidth: 700, flexDirection: "column" }}>
      <h1 className="title" style={{ fontSize: "2.09rem" }} tabIndex={0}>About Plantify AI</h1>
      <div className="description" style={{ marginBottom: 28 }}>
        <b>Plantify AI</b> is a demo project inspired by the love for plants and tech—a smart digital plant shop that uses artificial intelligence to assist, educate, and inspire plant owners of the future.
      </div>

      <section style={{ marginBottom: 28 }}>
        <h3 className="subtitle" style={{ color: "var(--accent)", marginBottom: 7 }}>Technologies Used</h3>
        <ul style={{ color: "var(--text-secondary)", fontSize: "1.06rem", marginTop: 0 }}>
          <li tabIndex={0}>React JS (Frontend SPA)</li>
          <li tabIndex={0}>OpenAI API (for smart plant advice)</li>
          <li tabIndex={0}>CSS3 (custom, modern design)</li>
        </ul>
      </section>

      <section>
        <h3 className="subtitle" style={{ color: "var(--accent)", marginBottom: 7 }}>Created For</h3>
        <div className="description">
          Demonstration / internship project. Not a real store—built to showcase software engineering and AI integration skills.
        </div>
      </section>

      <div style={{ marginTop: 34 }}>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center' }} aria-label="Technology Icons">
          <span style={{ fontSize: 32 }} title="Houseplant">🪴</span>
          <span style={{ fontSize: 28 }} title="React">⚛️</span>
          <span style={{ fontSize: 32 }} title="Robot AI">🤖</span>
          <span style={{ fontSize: 30 }} title="Frontend">💻</span>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";

// PUBLIC_INTERFACE
function Contact() {
  /**
   * Contact Page
   * - Static contact form or info.
   * - Form is demo only (no backend, submit is disabled).
   */
  return (
    <div className="container" style={{ paddingTop: 100, maxWidth: 500 }}>
      <h1 className="title" style={{ fontSize: "2rem" }}>Contact Us</h1>
      <div className="description" style={{ marginBottom: 20 }}>
        Send us a message (for demo only, form is disabled)
      </div>
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: 14
      }}>
        <input type="text" className="input" placeholder="Your Name" disabled
          style={{
            padding: "10px 12px",
            borderRadius: 4,
            border: "1px solid var(--border-color)"
          }}
        />
        <input type="email" className="input" placeholder="Your Email" disabled
          style={{
            padding: "10px 12px",
            borderRadius: 4,
            border: "1px solid var(--border-color)"
          }}
        />
        <textarea className="input" placeholder="Your Message" rows={4} disabled
          style={{
            padding: "10px 12px",
            borderRadius: 4,
            border: "1px solid var(--border-color)",
            resize: "vertical"
          }}
        />
        <button className="btn btn-large" type="button" disabled>Submit</button>
      </form>
      <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: 10 }}>
        For inquiries, email us: <span style={{ color: "var(--base-light)" }}>hello@plantify.ai (demo)</span>
      </div>
    </div>
  );
}

export default Contact;

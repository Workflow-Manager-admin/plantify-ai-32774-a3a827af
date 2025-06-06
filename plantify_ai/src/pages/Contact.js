import React from "react";

// PUBLIC_INTERFACE
function Contact() {
  /**
   * Contact Page
   * - Static contact form or info.
   * - Form is demo only (no backend, submit is disabled).
   */
  return (
    <div className="container" style={{ paddingTop: 98, maxWidth: 500, flexDirection: "column" }}>
      <h1 className="title" style={{ fontSize: "2rem" }} tabIndex={0}>Contact Us</h1>
      <div className="description" style={{ marginBottom: 18 }}>
        Send us a message (for demo only, form is disabled)
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 14 }}
        aria-label="Contact Form"
      >
        <input
          type="text"
          className="input"
          placeholder="Your Name"
          aria-label="Your Name"
          disabled
        />
        <input
          type="email"
          className="input"
          placeholder="Your Email"
          aria-label="Your Email"
          disabled
        />
        <textarea
          className="input"
          placeholder="Your Message"
          rows={4}
          aria-label="Your Message"
          disabled
          style={{ resize: "vertical" }}
        />
        <button className="btn btn-large" type="button" disabled style={{ marginTop: 5 }}>
          Submit
        </button>
      </form>
      <div style={{ fontSize: "0.98rem", color: "var(--text-secondary)", marginTop: 13 }}>
        For inquiries, email us:{" "}
        <span style={{ color: "var(--accent)", fontWeight: 500 }}>
          hello@plantify.ai (demo)
        </span>
      </div>
    </div>
  );
}

export default Contact;

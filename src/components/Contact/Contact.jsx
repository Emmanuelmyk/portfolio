// ==================== src/components/Contact/Contact.jsx ====================
import React from "react";
import "./Contact.css";

const Contact = () => {
  const socialLinks = [
    {
      icon: "💼",
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
    },
    { icon: "🐙", label: "GitHub", url: "https://github.com/yourusername" },
    { icon: "🐦", label: "Twitter", url: "https://twitter.com/yourhandle" },
    { icon: "📧", label: "Email", url: "mailto:your.email@example.com" },
  ];

  const contactInfo = [
    { icon: "📍", title: "Location", text: "Based in San Francisco, CA" },
    { icon: "⏰", title: "Availability", text: "Open to new opportunities" },
    { icon: "💬", title: "Response Time", text: "Typically within 24 hours" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Feel free to reach out through any of these platforms. I'm always
            open to discussing new opportunities, creative projects, or just
            having a friendly chat.
          </p>
        </div>

        <div className="contact-content">
          {/* Social Links Section */}
          <div className="social-section">
            <h3 className="social-title">Find Me Online</h3>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <div className="social-icon">{link.icon}</div>
                  <div className="social-info">
                    <span className="social-label">{link.label}</span>
                    <span className="social-handle">
                      {link.url.replace(/^https?:\/\/(www\.)?/, "")}
                    </span>
                  </div>
                  <div className="social-arrow">→</div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="info-section">
            <h3 className="info-title">Quick Info</h3>
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="contact-cta">
            <p className="cta-text">
              Prefer a more direct approach? <br />
              Shoot me an email and I'll get back to you as soon as possible.
            </p>
            <a href="mailto:your.email@example.com" className="email-button">
              <span className="email-icon">✉️</span>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

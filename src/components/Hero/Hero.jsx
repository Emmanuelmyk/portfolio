// ==================== src/components/Hero/Hero.jsx ====================
import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Alex Johnson</h1>
        <p className="hero-role">Software Developer – Web & Mobile</p>
        <p className="hero-intro">
          Crafting beautiful, responsive applications with modern technologies.
          Passionate about clean code and exceptional user experiences.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Let's Work Together
        </button>
      </div>
    </section>
  );
};

export default Hero;

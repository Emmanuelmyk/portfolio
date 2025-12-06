// ==================== src/components/Navbar/Navbar.jsx ====================
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li>
            <a className="nav-link" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

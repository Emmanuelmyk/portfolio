// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        <div className="container nav-content">
          <div className="logo">Portfolio</div>

          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="hamburger" />
          </button>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
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
              <a
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
    </>
  );
};

export default Navbar;

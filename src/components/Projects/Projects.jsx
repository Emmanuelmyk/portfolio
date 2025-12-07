// src/components/Projects/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  const projects = [
    {
      type: "Web",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with React and Firebase.",
    },
    {
      type: "Mobile",
      title: "Fitness Tracker App",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition. Features real-time data sync, social sharing, and personalized workout plans. Built with Flutter.",
    },
    {
      type: "Web",
      title: "Project Management Tool",
      description:
        "Collaborative project management platform with task tracking, team communication, and analytics. Real-time updates powered by Supabase.",
    },
    {
      type: "Mobile",
      title: "Travel Companion",
      description:
        "Mobile app for discovering and planning trips with AI-powered recommendations, offline maps, and budget tracking. Built with Flutter and Firebase.",
    },
    {
      type: "Web",
      title: "Real-Time Chat Platform",
      description:
        "Modern messaging platform with video calls, file sharing, and end-to-end encryption. Features group chats and custom emoji support.",
    },
    {
      type: "Mobile",
      title: "Language Learning App",
      description:
        "Interactive language learning app with gamification, speech recognition, and personalized learning paths. Supports 20+ languages.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-card ${index % 2 === 1 ? "reverse" : ""} ${
                visibleProjects.includes(index) ? "visible" : ""
              }`}
            >
              <div className="project-image">
                <video
                  src="/assets/site record.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-button">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

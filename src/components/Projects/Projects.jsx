// src/components/Projects/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);
  const videoRefs = useRef([]);

  const projects = [
    {
      type: "Web",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with React and Firebase.",
      video: "/assets/site record.mp4",
    },
    {
      type: "Mobile",
      title: "Fitness Tracker App",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition. Features real-time data sync, social sharing, and personalized workout plans. Built with Flutter.",
      video: "/assets/mobile.mp4",
    },
    {
      type: "Web",
      title: "Project Management Tool",
      description:
        "Collaborative project management platform with task tracking, team communication, and analytics. Real-time updates powered by Supabase.",
      video: "/assets/site record.mp4",
    },
    {
      type: "Web",
      title: "Travel Companion",
      description:
        "Mobile app for discovering and planning trips with AI-powered recommendations, offline maps, and budget tracking. Built with Flutter and Firebase.",
      video: "/assets/edofindvd.mp4",
    },
    {
      type: "Web",
      title: "Real-Time Chat Platform",
      description:
        "Modern messaging platform with video calls, file sharing, and end-to-end encryption. Features group chats and custom emoji support.",
      video: "/assets/site record.mp4",
    },
    {
      type: "Web",
      title: "Language Learning App",
      description:
        "Interactive language learning app with gamification, speech recognition, and personalized learning paths. Supports 20+ languages.",
      video: "/assets/edofindvd.mp4",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              if (!visibleProjects.includes(index)) {
                setVisibleProjects((prev) => [...prev, index]);
              }
              if (videoRefs.current[index]) {
                videoRefs.current[index].play().catch((err) => {
                  console.log("Video play failed:", err);
                });
              }
            } else {
              if (videoRefs.current[index]) {
                videoRefs.current[index].pause();
              }
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
              <div
                className={`project-image ${
                  project.type === "Mobile" ? "mobile-video" : ""
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  crossOrigin="anonymous"
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

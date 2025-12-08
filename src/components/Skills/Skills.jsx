// src/components/Skills/Skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Flutter", logo: "/logos/flutter.png" },
    { name: "React", logo: "/logos/react.png" },
    { name: "JavaScript", logo: "/logos/js.png" },
    { name: "Firebase", logo: "/logos/firebase.jpeg" },
    { name: "Supabase", logo: "/logos/supabase.png" },
    { name: "Node.js", logo: "/logos/nodejs.jpeg" },
    { name: "MongoDB", logo: "/logos/mongodb.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "Dart", logo: "/logos/dart.jpeg" },
    { name: "Git", logo: "/logos/git.png" },
    { name: "Github", logo: "/logos/github.png" },
    { name: "Wordpress", logo: "/logos/wordpress.png" },
    { name: "HTML", logo: "/logos/html.jpeg" },
    { name: "Git", logo: "/logos/git.png" },
  ];

  const doubledSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <div className="skillscontainer">
        <div className="skills-slider">
          <div className="skills-track">
            {doubledSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <img src={skill.logo} alt={skill.name} loading="lazy" />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

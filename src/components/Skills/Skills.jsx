// ==================== src/components/Skills/Skills.jsx ====================
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Flutter", icon: "🦋" },
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "Firebase", icon: "🔥" },
    { name: "Supabase", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git", icon: "📦" },
  ];

  const doubledSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-slider">
          <div className="skills-track">
            {doubledSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">
                  {skill.icon}
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

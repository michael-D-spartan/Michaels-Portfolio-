import { useState } from 'react';

const Skills = () => {
  const [skills] = useState([
    { id: 1, name: "HTML5" },
    { id: 2, name: "CSS3" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React JS 19" },
    { id: 5, name: "Responsive Design" },
    { id: 6, name: "Git & VS Code" }
  ]);

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.id}>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

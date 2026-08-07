import { useState } from 'react';

const Experience = () => {
  const [experiences] = useState([
    { id: 1, role: "Online English & Mathematics Tutor", company: "Eduzone | Present", description: "Delivered tailored English and Mathematics lessons and tracked student progress through regular assessments." }
  ]);

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title"></h2>
      <div className="experience-container">
        {experiences.map(exp => (
          <div className="experience-card" key={exp.id}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

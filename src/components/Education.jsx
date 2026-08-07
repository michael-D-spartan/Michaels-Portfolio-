import { useState } from 'react';

const Education = () => {
  const [educationList] = useState([
    { id: 1, degree: "Electronic and Computer Engineering", institution: "Nnamdi Azikiwe University — Awka, Anambra State", status: "" }
  ]);

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationList.map(edu => (
          <div className="education-card" key={edu.id}>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="status">{edu.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

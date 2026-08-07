import { useState } from 'react';

const Certifications = () => {
  const [certifications] = useState([
    { id: 1, name: "React JS 19 — Modern Frontend Development", institution: "Flip To Tech", date: "Actively evolving frontend skills into React JS 19" },
    { id: 2, name: "Diploma in Frontend Web Development", institution: "Flip To Tech/ FEBMEX Computer Academy", date: "March 2023" },
    { id: 3, name: "Diploma in Graphics Design", institution: "FEBMEX COMPUTER ACADEMY", date: "August 2022" }
  ]);

  return (
    <section className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map(cert => (
          <div className="cert-card" key={cert.id}>
            <h3>{cert.name}</h3>
            <p className="institution">{cert.institution}</p>
            <p className="date">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

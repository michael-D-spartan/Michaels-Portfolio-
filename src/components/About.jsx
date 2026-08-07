import profilePhoto from '../assets/hero.png'; 
const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-image"><img src={profilePhoto} alt="" /></div>
        <div className="about-text">
          <h3>Chinedu-Uzor Ebubechukwu Michael</h3>
          <p>Electronic & Computer Engineering student with a Diploma in Frontend Web Development and hands-on experience building web projects. Seeking a remote web development internship for SIWES/industrial training to contribute to real projects using HTML, CSS, JavaScript, and modern frameworks.</p>
          <p>Currently evolving my skill set into React JS 19 — the latest in modern frontend development — with a certification actively in progress. Eager to bring strong problem-solving and quick learning to a dynamic dev team.</p>
      <p><strong>Location:</strong> Buckor, Lagos State, Nigeria</p>
      <p><strong>DOB:</strong> 5th Oct 2005</p>
      <p><strong>Availability:</strong> Full-time industrial training (SIWES) starting April 2026</p>
    </div>
  </div>
    </section>
  );
};

export default About;

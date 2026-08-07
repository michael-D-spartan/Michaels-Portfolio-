import { FaEnvelope, FaPhone, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title" style={{ color: "white" }}></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Work Together!</h3>
          <p style={{ fontSize: "18px", opacity: 0.9, lineHeight: 1.8 }}>I'm currently available for Physical and remote web development opportunities.<br/>
        Feel free to reach out!</p>
          <div className="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&to=jm76548932@gmail.com" className="contact-link"><FaEnvelope /> </a>
            <a href="tel:09013230863" class="contact-link" className="contact-link"><FaPhone /> </a>
            <a href="https://github.com/michael-D-spartan" target="_blank" rel="noopener noreferrer" className="contact-link"><FaGithub /> </a>
            <a href="https://michaels-cv-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="contact-link"><FaGlobe /> </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

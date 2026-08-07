import profilePhoto from "../assets/ProfilePhoto.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="bokeh bokeh-1"></div>
      <div className="bokeh bokeh-2"></div>
      <div className="bokeh bokeh-3"></div>

      <div className="hero-container">
        <div className="hero-left">
          <h1>Michael<span>Chinedu-Uzor</span></h1>
          <p className="hero-subtitle">Frontend Web Developer</p>
          <a href="#contact" className="cta-button">Get Connected</a>
        </div>
        
        <div className="hero-right">
          <div className="profile-image">
            <img src={profilePhoto} alt="Michael Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import '../styles.css';

function Hero() {
  return (
    <section className="hero-centered">
      <div className="hero-profile">
        <img src="/images/profile-image.jpg" alt="Luan Moreno" className="profile-img" />
      </div>
      <div className="hero-info">
        <p className="hero-role">Software Engineer</p>
        <h1 className="hero-name">Luan Moreno</h1>
        <p className="hero-desc">
          I am a recent Computer Engineering graduate with a strong interest in software development, networks, security, and systems administration. What drives me is the challenge of turning ideas into practical solutions that add real value and make everyday life easier.
        </p>
        <div className="hero-actions">
          <a href="/cv.pdf" download="Cv-Luan.pdf" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
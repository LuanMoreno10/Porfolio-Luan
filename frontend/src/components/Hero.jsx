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
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex ou mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
        </p>
        <div className="hero-actions">
          <a href="/cv.pdf" download="Cv-Luan.pdf" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
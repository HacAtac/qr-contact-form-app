import React from 'react';
import './AboutComponent.css';

const AboutComponent = () => (
  <div className="about-container">
    <div className="about-header">
      <h1>About Us</h1>
      <p>Discover our journey and values</p>
    </div>
    <div className="about-content">
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-notch services that exceed our clients' expectations. We are dedicated to quality, innovation, and excellence in everything we do.
        </p>
      </section>
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where businesses can achieve their full potential through our innovative and reliable solutions. Our goal is to be a trusted partner in your success.
        </p>
      </section>
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We conduct our business with the highest standards of professionalism and ethical behavior.</li>
          <li><strong>Innovation:</strong> We continuously seek new and better ways to serve our clients and improve our services.</li>
          <li><strong>Customer Focus:</strong> Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations.</li>
          <li><strong>Excellence:</strong> We strive for excellence in all aspects of our work, aiming to exceed industry standards.</li>
          <li><strong>Collaboration:</strong> We believe in the power of teamwork and collaboration to achieve the best outcomes.</li>
        </ul>
      </section>
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img id="will" src="/icons/dc66bf61-d25a-406c-8f88-96aeead26f32.webp" alt="Owner" />
            <h3>Will Hoggatt</h3>
            <p>Owner & Operator</p>
          </div>
          {/* <div className="team-member">
            <img src="/team-member-2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src="/team-member-3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Chief Technology Officer</p>
          </div> */}
        </div>
      </section>
    </div>
  </div>
);

export default AboutComponent;

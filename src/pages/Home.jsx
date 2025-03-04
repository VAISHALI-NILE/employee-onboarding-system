import React from "react";
import house from "../assets/house.jpg"; // Ensure the image path is correct
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Image Section */}
      <div className="image-section">
        <div className="image-bg-strip"></div>
        <div className="image-wrapper">
          <img
            alt="House Illustration"
            className="responsive-image"
            src={house}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1>A Few Words About Me</h1>
        <p className="subheading">Architecture driven by innovations –</p>
        <p className="description">
          I'm a licensed architect and interior designer located in New York and working all over the USA.
        </p>
        <ul className="skills-list">
          <li><span>✔</span> Architecture</li>
          <li><span>✔</span> Interior Design</li>
          <li><span>✔</span> Building Design</li>
          <li><span>✔</span> 3D Rendering</li>
          <li><span>✔</span> Supervision</li>
        </ul>
        <p className="description">
          I specialize as a design and full-service architect for new residences, home additions, and commercial buildings.
        </p>
        <div className="buttons">
          <button className="portfolio-btn">Portfolio</button>
          <button className="cv-btn">Download CV</button>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h2 className="timeline-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>Senior Architect</h3>
              <p>Leading architectural projects and overseeing design execution.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020 - 2023</div>
            <div className="timeline-content">
              <h3>Interior Designer</h3>
              <p>Designed and executed luxury home interiors across the USA.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2017 - 2020</div>
            <div className="timeline-content">
              <h3>Junior Architect</h3>
              <p>Worked on residential projects and developed 3D renderings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

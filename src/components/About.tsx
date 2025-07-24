import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section py-5 bg-light text-center">
      <div className="container">

        {/* Section Heading */}
        <h2 className="about-heading mx-auto">ABOUT ME</h2>
        <p className="text-muted w-75 mx-auto mt-3">
          I'm a software developer passionate about crafting modern web applications. I value clean code, simple interfaces, and solving meaningful problems.
        </p>

        {/* Explore Divider */}
        <div className="explore-divider my-4">
          <span className="text-uppercase text-muted small">Explore</span>
          <div className="divider-line mt-2"></div>
        </div>

        {/* Feature Grid */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-vector-pen fs-1 mb-3 text-primary"></i>
              <h5 className="fw-bold">Design</h5>
              <p className="text-muted">
                I design responsive and intuitive user interfaces using Tailwind CSS and React ensuring clean and modern UI across devices.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-code-slash fs-1 mb-3 text-success"></i>
              <h5 className="fw-bold">Development</h5>
              <p className="text-muted">
                I build full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js), with strong foundations in JavaScript, MySQL, and TypeScript.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-tools fs-1 mb-3 text-danger"></i>
              <h5 className="fw-bold">Maintenance</h5>
              <p className="text-muted">
                I ensure your site stays secure, fast, and reliable through Git-based version control, clean coding practices, and efficient post-launch support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

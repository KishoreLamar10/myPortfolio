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
                I engineer high-performance, responsive user interfaces by translating Figma designs into pixel-perfect, component-based applications. Leveraging React, Tailwind CSS, and modern state management tools like Redux Toolkit, I build scalable front-end systems with a mobile-first philosophy. My development process emphasizes performance optimization through code-splitting and lazy loading, and I validate quality and accessibility using tools like Lighthouse, Jest, and React Testing Library
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-code-slash fs-1 mb-3 text-success"></i>
              <h5 className="fw-bold">Development</h5>
              <p className="text-muted">
                I am a proficient full-stack developer specializing in building, testing, and deploying robust web applications using the MERN stack. I excel at creating dynamic, responsive user interfaces with React and managing complex application state with Redux. On the back end, I architect and implement secure RESTful and GraphQL APIs using Node.js and Express, ensuring seamless data flow. My expertise includes both NoSQL (MongoDB) and SQL (MySQL, PostgreSQL) database design and management. I am committed to writing clean, maintainable code with TypeScript and leveraging modern DevOps practices like Docker and CI/CD for efficient development cycles.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-tools fs-1 mb-3 text-danger"></i>
              <h5 className="fw-bold">Maintenance</h5>
              <p className="text-muted">
                I maintain high-performance, secure, and reliable web applications by implementing robust development practices. This includes leveraging Git-based CI/CD pipelines for safe and automated deployments, writing clean and maintainable code to simplify updates, and providing proactive post-launch support that covers security audits, performance tuning, and bug resolution
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

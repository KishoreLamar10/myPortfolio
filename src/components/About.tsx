import "./About.css";

function About() {
  return (
    <section id="about" className="about-section py-5 bg-light text-center">
      <div className="container">
        {/* Section Heading */}
        <h2 className="about-heading mx-auto">ABOUT ME</h2>
        <p className="about-description mx-auto mt-3">
          Software Engineer with 2+ years of experience building scalable
          React/Node.js applications, backend services, and data‑driven systems.
          I deliver measurable impact through performance tuning, automation,
          and reliable API design.
        </p>

        {/* Explore Divider */}
        <div className="explore-divider my-4">
          <span className="text-uppercase text-muted small">EXPLORE</span>
          <div className="divider-line mt-2"></div>
        </div>

        {/* Feature Grid */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-vector-pen fs-1 mb-3 text-primary"></i>
              <h5 className="fw-bold text-uppercase">Frontend Engineering</h5>
              <p className="text-muted about-feature-text">
                I build React and Next.js interfaces with strong UX, reusable
                components, and performance‑first delivery. I’ve shipped dynamic
                dashboards and responsive flows that reduce support load and
                improve maintainability.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-code-slash fs-1 mb-3 text-success"></i>
              <h5 className="fw-bold text-uppercase">Backend & Data</h5>
              <p className="text-muted about-feature-text">
                I design REST APIs with JWT auth, tune SQL queries, and model
                data for analytics at scale. I’ve improved query latency and
                maintained high availability across global business units.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <i className="bi bi-tools fs-1 mb-3 text-danger"></i>
              <h5 className="fw-bold text-uppercase">DevOps & GenAI</h5>
              <p className="text-muted about-feature-text">
                I automate CI/CD with GitHub Actions and Docker, and build GenAI
                workflows using LangChain, FAISS, and OpenAI APIs. I focus on
                fast, reliable releases and production‑ready AI tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

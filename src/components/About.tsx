import { motion } from "framer-motion";
import "./About.css";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="about-section py-5 text-center">
      <div className="container">
        {/* Section Heading */}
        <motion.h2 
          className="about-heading mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.h2>
        
        <motion.p 
          className="about-description mx-auto mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Software Engineer specializing in scalable full‑stack and AI systems. Currently a Research Assistant at the 
          <strong> University at Buffalo</strong>, where I build agentic workflows, MCP tool servers, and 
          distributed infrastructures. I focus on delivering measurable impact through performance tuning 
          and production‑grade AI integration.
        </motion.p>

        {/* Explore Divider */}
        <div className="explore-divider my-4">
          <span className="text-uppercase text-muted small">EXPLORE</span>
          <div className="divider-line mt-2"></div>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="row mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="col-md-4" 
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-feature">
              <i className="bi bi-robot fs-1 mb-3 text-primary"></i>
              <h5 className="fw-bold text-uppercase">Agentic AI & RAG</h5>
              <p className="text-muted about-feature-text">
                I engineer multi‑agent systems using LangGraph and MCP tool orchestration. 
                My focus is on iterative retrieval, specialized tool sets, and reducing 
                hallucinations in large‑scale academic and technical collections.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-4" 
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-feature">
              <i className="bi bi-layers fs-1 mb-3 text-success"></i>
              <h5 className="fw-bold text-uppercase">Full-Stack & Distributed</h5>
              <p className="text-muted about-feature-text">
                I build high‑performance backends with FastAPI and Spring Boot, integrated 
                with modern React/Next.js frontends. I optimize for low‑latency retrieval 
                and scalable state management across microservices.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-4" 
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-feature">
              <i className="bi bi-cloud-check fs-1 mb-3 text-danger"></i>
              <h5 className="fw-bold text-uppercase">Cloud & DevOps</h5>
              <p className="text-muted about-feature-text">
                I automate reliability through CI/CD pipelines, containerization with Docker, 
                and orchestration via Kubernetes. I leverage AWS and GCP services to 
                deploy zero‑downtime, globally scalable applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

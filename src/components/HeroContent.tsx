import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./HeroContent.css";

const stats = [
  { value: "+3", label: "YEARS OF\nEXPERIENCE" },
  { value: "+8", label: "PROJECTS\nCOMPLETED" },
  { value: "+2", label: "COMPANIES\nWORKED" },
];

function HeroContent() {
  return (
    <div className="hero-content" id="hero">
      {/* Dual-layer title */}
      <div className="hero-title-block">
        <motion.div
          className="dual-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <span className="dual-front">SOFTWARE</span>
          <span className="dual-ghost">SOFTWARE</span>
        </motion.div>
        <motion.div
          className="dual-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32 }}
        >
          <span className="dual-recede">ENGINEER</span>
        </motion.div>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Building intelligent full-stack products and agentic AI systems
          that solve real-world problems at scale.
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Specialty cards */}
      <motion.div
        className="specialty-cards"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.72 }}
      >
        <motion.a
          href="#portfolio"
          className="specialty-card red"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <span className="sc-icon">⚡</span>
          <p className="sc-text">FULL-STACK DEVELOPMENT,{"\n"}AGENTIC AI SYSTEMS</p>
          <div className="sc-arrow"><FaArrowRight /></div>
        </motion.a>
        <motion.a
          href="#skills"
          className="specialty-card cyan"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <span className="sc-icon">🛠</span>
          <p className="sc-text">REACT, PYTHON, NODE.JS,{"\n"}LANGCHAIN, REST API</p>
          <div className="sc-arrow"><FaArrowRight /></div>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HeroContent;

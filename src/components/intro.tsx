import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from "react-icons/fa";
import "./intro.css";

function HeroCard() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, -110]);

  return (
    <motion.div
      className="hero-card"
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="hero-photo-wrapper">
        <img src="/IMG_0148.JPEG" alt="Kishorekumar" className="hero-photo" />
      </div>
      <h1 className="hero-name">KISHOREKUMAR</h1>
      <div className="hero-divider" />
      <p className="hero-bio">
        Full-Stack & AI Engineer.<br />Building intelligent systems that scale.
      </p>
      <div className="hero-socials">
        <a href="https://github.com/KishoreLamar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kishorekumaravudai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="mailto:balakishore619@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <a
        href="/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="hero-resume-btn"
      >
        <FaDownload /> Resume
      </a>
    </motion.div>
  );
}

export default HeroCard;

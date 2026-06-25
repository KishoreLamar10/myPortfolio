import './Footer.css';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">Kishorekumar</span>
            <span className="footer-tagline">Full-Stack & AI Engineer · Open to opportunities</span>
          </div>
          <a href="#hero" className="footer-top-btn" aria-label="Back to top">
            <FaArrowUp />
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-text">© 2026 Kishorekumar Avudai Nayagam. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/kishorekumaravudai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com/KishoreLamar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:balakishore619@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

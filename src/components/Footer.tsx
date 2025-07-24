import './Footer.css';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section text-center py-4">
      <a href="#top" className="back-to-top">↑ Back to Top</a>

      <div className="footer-icons mt-3">
        <a href="https://www.linkedin.com/in/kishorekumaravudai/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://github.com/KishoreLamar10" target="_blank" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:balakishore619@gmail.com" target="_blank" aria-label="Email"><FaEnvelope /></a>
      </div>

      <p className="footer-text mt-3">©2025 Kishorekumar All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

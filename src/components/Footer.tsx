import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section text-center py-4">
      <a href="#top" className="back-to-top">↑ Back to Top</a>

      <div className="footer-icons mt-3">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/kishorekumaravudai/" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://github.com/KishoreLamar10" aria-label="GitHub"><FaGithub /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="mailto:balakishore619@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>

      <p className="footer-text mt-3">©2025 Kishorekumar All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

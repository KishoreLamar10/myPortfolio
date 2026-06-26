import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './contactMe.css';

function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading-block">
        <motion.div
          className="dual-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dual-front">LET'S WORK</span>
          <span className="dual-ghost">LET'S WORK</span>
        </motion.div>
        <motion.div
          className="dual-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="dual-front">TOGETHER</span>
          <span className="dual-ghost contact-ghost-muted">TOGETHER</span>
        </motion.div>
      </div>

      <motion.p
        className="contact-tagline"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Open to full-time roles, research collaborations, and freelance projects.
      </motion.p>

      <motion.div
        className="contact-cta-row"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="mailto:balakishore619@gmail.com" className="contact-email-btn">
          <FaEnvelope /> Say Hello
        </a>

        <div className="contact-socials">
          <a href="https://github.com/KishoreLamar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kishorekumaravudai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactMe;

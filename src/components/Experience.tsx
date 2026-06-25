import { motion } from "framer-motion";
import { KNOWLEDGE_BASE } from "../data/knowledge";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading-block">
        <motion.h2
          className="section-front"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          EXPERIENCE
        </motion.h2>
        <h2 className="section-ghost" aria-hidden>EXPERIENCE</h2>
      </div>

      <div className="experience-list">
        {KNOWLEDGE_BASE.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-row"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="experience-info">
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-title">{exp.title}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <span className="experience-period">{exp.period} · {exp.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

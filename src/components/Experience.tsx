import { motion } from "framer-motion";
import { KNOWLEDGE_BASE } from "../data/knowledge";
import "./Experience.css";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="experience-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.h2>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {KNOWLEDGE_BASE.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.period}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-company">{exp.company} • {exp.location}</span>
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

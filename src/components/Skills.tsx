import { motion } from "framer-motion";
import "./Skills.css";

import {
  FaAws,
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaLink,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSearch,
  FaTerminal,
} from "react-icons/fa";
import {
  SiApachespark,
  SiApachehadoop,
  SiDjango,
  SiExpress,
  SiJest,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiScala,
  SiScikitlearn,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="skills-section text-center py-5">
      <motion.h2 
        className="skills-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h2>

      {/* LANGUAGES */}
      <motion.div 
        className="skills-group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h5 className="skills-category">LANGUAGES:</h5>
        <div className="skills-icons">
          {[
            { icon: <FaCode className="icon" />, name: "C / C++" },
            { icon: <FaPython className="icon python" />, name: "Python" },
            { icon: <SiTypescript className="icon ts" />, name: "TypeScript" },
            { icon: <FaJs className="icon js" />, name: "JavaScript" },
            { icon: <FaJava className="icon java" />, name: "Java" },
            { icon: <SiScala className="icon" />, name: "Scala" }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              variants={itemVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* WEB FRAMEWORKS */}
      <motion.div 
        className="skills-group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h5 className="skills-category">WEB FRAMEWORKS:</h5>
        <div className="skills-icons">
          {[
            { icon: <FaReact className="icon react" />, name: "React.js" },
            { icon: <SiNextdotjs className="icon" />, name: "Next.js" },
            { icon: <FaNodeJs className="icon node" />, name: "Node.js" },
            { icon: <SiExpress className="icon express" />, name: "Express" },
            { icon: <SiDjango className="icon django" />, name: "Django" },
            { icon: <SiTailwindcss className="icon tailwind" />, name: "Tailwind CSS" }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              variants={itemVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CLOUD & DEVOPS */}
      <motion.div 
        className="skills-group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h5 className="skills-category">CLOUD & DEVOPS:</h5>
        <div className="skills-icons">
          {[
            { icon: <FaAws className="icon" />, name: "AWS (EC2, S3)" },
            { icon: <FaCloud className="icon" />, name: "Azure" },
            { icon: <FaDocker className="icon docker" />, name: "Docker" },
            { icon: <SiKubernetes className="icon" />, name: "Kubernetes" },
            { icon: <SiTerraform className="icon" />, name: "Terraform" },
            { icon: <FaGitAlt className="icon git" />, name: "GitHub Actions" }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              variants={itemVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* DATA / ML */}
      <motion.div 
        className="skills-group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h5 className="skills-category">DATA / ML:</h5>
        <div className="skills-icons">
          {[
            { icon: <SiPostgresql className="icon postgres" />, name: "PostgreSQL" },
            { icon: <SiMysql className="icon" />, name: "MySQL" },
            { icon: <SiMongodb className="icon mongo" />, name: "MongoDB" },
            { icon: <SiApachehadoop className="icon" />, name: "Hadoop" },
            { icon: <SiApachespark className="icon" />, name: "Spark" },
            { icon: <SiPandas className="icon" />, name: "Pandas" },
            { icon: <SiScikitlearn className="icon" />, name: "Scikit‑learn" }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              variants={itemVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GENAI / LLM */}
      <motion.div 
        className="skills-group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h5 className="skills-category">GENAI / LLM:</h5>
        <div className="skills-icons">
          {[
            { icon: <SiOpenai className="icon openai" />, name: "OpenAI API" },
            { icon: <FaBrain className="icon" />, name: "LLMs" },
            { icon: <FaLink className="icon" />, name: "LangChain" },
            { icon: <FaDatabase className="icon db" />, name: "FAISS" },
            { icon: <FaSearch className="icon" />, name: "RAG" },
            { icon: <FaTerminal className="icon" />, name: "Prompt Engineering" }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              variants={itemVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TOOLS & TESTING */}
      <motion.div 
        className="skills-group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h5 className="skills-category">TOOLS & TESTING:</h5>
        <div className="skills-icons">
          {[
            { icon: <FaGitAlt className="icon git" />, name: "Git" },
            { icon: <SiJest className="icon" />, name: "Jest" },
            { icon: <SiPostman className="icon" />, name: "Postman" },
            { icon: <SiJira className="icon" />, name: "JIRA" }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              variants={itemVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;

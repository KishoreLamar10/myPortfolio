import { motion } from "framer-motion";
import "./Skills.css";

const tools = [
  { icon: "/icons/python.svg",              name: "Python",       desc: "AI/ML & backend" },
  { icon: "/icons/react.svg",               name: "React",        desc: "Full-stack web development" },
  { icon: "/icons/typescript-official.svg", name: "TypeScript",   desc: "Type-safe development" },
  { icon: "/icons/node-js.svg",             name: "Node.js",      desc: "Server-side runtime" },
  { icon: "/icons/rest-api.svg",            name: "REST API",     desc: "API design & integration" },
  { icon: "/icons/aws.svg",                 name: "AWS / GCP",    desc: "Cloud infrastructure" },
  { icon: "/icons/langchain.svg",           name: "LangChain",    desc: "LLM orchestration & RAG" },
  { icon: "/icons/agentic-ai.svg",          name: "Agentic AI",   desc: "OpenAI, Claude & pipelines" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading-block">
        <motion.h2
          className="section-front"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          TOOLS
        </motion.h2>
        <h2 className="section-ghost" aria-hidden>TOOLS</h2>
      </div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="tool-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <div className="tool-icon-badge">
              <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
            </div>
            <div className="tool-info">
              <span className="tool-name">{tool.name}</span>
              <span className="tool-desc">{tool.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

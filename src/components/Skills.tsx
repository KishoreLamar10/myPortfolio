import "./Skills.css";

import {
  FaAws,
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRobot,
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
  return (
    <section id="skills" className="skills-section text-center py-5">
      <h2 className="skills-heading">SKILLS</h2>

      {/* LANGUAGES */}
      <div className="skills-group">
        <h5 className="skills-category">LANGUAGES:</h5>
        <div className="skills-icons">
          <div className="skill-item">
            <FaCode className="icon" />
            <span>C / C++</span>
          </div>
          <div className="skill-item">
            <FaPython className="icon python" />
            <span>Python</span>
          </div>
          <div className="skill-item">
            <SiTypescript className="icon ts" />
            <span>TypeScript</span>
          </div>
          <div className="skill-item">
            <FaJs className="icon js" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaJava className="icon java" />
            <span>Java</span>
          </div>
          <div className="skill-item">
            <SiScala className="icon" />
            <span>Scala</span>
          </div>
        </div>
      </div>

      {/* WEB FRAMEWORKS */}
      <div className="skills-group">
        <h5 className="skills-category">WEB FRAMEWORKS:</h5>
        <div className="skills-icons">
          <div className="skill-item">
            <FaReact className="icon react" />
            <span>React.js</span>
          </div>
          <div className="skill-item">
            <SiNextdotjs className="icon" />
            <span>Next.js</span>
          </div>
          <div className="skill-item">
            <FaNodeJs className="icon node" />
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <SiExpress className="icon express" />
            <span>Express</span>
          </div>
          <div className="skill-item">
            <SiDjango className="icon django" />
            <span>Django</span>
          </div>
          <div className="skill-item">
            <SiTailwindcss className="icon tailwind" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* CLOUD & DEVOPS */}
      <div className="skills-group">
        <h5 className="skills-category">CLOUD & DEVOPS:</h5>
        <div className="skills-icons">
          <div className="skill-item">
            <FaAws className="icon" />
            <span>AWS (EC2, S3)</span>
          </div>
          <div className="skill-item">
            <FaCloud className="icon" />
            <span>Azure</span>
          </div>
          <div className="skill-item">
            <FaDocker className="icon docker" />
            <span>Docker</span>
          </div>
          <div className="skill-item">
            <SiKubernetes className="icon" />
            <span>Kubernetes</span>
          </div>
          <div className="skill-item">
            <SiTerraform className="icon" />
            <span>Terraform</span>
          </div>
          <div className="skill-item">
            <FaGitAlt className="icon git" />
            <span>GitHub Actions</span>
          </div>
        </div>
      </div>

      {/* DATA / ML */}
      <div className="skills-group">
        <h5 className="skills-category">DATA / ML:</h5>
        <div className="skills-icons">
          <div className="skill-item">
            <FaDatabase className="icon db" />
            <span>SQL (PostgreSQL/MySQL)</span>
          </div>
          <div className="skill-item">
            <SiPostgresql className="icon postgres" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill-item">
            <SiMysql className="icon" />
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <SiMongodb className="icon mongo" />
            <span>MongoDB</span>
          </div>
          <div className="skill-item">
            <SiApachehadoop className="icon" />
            <span>Hadoop</span>
          </div>
          <div className="skill-item">
            <SiApachespark className="icon" />
            <span>Spark</span>
          </div>
          <div className="skill-item">
            <SiPandas className="icon" />
            <span>Pandas</span>
          </div>
          <div className="skill-item">
            <SiScikitlearn className="icon" />
            <span>Scikit‑learn</span>
          </div>
        </div>
      </div>

      {/* GENAI / LLM */}
      <div className="skills-group">
        <h5 className="skills-category">GENAI / LLM:</h5>
        <div className="skills-icons">
          <div className="skill-item">
            <SiOpenai className="icon openai" />
            <span>OpenAI API</span>
          </div>
          <div className="skill-item">
            <FaRobot className="icon" />
            <span>LLMs</span>
          </div>
          <div className="skill-item">
            <FaRobot className="icon" />
            <span>LangChain</span>
          </div>
          <div className="skill-item">
            <FaRobot className="icon" />
            <span>FAISS</span>
          </div>
          <div className="skill-item">
            <FaRobot className="icon" />
            <span>RAG</span>
          </div>
          <div className="skill-item">
            <FaRobot className="icon" />
            <span>Prompt Engineering</span>
          </div>
        </div>
      </div>

      {/* TOOLS & TESTING */}
      <div className="skills-group">
        <h5 className="skills-category">TOOLS & TESTING:</h5>
        <div className="skills-icons">
          <div className="skill-item">
            <FaGitAlt className="icon git" />
            <span>Git</span>
          </div>
          <div className="skill-item">
            <SiJest className="icon" />
            <span>Jest</span>
          </div>
          <div className="skill-item">
            <SiPostman className="icon" />
            <span>Postman</span>
          </div>
          <div className="skill-item">
            <SiJira className="icon" />
            <span>JIRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';
import './Skills.css';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaPython, FaJava
} from 'react-icons/fa';
import {
  SiMongodb, SiTypescript, SiTailwindcss, SiOpenai, SiExpress
} from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="skills-section text-center py-5">
      <h2 className="skills-heading">SKILLS</h2>

      {/* USING NOW */}
      <div className="skills-group">
        <h5 className="skills-category">USING NOW:</h5>
        <div className="skills-icons">
          <div className="skill-item"><FaHtml5 className="icon html" /><span>HTML5</span></div>
          <div className="skill-item"><FaCss3Alt className="icon css" /><span>CSS3</span></div>
          <div className="skill-item"><FaJs className="icon js" /><span>JavaScript</span></div>
          <div className="skill-item"><FaReact className="icon react" /><span>React</span></div>
          <div className="skill-item"><FaNodeJs className="icon node" /><span>Node.js</span></div>
          <div className="skill-item"><SiExpress className="icon express" /><span>Express.js</span></div>
          <div className="skill-item"><FaDatabase className="icon db" /><span>MySQL</span></div>
          <div className="skill-item"><SiMongodb className="icon mongo" /><span>MongoDB</span></div>
        </div>
      </div>

      {/* LEARNING */}
      <div className="skills-group">
        <h5 className="skills-category">LEARNING:</h5>
        <div className="skills-icons">
          <div className="skill-item"><SiTypescript className="icon ts" /><span>TypeScript</span></div>
          <div className="skill-item"><SiTailwindcss className="icon tailwind" /><span>Tailwind CSS</span></div>
          <div className="skill-item"><SiOpenai className="icon openai" /><span>OpenAI API</span></div>
        </div>
      </div>

      {/* OTHER SKILLS */}
      <div className="skills-group">
        <h5 className="skills-category">OTHER SKILLS:</h5>
        <div className="skills-icons">
          <div className="skill-item"><FaGitAlt className="icon git" /><span>Git</span></div>
          <div className="skill-item"><FaPython className="icon python" /><span>Python</span></div>
          <div className="skill-item"><FaJava className="icon java" /><span>Java</span></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

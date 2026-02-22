import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

interface Project {
  id: number;
  title: string;
  img: string;
  link: string;
  github?: string;
  tags: string[];
  description: string;
  problem: string;
  solution: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          className="modal-overlay" 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="modal-content-wrapper" 
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <FaTimes />
            </button>
            
            <img src={project.img} alt={project.title} className="modal-header-img" />
            
            <div className="modal-body">
              <div className="modal-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>
              
              <h2 className="modal-title">{project.title}</h2>
              
              <div className="modal-top-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link primary">
                  <FaExternalLinkAlt /> Visit Live Site
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link secondary">
                    <FaGithub /> GitHub Repo
                  </a>
                )}
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">Overview</h4>
                <p>{project.description}</p>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">The Problem</h4>
                <p>{project.problem}</p>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">The Solution</h4>
                <p>{project.solution}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

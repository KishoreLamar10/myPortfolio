import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

interface Project {
  id: number;
  title: string;
  img: string;
  link?: string;
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
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal-panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            {/* Left — image */}
            <div className="modal-img-col">
              <img src={project.img} alt={project.title} className="modal-img" />
              <div className="modal-img-overlay" />
            </div>

            {/* Right — content */}
            <div className="modal-content-col">
              <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                <FaTimes />
              </button>

              <div className="modal-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>

              <h2 className="modal-title">{project.title}</h2>
              <div className="modal-divider" />

              <div className="modal-sections">
                <div className="modal-section">
                  <span className="modal-section-label">Overview</span>
                  <p className="modal-section-text">{project.description}</p>
                </div>
                <div className="modal-section">
                  <span className="modal-section-label">The Problem</span>
                  <p className="modal-section-text">{project.problem}</p>
                </div>
                <div className="modal-section">
                  <span className="modal-section-label">The Solution</span>
                  <p className="modal-section-text">{project.solution}</p>
                </div>
              </div>

              <div className="modal-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link primary">
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`modal-link ${project.link ? 'secondary' : 'primary'}`}>
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

import { motion } from 'framer-motion';
import './intro.css';

function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  } as const;

  return (
    <section id="intro" className="intro-section d-flex">
      {/* Left: Text */}
      <motion.div 
        className="intro-left d-flex flex-column justify-content-center px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h5 variants={itemVariants} className="text-uppercase text-muted">Hi, I am</motion.h5>
        <motion.h1 variants={itemVariants} className="fw-bold display-4">KISHOREKUMAR</motion.h1>
        <motion.p variants={itemVariants} className="lead text-secondary">Software Developer</motion.p>

        <motion.div variants={itemVariants} className="d-flex gap-3 mt-4">
            <a href="https://github.com/KishoreLamar10" target="_blank" rel="noopener noreferrer"><i className="bi bi-github fs-4 text-light"></i></a>
            <a href="https://www.linkedin.com/in/kishorekumaravudai/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin fs-4 text-primary"></i></a>
            <a href="mailto:balakishore619@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope fs-4 text-danger"></i></a>
        </motion.div>

      </motion.div>

      {/* Right: Image */}
      <motion.div 
        className="intro-right d-flex justify-content-center align-items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" as const, delay: 0.3 }}
      >
        <motion.img 
          src="/profile_photo.jpeg" 
          alt="Profile" 
          className="intro-img"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </motion.div>
    </section>
  );
}

export default Intro;

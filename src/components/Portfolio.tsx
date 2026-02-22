import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Portfolio.css";
import ProjectModal from "./ProjectModal";

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

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const projects: Project[] = [
    // ... same projects data ...
    {
      id: 3,
      img: "/pf1.webp",
      link: "https://mytours-87mi.onrender.com/",
      github: "https://github.com/KishoreLamar10",
      title: "My Tours",
      tags: ["SPA Architecture", "RESTful Integration", "Component Composition"],
      description: "A comprehensive travel booking platform designed for seamless user experiences.",
      problem: "Traditional travel sites often feel cluttered and slow, leading to high drop-off rates during the booking process.",
      solution: "Implemented a clean SPA architecture with optimized component composition and efficient data fetching to ensure lightning-fast transitions.",
    },
    {
      id: 1,
      img: "/pf2.webp",
      link: "https://movie-search-theta-lemon.vercel.app/",
      github: "https://github.com/KishoreLamar10",
      title: "Movie Search",
      tags: ["Client-Side Querying", "Debounced Search", "API Orchestration"],
      description: "A real-time movie exploration tool connecting users with a massive cinematic database.",
      problem: "Expensive API calls and UI lag common in search applications when users type rapidly.",
      solution: "Integrated a custom debouncing hook and client-side caching to minimize API requests and maintain a buttery-smooth interface.",
    },
    {
      id: 4,
      img: "/pf4.webp",
      link: "https://resume-matcherr.streamlit.app/",
      github: "https://github.com/KishoreLamar10",
      title: "Resume Matcher",
      tags: ["Semantic Matching", "Vector Similarity", "NLP Pipeline"],
      description: "An AI-powered tool that bridges the gap between job descriptions and potential candidates.",
      problem: "Keyword-based matching often misses qualified candidates who use different terminology than the job description.",
      solution: "Built a Python-based NLP pipeline using sentence-transformers for semantic vector similarity, hosted on Streamlit for instant feedback.",
    },
    {
      id: 5,
      img: "/pf7.webp",
      link: "https://popcornboxoffice.streamlit.app/",
      github: "https://github.com/KishoreLamar10",
      title: "Popcorn Box Office",
      tags: ["Exploratory Analytics", "ETL Workflow", "Data Visualization"],
      description: "A data-driven dashboard for analyzing box office trends and predicting movie success.",
      problem: "Raw box office data is fragmented and difficult for producers to turn into actionable insights.",
      solution: "Developed an automated ETL workflow to clean fragmented data and visualized trends using Plotly for high-impact decision making.",
    },
    {
      id: 2,
      img: "/pf3.webp",
      link: "https://jsgames-flame.vercel.app/",
      github: "https://github.com/KishoreLamar10",
      title: "JS Games",
      tags: ["Event Loop Control", "Collision Detection", "Canvas Rendering"],
      description: "A collection of high-performance arcade games built purely with vanilla JavaScript.",
      problem: "Maintaining stable 60FPS performance in complex web browsers with standard DOM manipulation.",
      solution: "Leveraged HTML5 Canvas and precise event loop control to handle physics and rendering independently of the DOM tree.",
    },
    {
      id: 6,
      img: "/genai.webp",
      link: "https://networksupportagent.vercel.app/",
      github: "https://github.com/KishoreLamar10",
      title: "Network Support Agent",
      tags: ["RAG Workflow", "LLM Orchestration", "Realtime Messaging"],
      description: "An intelligent support bot powered by retrieval-augmented generation for technical troubleshooting.",
      problem: "First-tier support agents often struggle with technical documentation depth, slowing resolution times.",
      solution: "Built a RAG-based system using LangChain and OpenAI to provide instant, document-grounded answers to complex network queries.",
    },
    {
      id: 7,
      img: "/pokedex-ball.webp",
      link: "https://my-pokedex-chi-five.vercel.app/",
      github: "https://github.com/KishoreLamar10",
      title: "Pokedex",
      tags: ["Graph Traversal", "Typed Fetching", "Client-Side Caching"],
      description: "A highly interactive, typed encyclopedia for the Pokémon world.",
      problem: "Large datasets from public APIs can be inconsistent and lack the performant filtering users expect.",
      solution: "Utilized TypeScript for strict data typing and implemented client-side graph traversal for complex evolution chain navigation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="portfolio" className="portfolio-section text-center py-5">
      <motion.h2 
        className="portfolio-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.h2>

      <motion.div 
        className="portfolio-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="portfolio-item cursor-pointer"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={project.img}
              alt={project.title ?? `Project ${project.id}`}
            />
            {project.title && (
              <div className="portfolio-overlay">
                <span className="portfolio-title">{project.title}</span>
                {project.tags && project.tags.length > 0 && (
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Portfolio;

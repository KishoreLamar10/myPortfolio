import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Portfolio.css";
import ProjectModal from "./ProjectModal";

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

const projects: Project[] = [
  {
    id: 9,
    img: "/proj-llm-server.png",
    github: "https://github.com/KishoreLamar10/llm-inference-server",
    title: "LLM Inference Server",
    tags: ["Continuous Batching", "PagedAttention", "FastAPI"],
    description: "Production-grade LLM inference server built from scratch — no vLLM, no TGI, no Ray Serve. Implements the core mechanisms that power modern serving systems.",
    problem: "Existing LLM serving frameworks abstract away the critical batching and memory management decisions that determine throughput. Understanding and controlling these mechanisms requires building from first principles.",
    solution: "Implemented Orca-style continuous batching, a PagedAttention block KV cache with O(1) LRU eviction, and a hot-swappable FCFS/SJF scheduler. Benchmarked at 20.37 req/s (SJF) vs 17.16 req/s (FCFS) — +18.7% throughput — across 200 Poisson-arrival requests. 229 tests across all layers.",
  },
  {
    id: 8,
    img: "/proj-arch-analysis.png",
    link: "https://architectural-change-analysis.vercel.app/",
    github: "https://github.com/KishoreLamar10/ArchitecturalChangeAnalysis",
    title: "Architectural Change Analysis",
    tags: ["GIS Engine", "Forensic Scoring", "FastAPI"],
    description: "AI-powered urban forensic platform for longitudinal architectural comparison.",
    problem: "Identifying decades of urban architectural transitions is manually intensive and prone to oversight.",
    solution: "Developed an AI-powered GIS platform that automates forensic scoring and features a custom 20m interval coordinate sampling algorithm.",
  },
  {
    id: 6,
    img: "/proj-network-agent.png",
    link: "https://networksupportagent.vercel.app/",
    github: "https://github.com/KishoreLamar10/networksupportagent",
    title: "Network Support Agent",
    tags: ["RAG Workflow", "LLM Orchestration", "Realtime Messaging"],
    description: "An intelligent support bot powered by retrieval-augmented generation for technical troubleshooting.",
    problem: "First-tier support agents often struggle with technical documentation depth, slowing resolution times.",
    solution: "Built a RAG-based system using LangChain and OpenAI to provide instant, document-grounded answers to complex network queries.",
  },
  {
    id: 4,
    img: "/proj-resume-matcher.png",
    link: "https://resume-matcherr.streamlit.app/",
    github: "https://github.com/KishoreLamar10/Resume-Matcher",
    title: "Resume Matcher",
    tags: ["Semantic Matching", "Vector Similarity", "NLP Pipeline"],
    description: "An AI-powered tool that bridges the gap between job descriptions and potential candidates.",
    problem: "Keyword-based matching often misses qualified candidates who use different terminology than the job description.",
    solution: "Built a Python-based NLP pipeline using sentence-transformers for semantic vector similarity, hosted on Streamlit for instant feedback.",
  },
  {
    id: 7,
    img: "/proj-pokedex.png",
    link: "https://my-pokedex-chi-five.vercel.app/",
    github: "https://github.com/KishoreLamar10/myPokedex",
    title: "Pokedex",
    tags: ["Graph Traversal", "Typed Fetching", "Client-Side Caching"],
    description: "A highly interactive, typed encyclopedia for the Pokémon world.",
    problem: "Large datasets from public APIs can be inconsistent and lack the performant filtering users expect.",
    solution: "Utilized TypeScript for strict data typing and implemented client-side graph traversal for complex evolution chain navigation.",
  },
  {
    id: 3,
    img: "/proj-my-tours.png",
    link: "https://mytours-87mi.onrender.com/",
    github: "https://github.com/KishoreLamar10/MyTours",
    title: "My Tours",
    tags: ["SPA Architecture", "RESTful Integration", "Component Composition"],
    description: "A comprehensive travel booking platform designed for seamless user experiences.",
    problem: "Traditional travel sites often feel cluttered and slow, leading to high drop-off rates during the booking process.",
    solution: "Implemented a clean SPA architecture with optimized component composition and efficient data fetching to ensure lightning-fast transitions.",
  },
  {
    id: 5,
    img: "/proj-popcorn.png",
    link: "https://popcornboxoffice.streamlit.app/",
    github: "https://github.com/KishoreLamar10/popcornboxoffice",
    title: "Popcorn Box Office",
    tags: ["Exploratory Analytics", "ETL Workflow", "Data Visualization"],
    description: "A data-driven dashboard for analyzing box office trends and predicting movie success.",
    problem: "Raw box office data is fragmented and difficult for producers to turn into actionable insights.",
    solution: "Developed an automated ETL workflow to clean fragmented data and visualized trends using Plotly for high-impact decision making.",
  },
  {
    id: 1,
    img: "/proj-movie-search.png",
    link: "https://movie-search-theta-lemon.vercel.app/",
    github: "https://github.com/KishoreLamar10/MovieSearch",
    title: "Movie Search",
    tags: ["Client-Side Querying", "Debounced Search", "API Orchestration"],
    description: "A real-time movie exploration tool connecting users with a massive cinematic database.",
    problem: "Expensive API calls and UI lag common in search applications when users type rapidly.",
    solution: "Integrated a custom debouncing hook and client-side caching to minimize API requests and maintain a buttery-smooth interface.",
  },
  {
    id: 2,
    img: "/proj-js-games.png",
    link: "https://jsgames-flame.vercel.app/",
    github: "https://github.com/KishoreLamar10/GamesJS",
    title: "JS Games",
    tags: ["Event Loop Control", "Collision Detection", "Canvas Rendering"],
    description: "A collection of high-performance arcade games built purely with vanilla JavaScript.",
    problem: "Maintaining stable 60FPS performance in complex web browsers with standard DOM manipulation.",
    solution: "Leveraged HTML5 Canvas and precise event loop control to handle physics and rendering independently of the DOM tree.",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-heading-block">
        <motion.h2
          className="section-front"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          RECENT
        </motion.h2>
        <h2 className="section-ghost" aria-hidden>RECENT</h2>
        <h2 className="section-recede">PROJECTS</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -3 }}
          >
            <img src={project.img} alt={project.title} className="project-thumb" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
            <motion.div
              className="project-arrow"
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowRight style={{ transform: "rotate(-45deg)" }} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Portfolio;

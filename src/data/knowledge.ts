
export const KNOWLEDGE_BASE = {
  name: "Kishorekumar",
  role: "Software Developer",
  experience_years: "2+",
  location: "United States (Boston, MA)",
  education: [
    {
      degree: "Master of Science in Information Systems",
      university: "Northeastern University",
      graduation: "May 2025 (Expected)"
    }
  ],
  core_strengths: [
    "Full-Stack Development (React, Next.js, Node.js)",
    "AI/ML & Generative AI (LLMs, RAG, LangChain)",
    "Cloud & DevOps (AWS, Docker, Kubernetes, CI/CD)",
    "Data Engineering (SQL, NoSQL, ETL, Spark)"
  ],
  projects: [
    {
      id: "network-agent",
      name: "Network Support Agent",
      type: "GenAI/RAG",
      description: "A specialized AI agent that handles network troubleshooting using RAG.",
      tech_stack: ["LangChain", "OpenAI", "Pinecone", "Python"],
      highlights: ["RAG Implementation", "Automated Troubleshooting", "Knowledge Retrieval"],
      problem: "Network troubleshooting documentation is often dense and hard to navigate during a crisis.",
      solution: "Built a RAG-based chatbot that indexes technical docs in a vector database (Pinecone) and provides conversational answers.",
      what_else: "It drastically reduces Mean Time to Resolution (MTTR) by surfacing relevant commands and fixes instantly."
    },
    {
      id: "resume-matcher",
      name: "Resume Matcher",
      type: "AI/NLP",
      description: "An AI tool that matches resumes with job descriptions using NLP.",
      tech_stack: ["Python", "NLTK", "Scikit-learn", "Flask"],
      highlights: ["Semantic Matching", "Resume Parsing", "Keyword Extraction"],
      problem: "Recruiters spend hours manually filtering hundreds of resumes for a single role.",
      solution: "Developed an NLP pipeline that extracts key entities and calculates semantic similarity between CVs and JD requirements.",
      what_else: "The system uses TF-IDF and Cosine Similarity to provide a match score, significantly reducing initial screening time."
    },
    {
      id: "pokedex",
      name: "Pokédex",
      type: "Web App",
      description: "A comprehensive Pokémon database with complex data fetching.",
      tech_stack: ["React", "TypeScript", "PokeAPI"],
      highlights: ["Typed Fetching", "Dynamic Routing", "Regional Form Handling"],
      problem: "Most Pokedex apps lack support for complex regional forms (Alolan, Galarian) and special varieties.",
      solution: "Engineered a recursive fetching logic that handles varieties and forms using TypeScript context for safety.",
      what_else: "It features a high-fidelity detail view with interactive stats, evolution chains, and full form support."
    },
    {
      id: "tours",
      name: "My Tours",
      type: "Frontend/SaaS",
      description: "A single-page application built with React to showcase travel packages.",
      tech_stack: ["React", "CSS3", "JavaScript"],
      highlights: ["SPA Architecture", "Responsive Design", "Performance Optimized"],
      problem: "Traditional travel sites were slow and clunky, leading to poor user retention.",
      solution: "Implemented a lightweight React SPA with client-side routing and optimized asset loading for instant transitions.",
      what_else: "It features a robust search and filter system that handles state locally for maximum snappiness."
    }
  ],
  skills: {
    languages: ["C++", "Python", "Java", "Scala", "SQL", "TypeScript", "JavaScript"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "Flask"],
    cloud_devops: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    data_ml: ["PostgreSQL", "MongoDB", "Redis", "Spark", "Pandas", "Scikit-learn"],
    gen_ai: ["OpenAI API", "Gemini API", "LangChain", "RAG", "Prompt Engineering"]
  },
  socials: {
    github: "https://github.com/KishoreLamar10",
    linkedin: "https://www.linkedin.com/in/kishorekumaravudai/",
    email: "balakishore619@gmail.com"
  },
  ai_personality: "You are the AI Chatbot for Kishorekumar. You are professional, tech-savvy, and helpful. You explain technical concepts clearly and provide deep insights into Kishore's projects. You remember the current topic of conversation to provide better follow-up answers."
};

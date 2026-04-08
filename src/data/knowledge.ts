
export const KNOWLEDGE_BASE = {
  name: "Kishorekumar",
  role: "Software Developer",
  experience_years: "2+",
  location: "United States (Buffalo, NY)",
  education: [
    {
      degree: "Master of Science in Computer Science",
      university: "University at Buffalo, SUNY",
      graduation: "Dec 2025",
      gpa: "3.3/4.0"
    }
  ],
  core_strengths: [
    "Full-Stack Development (React, Next.js, FastAPI, Node.js)",
    "Agentic AI & GenAI (LangGraph, MCP, RAG, LLMs)",
    "Cloud & DevOps (AWS, GCP, Docker, Kubernetes, CI/CD)",
    "Data Engineering (PostgreSQL, MongoDB, SQL, Spark)"
  ],
  experience: [
    {
      title: "Software Engineering Research Assistant",
      company: "University at Buffalo, SUNY",
      location: "Buffalo, NY",
      period: "Jan 2026 – Present",
      highlights: [
        "Built a full-stack GIS research platform (React, FastAPI, PostgreSQL) to catalog 500+ buildings and 15+ years of historical imagery.",
        "Engineered an agentic AI analysis pipeline with LangGraph, orchestrating coordinate sampling, facade scoring, and result persistence via MCP tool servers.",
        "Implemented a road-aligned coordinate sampling algorithm using Google Directions API, reducing assessment time by ~80%."
      ]
    },
    {
      title: "Software Engineer",
      company: "Cognizant Technology Solutions",
      location: "Chennai, India",
      period: "Jan 2022 – May 2024",
      highlights: [
        "Modernized a legacy monitoring platform to React.js, reducing customer support tickets by over 80%.",
        "Designed Node backend services with PostgreSQL/MongoDB, reducing retrieval latency by 30%.",
        "Automated CI/CD pipelines with GitHub Actions and Docker, shortening release cycles by ~40%."
      ]
    }
  ],
  projects: [
    {
      id: "agentic-rag",
      name: "Agentic RAG Knowledge Platform",
      type: "Agentic Systems",
      description: "An LLM-powered knowledge assistant for digital libraries with semantic chunking and multi-agent reasoning.",
      tech_stack: ["LangChain", "LangGraph", "FastAPI", "Pinecone", "AWS S3"],
      highlights: ["Multi-Agent Reasoning", "Hybrid Search", "MCP Tool Orchestration"],
      problem: "Traditional search in academic collections fails to handle complex, multi-document semantic queries.",
      solution: "Engineered an agentic retrieval pipeline with LangGraph that performs iterative validation and cross-encoder re-ranking.",
      what_else: "Improved answer relevance to 92% and reduced hallucinations by 35%, supporting 200+ concurrent users."
    },
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
      id: "arch-analysis",
      name: "Architectural Change Analysis Platform",
      type: "GIS & GenAI",
      description: "A high-performance full-stack web application for urban researchers to detect and score architectural changes using historical Street View imagery and Google Gemini.",
      tech_stack: ["React", "FastAPI", "Google Gemini", "Google Maps API", "Vercel"],
      highlights: ["Road-Aligned Sampling", "Forensic Change Scoring", "Longitudinal Comparisons", "Serverless Optimization"],
      problem: "Identifying decades of urban architectural transitions is manually intensive and prone to oversight.",
      solution: "Developed an AI-powered GIS platform that automates forensic scoring and features a custom 20m interval coordinate sampling algorithm.",
      what_else: "The platform reduces serverless cold-start latency by 75% using a pre-warming 'ping' strategy and handles high-concurrency requests with Python asyncio."
    },
    {
      id: "pokedex",
      name: "Full-Stack Pokédex",
      type: "Web App",
      description: "A team strategy platform tracking 1,000+ Pokémon with real-time database synchronization.",
      tech_stack: ["Next.js", "TypeScript", "Supabase", "MCP"],
      highlights: ["Real-time Sync", "Agentic Workflows", "Claude Code Integration"],
      problem: "Developing complex data-heavy species trackers manually is slow and error-prone.",
      solution: "Utilized Next.js and Supabase for real-time updates and integrated agentic workflows with Claude Code for 40% faster development.",
      what_else: "Features interactive analytics for team composition and Global deployment via Vercel."
    },
    {
      id: "tours",
      name: "Full-Stack Tours",
      type: "Web App",
      description: "A comprehensive booking platform with secure authentication and payment integration.",
      tech_stack: ["Node.js", "Express", "MongoDB", "Stripe"],
      highlights: ["JWT Auth", "Stripe Integration", "Role-Based Access"],
      problem: "Legacy booking systems lack secure payment processing and modern admin dashboards.",
      solution: "Implemented Node/Express backend with JWT and Stripe integration for a seamless end-to-end booking experience.",
      what_else: "Containerized with Docker and automated via GitHub Actions for zero-downtime deployments."
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Scala", "Bash"],
    frameworks: ["React", "Next.js", "Node.js", "FastAPI", "Spring Boot", "Express", "Django", "Flask"],
    cloud_devops: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Terraform"],
    data_ml: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Spark", "FAISS", "Pinecone", "Pandas"],
    gen_ai: ["LangChain", "LangGraph", "OpenAI API", "Claude API", "RAG", "MCP", "Agentic Workflows"]
  },
  socials: {
    github: "https://github.com/KishoreLamar10",
    linkedin: "https://www.linkedin.com/in/kishorekumaravudai/",
    email: "balakishore619@gmail.com"
  },
  ai_personality: "You are the AI Chatbot for Kishorekumar. You are professional, tech-savvy, and highly specialized in Agentic AI and Full-Stack systems. You explain technical concepts like RAG, LangGraph, and MCP clearly. You provide deep insights into Kishore's experience at Buffalo and Cognizant."
};

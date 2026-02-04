import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 3,
      img: "/pf1.png",
      link: "https://mytours-87mi.onrender.com/",
      title: "My Tours",
      tags: [
        "SPA Architecture",
        "RESTful Integration",
        "Component Composition",
      ],
    },
    {
      id: 1,
      img: "/pf2.png",
      link: "https://movie-search-theta-lemon.vercel.app/",
      title: "Movie Search",
      tags: ["Client-Side Querying", "Debounced Search", "API Orchestration"],
    },
    {
      id: 4,
      img: "/pf4.png",
      link: "https://resume-matcherr.streamlit.app/",
      title: "Resume Matcher",
      tags: ["Semantic Matching", "Vector Similarity", "NLP Pipeline"],
    },
    {
      id: 5,
      img: "/pf7.png",
      link: "https://popcornboxoffice.streamlit.app/",
      title: "Popcorn Box Office",
      tags: ["Exploratory Analytics", "ETL Workflow", "Data Visualization"],
    },
    {
      id: 2,
      img: "/pf3.png",
      link: "https://jsgames-flame.vercel.app/",
      title: "JS Games",
      tags: ["Event Loop Control", "Collision Detection", "Canvas Rendering"],
    },
    {
      id: 6,
      img: "/genai.png",
      link: "https://networksupportagent.vercel.app/",
      title: "Network Support Agent",
      tags: ["RAG Workflow", "LLM Orchestration", "Realtime Messaging"],
    },
    {
      id: 7,
      img: "/pokedex-ball.png",
      link: "https://my-pokedex-chi-five.vercel.app/",
      title: "Pokedex",
      tags: ["Graph Traversal", "Typed Fetching", "Client-Side Caching"],
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section text-center py-5">
      <h2 className="portfolio-heading">PORTFOLIO</h2>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-item"
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
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

import "./Portfolio.css";

function Portfolio() {
  const projects = [
    { id: 3, img: "/pf1.png", link: "https://mytours-87mi.onrender.com/" },
    {
      id: 1,
      img: "/pf2.png",
      link: "https://movie-search-theta-lemon.vercel.app/",
    },
    { id: 4, img: "/pf4.png", link: "https://resume-matcherr.streamlit.app/" },
    {
      id: 5,
      img: "/pf7.png",
      link: "https://popcornboxoffice.streamlit.app/",
    },
    { id: 2, img: "/pf3.png", link: "https://jsgames-flame.vercel.app/" },
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
            <img src={project.img} alt={`Project ${project.id}`} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

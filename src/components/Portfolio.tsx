import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { id: 1, img: '/pf2.jpeg', link: 'https://movie-search-theta-lemon.vercel.app/' },
    { id: 2, img: '/pf3.jpeg', link: 'https://jsgames-flame.vercel.app/' },
    { id: 3, img: '/pf1.jpeg', link: 'https://mytours-87mi.onrender.com/' }
  ];

  return (
    <section id="portfolio" className="portfolio-section text-center py-5">
      <h2 className="portfolio-heading">PORTFOLIO</h2>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <img src={project.img} alt={`Project ${project.id}`} />
          </a>
        ))}
      </div>

      
    </section>
  );
}

export default Portfolio;

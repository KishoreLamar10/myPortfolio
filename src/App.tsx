import { useEffect } from "react";
import Navbar from "./components/navbar";
import About from "./components/About";
import Intro from "./components/intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/contactMe";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="reveal">
        <Intro />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      <div className="reveal">
        <Portfolio />
      </div>
      <div className="reveal">
        <ContactMe />
      </div>
      <div className="reveal">
        <Footer />
      </div>
    </div>
  );
}

export default App;

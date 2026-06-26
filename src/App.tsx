import Navbar from "./components/navbar";
import HeroCard from "./components/intro";
import HeroContent from "./components/HeroContent";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/contactMe";
import AIChatbot from "./components/AIChatbot";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-layout">
        {/* ── Left sticky panel ── */}
        <aside className="sticky-left">
          <HeroCard />
        </aside>

        {/* ── Right scrollable content ── */}
        <main className="scroll-right">
          <HeroContent />
          <Portfolio />
          <Experience />
          <Skills />
          <ContactMe />
        </main>
      </div>

      <AIChatbot />
    </div>
  );
}

export default App;

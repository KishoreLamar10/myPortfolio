import Navbar from './components/navbar';
import About from './components/About';
import Intro from './components/intro';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContactMe from './components/contactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

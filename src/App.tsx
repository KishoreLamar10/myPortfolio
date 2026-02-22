import Navbar from "./components/navbar";
import About from "./components/About";
import Intro from "./components/intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/contactMe";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

import AIChatbot from "./components/AIChatbot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer />
      </motion.main>
      <AIChatbot />
    </div>
  );
}

export default App;

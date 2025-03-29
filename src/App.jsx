import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

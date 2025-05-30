import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </div>
  );
};

export default App;

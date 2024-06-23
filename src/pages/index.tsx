// src/pages/index.tsx (Home Page)
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Companies from '../components/Companies';
import Certifications from '../components/Certifications';
import Courses from '../components/Courses';
import Projects from '../components/Projects';

const Home = () => (
  <div>
    <NavBar />
    <Hero />
    <About />
    <Experience />
    <Companies />
    <Certifications />
    <Courses />
    <Projects />
  </div>
);

export default Home;
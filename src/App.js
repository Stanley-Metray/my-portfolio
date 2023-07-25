import './App.css';
import Menu from './components/Menu';
import "../src/components/assets/myStyle.css";
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Services from './components/Services';
function App() {  
  return <>
    <Menu/>
    <Hero/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <Services/>
    <Resume/>
    <ContactMe/>
  </>
}

export default App;

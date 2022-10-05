import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Sidebar } from './components/Sidebar';
import { Work } from './components/Work';
                

function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <About/>
    <Work/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

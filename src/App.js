import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Sidebar } from './components/Sidebar';
import { Work } from './components/Work';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Achievements from './components/Achievements';
// import { Routes, Route } from "react-router-dom";



function App() {
  const [loading, setLoading] = useState(false);
  AOS.init();
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);
  return (
    <>
      {loading ?
        <div className='loader h-[100vh] w-full bg-bgmain flex justify-center items-center'>
          <ClimbingBoxLoader
            color={'#64ffda'}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
          />
        </div>
        :
        <>
          <Navbar />
          <Sidebar />
          <Hero />
          <About />
          <Work />
          <Project />
          <Achievements/>
          <Contact />
          <Footer />
        </>
      }
    </>
  );
}

export default App;

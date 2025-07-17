import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Interests from './components/Interests';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(mainRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    gsap.config({
      force3D: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 font-sans antialiased relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Interests />
          <Footer />
        </div>
      </div>
      
      {/* Glow effects */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}

export default App;
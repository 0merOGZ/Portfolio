import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-slate-900 text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
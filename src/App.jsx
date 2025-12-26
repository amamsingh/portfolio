import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';

import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      {/* Page 1: Hero */}
      <div className="h-full w-full overflow-hidden relative bg-navy-900">
        <Hero />
      </div>

      {/* Page 2: About */}
      <div className="h-full w-full overflow-y-auto custom-scrollbar p-6 md:p-10 bg-navy-900 border-l border-white/5">
        <About />
      </div>

      {/* Page 3: Experience */}
      <div className="h-full w-full overflow-y-auto custom-scrollbar p-6 md:p-10 bg-navy-900 border-l border-white/5">
        <Experience />
      </div>

      {/* Page 4: Skills & Technologies */}
      <div className="h-full w-full overflow-y-auto custom-scrollbar p-6 md:p-10 bg-navy-900 border-l border-white/5">
        <Skills />

      </div>

      {/* Page 5: Projects */}
      <div className="h-full w-full overflow-y-auto custom-scrollbar p-6 md:p-10 bg-navy-900 border-l border-white/5">
        <Projects />
      </div>

      {/* Page 6: Contact */}
      <div className="h-full w-full overflow-y-auto custom-scrollbar p-6 md:p-10 bg-navy-900 border-l border-white/5">
        <Contact />
      </div>
    </Layout>
  );
}

export default App;

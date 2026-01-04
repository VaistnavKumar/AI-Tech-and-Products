import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      
      {/* Background Grid */}
      <div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
        <main className="flex-1 w-full">
          
          <Hero />
          
          {/* Dark Background Section Container */}
          <div className="bg-neutral-950 w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.5)] border-t border-neutral-800">
            <Marquee />
            <PainPoints />
            <Services />
            <WhyUs />
            <CaseStudies />
            <Footer />
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
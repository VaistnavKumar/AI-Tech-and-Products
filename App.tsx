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
      
      <div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
        <main className="flex-1 w-full">
          
          <Hero />
          
          {/* Cyber Dark Background Section Container */}
          <div className="bg-[#0a0a12] w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-10px_40px_rgba(0,243,255,0.05)] border-t border-white/5">
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
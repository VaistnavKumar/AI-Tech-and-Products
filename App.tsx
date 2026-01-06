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
      
      <div className="flex flex-col min-h-screen pt-24">
        <main className="flex-1 w-full">
          
          {/* Light Section */}
          <Hero />
          
          {/* Dark Green Section Container */}
          <div className="bg-brand-dark w-full z-20 rounded-t-[40px] lg:rounded-t-[60px] pt-20 pb-12 relative overflow-hidden">
             
             {/* Giant Background Text Overlay */}
             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <h2 className="text-[12vw] leading-none font-bold text-white opacity-[0.03] tracking-tight whitespace-nowrap">
                  Artificial Intelligence
                </h2>
             </div>

            <div className="relative z-10">
              <Marquee />
              <PainPoints />
              <Services />
              <WhyUs />
              <CaseStudies />
              <Footer />
            </div>
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
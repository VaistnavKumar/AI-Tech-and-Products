import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 items-center">
      <div className="animate-clip-in lg:col-span-7 space-y-6" style={{ animationDelay: '0.1s' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
          <span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
          Next-Gen AI Solutions
        </div>
        
        {/* Headline */}
        <h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
          Intelligent Products, 
          <span className="text-slate-950 font-google-sans-flex relative inline-block mx-2">
            Engineered
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.4"></path>
            </svg>
          </span> for Impact.
        </h1>
        <p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-montserrat max-w-2xl">
          We build cutting-edge AI tools and scalable tech products that transform how you work. From generative agents to predictive analytics ecosystems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
            <span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight pt-4 pr-8 pb-4 pl-8 relative">
              Explore Our Products
            </span>
            <div className="button-shine"></div>
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-200/50 transition-colors">
            See Case Studies
          </button>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative space-y-4">
          
          {/* Card 1: AI Model */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full" style={{ animationDelay: '0s' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-lime-50 text-lime-600 border-lime-100">
              <iconify-icon icon="lucide:brain" width="20"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-semibold text-stone-900">Neural Network</p>
                <span className="text-[10px] text-stone-400">v4.2.0</span>
              </div>
              <p className="text-xs text-stone-500 truncate">Training Complete</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">98.5% Accuracy</span>
          </div>

          {/* Card 2: AI Assistant */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{ animationDelay: '1.5s' }}>
            <div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-lime-600">
              <iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-semibold text-stone-900">AI Assistant</p>
                <span className="text-[10px] text-stone-400">Live</span>
              </div>
              <p className="text-xs text-stone-500 truncate">Processing user request...</p>
            </div>
            <span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">Active</span>
          </div>

          {/* Card 3: Performance */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{ animationDelay: '2.5s' }}>
            <div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
              <iconify-icon icon="lucide:zap" width="20"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-semibold text-stone-900">System Load</p>
                <span className="text-[10px] text-stone-400">Optimal</span>
              </div>
              <p className="text-xs text-stone-500 truncate">Inference Latency: 12ms</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">Turbo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
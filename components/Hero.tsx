import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 items-center">
      <div className="animate-clip-in lg:col-span-7 space-y-6" style={{ animationDelay: '0.1s' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-brand-neonCyan/10 border-brand-neonCyan/30 text-brand-neonCyan backdrop-blur-sm shadow-[0_0_10px_rgba(0,243,255,0.1)]">
          <span className="w-2 h-2 rounded-full bg-brand-neonCyan animate-pulse shadow-[0_0_8px_#00f3ff]"></span>
          Next-Gen AI Solutions
        </div>
        
        {/* Headline */}
        <h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-white tracking-tighter">
          Intelligent Products, 
          <span className="text-white font-google-sans-flex relative inline-block mx-2">
            Engineered
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-neonPurple -z-10 opacity-80 drop-shadow-[0_0_5px_rgba(188,19,254,0.8)]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"></path>
            </svg>
          </span> for Impact.
        </h1>
        <p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-400 font-montserrat max-w-2xl">
          We build cutting-edge AI tools and scalable tech products that transform how you work. From <span className="text-brand-neonCyan">generative agents</span> to <span className="text-brand-neonPurple">predictive analytics</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
            <span className="button-text block select-none text-lg font-semibold text-white tracking-tight pt-4 pr-8 pb-4 pl-8 relative text-glow-blue">
              Explore Our Products
            </span>
            <div className="button-shine"></div>
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 font-semibold text-stone-300 hover:bg-white/5 hover:border-brand-neonPurple/50 hover:text-brand-neonPurple transition-all duration-300">
            See Case Studies
          </button>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-neonPurple opacity-20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-brand-neonCyan opacity-20 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="relative space-y-4">
          
          {/* Card 1: AI Model */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full bg-black/40 border-brand-neonCyan/30" style={{ animationDelay: '0s' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-brand-neonCyan/20 text-brand-neonCyan border-brand-neonCyan/50 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
              <iconify-icon icon="lucide:brain" width="20"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-semibold text-white">Neural Network</p>
                <span className="text-[10px] text-brand-neonCyan">v4.2.0</span>
              </div>
              <p className="text-xs text-stone-400 truncate">Training Complete</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-brand-neonCyan/10 text-brand-neonCyan border-brand-neonCyan/20">98.5% Accuracy</span>
          </div>

          {/* Card 2: AI Assistant */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full bg-black/40 border-brand-neonPurple/30" style={{ animationDelay: '1.5s' }}>
            <div className="flex shrink-0 bg-brand-neonPurple/20 w-10 h-10 border rounded-full items-center justify-center text-brand-neonPurple border-brand-neonPurple/50 shadow-[0_0_10px_rgba(188,19,254,0.2)]">
              <iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-semibold text-white">AI Assistant</p>
                <span className="text-[10px] text-brand-neonPurple">Live</span>
              </div>
              <p className="text-xs text-stone-400 truncate">Processing user request...</p>
            </div>
            <span className="bg-brand-neonPurple/20 text-[10px] px-2 py-0.5 rounded border border-brand-neonPurple/40 font-medium text-brand-neonPurple">Active</span>
          </div>

          {/* Card 3: Performance */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full bg-black/40 border-white/10" style={{ animationDelay: '2.5s' }}>
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center border shrink-0 bg-white/5 border-white/10">
              <iconify-icon icon="lucide:zap" width="20"></iconify-icon>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-semibold text-white">System Load</p>
                <span className="text-[10px] text-brand-neonCyan">Optimal</span>
              </div>
              <p className="text-xs text-stone-400 truncate">Inference Latency: 12ms</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-white/5 text-stone-300 border-white/10">Turbo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20">
      <div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative bg-[#1a352f] border border-white/5">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              <span className="text-brand-accent font-mono text-xs uppercase tracking-wider">Verified Results</span>
            </div>
            <h2 className="lg:text-5xl xl:text-6xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-montserrat mb-6">
              Real Impact, <br/><span className="text-white/50">Real Fast.</span>
            </h2>
            <p className="text-base lg:text-lg text-brand-textLight/70 font-montserrat max-w-md mb-8 lg:mb-10 leading-relaxed">
              See how our AI products drive efficiency and growth for industry leaders.
            </p>

            <button className="group flex items-center gap-3 bg-white text-brand-dark hover:bg-stone-200 transition-all text-sm font-bold rounded-full px-8 py-4 w-fit shadow-lg">
              <span>Read Case Studies</span>
              <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </button>
          </div>
          <div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
            <div className="transform lg:rounded-xl lg:translate-y-12 text-xs text-brand-textLight/80 font-mono bg-white/5 w-full border-white/10 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-white/10">
                <span className="text-brand-accent">ai_performance_report.json</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded border bg-black/20 border-white/5">
                  <span className="block text-white/50 mb-2">Task Automation</span>
                  <span className="text-2xl font-bold text-white block mb-1">85%</span>
                  <span className="text-brand-accent text-[10px]">SaaS Client / Agents</span>
                </div>
                <div className="p-4 rounded border bg-black/20 border-white/5">
                  <span className="block text-white/50 mb-2">Decision Speed</span>
                  <span className="text-2xl font-bold text-white block mb-1">10x</span>
                  <span className="text-brand-accent text-[10px]">FinTech / Analytics</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-black/10">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="lucide:timer" class="text-brand-accent text-sm"></iconify-icon>
                    <span className="text-white/70">Report generation reduced to seconds</span>
                  </div>
                  <span className="text-brand-accent"><iconify-icon icon="lucide:check"></iconify-icon></span>
                </div>
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-black/10">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="lucide:server" class="text-brand-accent text-sm"></iconify-icon>
                    <span className="text-white/70">Deployed custom LLM in 2 weeks</span>
                  </div>
                  <span className="text-brand-accent"><iconify-icon icon="lucide:check"></iconify-icon></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
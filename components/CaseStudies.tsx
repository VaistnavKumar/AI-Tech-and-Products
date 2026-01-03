import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20">
      <div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-zinc-900/30 bg-stone-900 border-stone-800">
        <div className="opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse"></div>
              <span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">Verified Results</span>
            </div>
            <h2 className="lg:text-5xl xl:text-6xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-montserrat mb-6">
              Real Impact, <br/>Real Fast.
            </h2>
            <p className="text-base lg:text-lg text-stone-400 font-montserrat max-w-md mb-8 lg:mb-10 leading-relaxed">
              See how our AI products drive efficiency and growth for industry leaders.
            </p>

            <button className="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900">
              <span>Read Case Studies</span>
              <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </button>
          </div>
          <div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
            <div className="transform [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-slate-950/80 w-full border-stone-800 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-800">
                <span className="text-stone-300">ai_performance_report.json</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-orange-700/50 rounded-full"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-500/50"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded border bg-stone-900 border-stone-800">
                  <span className="block text-stone-500 mb-2">Task Automation</span>
                  <span className="text-2xl font-bold text-white block mb-1">85%</span>
                  <span className="text-[#c1ff72] text-[10px]">SaaS Client / Agents</span>
                </div>
                <div className="p-4 rounded border bg-stone-900 border-stone-800">
                  <span className="block text-stone-500 mb-2">Decision Speed</span>
                  <span className="text-2xl font-bold text-white block mb-1">10x</span>
                  <span className="text-[#c1ff72] text-[10px]">FinTech / Analytics</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="lucide:timer" class="text-lime-400 text-sm"></iconify-icon>
                    <span className="text-stone-300">Report generation reduced to seconds</span>
                  </div>
                  <span className="text-[#c1ff72]"><iconify-icon icon="lucide:check"></iconify-icon></span>
                </div>
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="lucide:server" class="text-lime-400 text-sm"></iconify-icon>
                    <span className="text-stone-300">Deployed custom LLM in 2 weeks</span>
                  </div>
                  <span className="text-[#c1ff72]"><iconify-icon icon="lucide:check"></iconify-icon></span>
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
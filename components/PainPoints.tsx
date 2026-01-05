import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{ animationDelay: '0.4s' }}>
      <div className="text-center mb-12">
        <h2 className="lg:text-5xl text-3xl font-medium text-white tracking-tight font-montserrat">
          Stop Wrestling with  <span className="text-stone-600">Outdated Tools.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl hover:border-brand-neonCyan/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all duration-300 group">
          <div className="w-12 h-12 bg-brand-neonCyan/10 text-brand-neonCyan rounded-xl flex items-center justify-center mb-6 border border-brand-neonCyan/20 group-hover:bg-brand-neonCyan/20 group-hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all">
            <iconify-icon icon="lucide:clock" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-neonCyan transition-colors">Manual Task Overload?</h3>
          <p className="text-stone-400 text-sm leading-relaxed">Deploy our autonomous AI agents to handle repetitive workflows with human-like precision and 24/7 availability.</p>
        </div>
        {/* Card 2 */}
        <div className="p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl hover:border-brand-neonPurple/50 hover:shadow-[0_0_20px_rgba(188,19,254,0.1)] transition-all duration-300 group">
          <div className="w-12 h-12 bg-brand-neonPurple/10 text-brand-neonPurple rounded-xl flex items-center justify-center mb-6 border border-brand-neonPurple/20 group-hover:bg-brand-neonPurple/20 group-hover:shadow-[0_0_10px_rgba(188,19,254,0.2)] transition-all">
            <iconify-icon icon="lucide:brain-circuit" width="24" class=""></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-neonPurple transition-colors">Data Overload?</h3>
          <p className="text-stone-400 text-sm leading-relaxed">Turn noise into signal. Our advanced analytics suite deciphers complex datasets instantly to find the insights that matter.</p>
        </div>
        {/* Card 3 */}
        <div className="p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl hover:border-white/20 hover:bg-white/5 transition-all duration-300 group">
          <div className="w-12 h-12 bg-white/5 text-white rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10">
            <iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Slow Time-to-Market?</h3>
          <p className="text-stone-400 text-sm leading-relaxed">Launch faster with our pre-built tech stacks, modular AI components, and reliable infrastructure.</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
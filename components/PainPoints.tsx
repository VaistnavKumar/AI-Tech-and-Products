import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-20 lg:mb-32" style={{ animationDelay: '0.4s' }}>
      <div className="text-center mb-16">
        <h2 className="lg:text-5xl text-3xl font-medium text-white tracking-tight font-montserrat">
          Stop Wrestling with  <span className="text-brand-accent/60">Outdated Tools.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-brand-darker rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-300 group">
          <div className="w-12 h-12 bg-white/5 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-all">
            <iconify-icon icon="lucide:clock" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Manual Workflow Overload?</h3>
          <p className="text-brand-textLight/70 text-sm leading-relaxed">Leverage Neurallabs' automated ecosystems to handle repetitive tasks with machine precision.</p>
        </div>
        {/* Card 2 */}
        <div className="p-8 bg-brand-darker rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-300 group">
          <div className="w-12 h-12 bg-white/5 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-all">
            <iconify-icon icon="lucide:brain-circuit" width="24" class=""></iconify-icon>
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Data Complexity?</h3>
          <p className="text-brand-textLight/70 text-sm leading-relaxed">Turn noise into signal. Our advanced tech stack deciphers complex datasets instantly.</p>
        </div>
        {/* Card 3 */}
        <div className="p-8 bg-brand-darker rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-300 group">
          <div className="w-12 h-12 bg-white/5 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10">
            <iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Slow Time-to-Market?</h3>
          <p className="text-brand-textLight/70 text-sm leading-relaxed">Launch faster with our pre-built components and modular product architecture.</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
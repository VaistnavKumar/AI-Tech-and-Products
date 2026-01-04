import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{ animationDelay: '0.4s' }}>
      <div className="text-center mb-12">
        <h2 className="lg:text-5xl text-3xl font-medium text-white tracking-tight font-montserrat">
          Stop Wrestling with  <span className="text-stone-500">Outdated Tools.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-neutral-900 border border-stone-800 rounded-2xl hover:border-red-900/50 hover:bg-red-950/10 transition-colors">
          <div className="w-12 h-12 bg-red-900/20 text-red-500 rounded-xl flex items-center justify-center mb-6 border border-red-900/30">
            <iconify-icon icon="lucide:clock" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Manual Task Overload?</h3>
          <p className="text-stone-400 text-sm leading-relaxed">Deploy our autonomous AI agents to handle repetitive workflows with human-like precision and 24/7 availability.</p>
        </div>
        {/* Card 2 */}
        <div className="p-8 bg-neutral-900 border border-stone-800 rounded-2xl hover:border-blue-900/50 hover:bg-blue-950/10 transition-colors">
          <div className="w-12 h-12 bg-blue-900/20 text-blue-500 rounded-xl flex items-center justify-center mb-6 border border-blue-900/30">
            <iconify-icon icon="lucide:brain-circuit" width="24" class=""></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Data Overload?</h3>
          <p className="text-stone-400 text-sm leading-relaxed">Turn noise into signal. Our advanced analytics suite deciphers complex datasets instantly to find the insights that matter.</p>
        </div>
        {/* Card 3 */}
        <div className="p-8 bg-neutral-900 border border-stone-800 rounded-2xl hover:border-green-900/50 hover:bg-green-950/10 transition-colors">
          <div className="w-12 h-12 bg-green-900/20 text-green-500 rounded-xl flex items-center justify-center mb-6 border border-green-900/30">
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
import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{ animationDelay: '0.4s' }}>
      <div className="text-center mb-12">
        <h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-montserrat">
          Stop Wrestling with  <span className="text-stone-400">Outdated Tools.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
            <iconify-icon icon="lucide:clock" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-stone-900 mb-2">Manual Task Overload?</h3>
          <p className="text-stone-500 text-sm leading-relaxed">Deploy our autonomous AI agents to handle repetitive workflows with human-like precision and 24/7 availability.</p>
        </div>
        {/* Card 2 */}
        <div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <iconify-icon icon="lucide:brain-circuit" width="24" class=""></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-900">Data Overload?</h3>
          <p className="text-stone-500 text-sm leading-relaxed">Turn noise into signal. Our advanced analytics suite deciphers complex datasets instantly to find the insights that matter.</p>
        </div>
        {/* Card 3 */}
        <div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
            <iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-900">Slow Time-to-Market?</h3>
          <p className="text-stone-500 text-sm leading-relaxed">Launch faster with our pre-built tech stacks, modular AI components, and reliable infrastructure.</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
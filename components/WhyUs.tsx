import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-6xl font-medium text-white tracking-tight font-montserrat leading-tight text-glow-blue">
          Why Choose Our Tech?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="space-y-3 group">
            <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-neonCyan mb-2 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all">
              <iconify-icon icon="lucide:dna" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white">AI-First DNA</h3>
            <p className="text-stone-400 text-sm leading-relaxed">Built from the ground up with artificial intelligence at the core, not an afterthought.</p>
          </div>
          <div className="space-y-3 group">
            <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-neonPurple mb-2 group-hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] transition-all">
              <iconify-icon icon="lucide:plug" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white">Seamless Integration</h3>
            <p className="text-stone-400 text-sm leading-relaxed">Our products plug directly into your existing workflow with zero friction and instant value.</p>
          </div>
          <div className="space-y-3 group">
            <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mb-2 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
              <iconify-icon icon="lucide:refresh-cw" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white">Continuous Evolution</h3>
            <p className="text-stone-400 text-sm leading-relaxed">Our models and tools learn, adapt, and improve every single day based on your usage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
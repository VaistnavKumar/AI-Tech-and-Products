import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-6xl font-medium text-white tracking-tight font-montserrat leading-tight">
          Why Choose Our Tech?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="space-y-3 group">
            <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-white/10 transition-all">
              <iconify-icon icon="lucide:dna" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white">AI-First DNA</h3>
            <p className="text-brand-textLight/60 text-sm leading-relaxed">Built from the ground up with artificial intelligence at the core.</p>
          </div>
          <div className="space-y-3 group">
            <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-white/10 transition-all">
              <iconify-icon icon="lucide:plug" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white">Seamless Integration</h3>
            <p className="text-brand-textLight/60 text-sm leading-relaxed">Plug directly into your existing workflow with zero friction.</p>
          </div>
          <div className="space-y-3 group">
            <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-white/10 transition-all">
              <iconify-icon icon="lucide:refresh-cw" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white">Continuous Evolution</h3>
            <p className="text-brand-textLight/60 text-sm leading-relaxed">Our models adapt and improve every single day.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
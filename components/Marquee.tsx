import React from 'react';

const Marquee: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
      <p className="text-left text-sm font-medium text-stone-500 uppercase tracking-widest mb-6">Trusted by forward-thinking companies</p>
      <div className="overflow-hidden w-full relative">
        <div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-[#0a0a12]"></div>
        <div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-[#0a0a12]"></div>
        <div className="flex w-max animate-marquee hover:pause-animation">
          <div className="flex items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-brand-neonCyan/50 hover:text-brand-neonCyan">
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cpu" ></iconify-icon> TechFlow</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
          </div>
          <div className="flex items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 ml-12 lg:ml-24 text-brand-neonCyan/50 hover:text-brand-neonCyan">
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cpu"></iconify-icon> TechFlow</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
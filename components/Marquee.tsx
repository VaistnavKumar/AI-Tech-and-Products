import React from 'react';

const Marquee: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mb-20 px-6 lg:px-12 mt-12">
      <div className="text-center mb-10">
         <p className="text-white text-lg font-medium">Trusted by Leading Innovators</p>
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-brand-dark"></div>
        <div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-brand-dark"></div>
        <div className="flex w-max animate-marquee hover:pause-animation">
          <div className="flex items-center gap-16 lg:gap-32 opacity-60 hover:opacity-100 transition-all duration-500 text-white">
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cpu" ></iconify-icon> TechFlow</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
          </div>
          <div className="flex items-center gap-16 lg:gap-32 opacity-60 hover:opacity-100 transition-all duration-500 ml-16 lg:ml-32 text-white">
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
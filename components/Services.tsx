import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="lg:px-12 lg:mb-32 max-w-[1600px] mr-auto mb-20 ml-auto pr-6 pl-6">
      <h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight font-montserrat mb-12 lg:mb-16">Our Product Ecosystem</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
        
        {/* Card 1: Generative AI Platform */}
        <div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-brand-darker border-white/5 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between hover:border-white/10">
          
          {/* Visual Anchor (Top) */}
          <div className="z-20 mt-auto relative">
            <div className="flex text-white bg-white/5 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
              <iconify-icon icon="lucide:cpu" width="24" class=""></iconify-icon>
            </div>
            <h3 className="lg:text-3xl text-2xl font-medium text-white font-montserrat mb-3">Generative AI Core</h3>
            <p className="text-brand-textLight/70 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
              LLM integration, fine-tuning, and prompt engineering at scale. Build the brain of your next application.
            </p>
            <a href="#" className="inline-flex items-center text-white font-medium text-sm hover:underline underline-offset-4 group/link">
              Explore AI Models 
              <iconify-icon icon="lucide:arrow-right" class="ml-2 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>
          <div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
            
            {/* Floating Card UI */}
            <div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-[#1a352f] w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl border border-white/5">
              {/* Fake Browser Header */}
              <div className="flex gap-2 border-white/5 border-b mb-4 pb-3 gap-x-2 gap-y-2 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              {/* Content Mockup */}
              <div className="space-y-3 font-mono text-[10px] text-brand-textLight/50">
                <div className="flex gap-2"><span className="text-white/80">const</span> <span className="text-brand-accent">generate</span> = <span className="text-white">async</span> () ={'>'} {'{'}</div>
                <div className="pl-4 flex gap-2"><span className="text-white/80">await</span> model.predict({'{'}</div>
                <div className="pl-8 flex gap-2"><span className="text-white/50">prompt:</span> <span className="text-brand-accent">"Optimize workflow"</span>,</div>
                <div className="pl-4 flex gap-2">{'}'});</div>
                <div className="flex gap-2">{'}'}</div>
                
                {/* Interactive Element Mockup */}
                <div className="flex gap-3 bg-black/20 border-white/5 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
                  <div className="h-6 w-6 rounded bg-white/10 text-white flex items-center justify-center shrink-0">
                    <iconify-icon icon="lucide:check" width="14"></iconify-icon>
                  </div>
                  <div className="flex-1 text-[9px] text-white/70">Model Response Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Enterprise Platforms (Wide) */}
        <div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-[#0e2520] border-white/5 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between hover:border-white/10">

          {/* Text Side */}
          <div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
            <div className="">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-6 text-white">
                <iconify-icon icon="lucide:layers" width="24"></iconify-icon>
              </div>
              <h3 className="lg:text-3xl text-2xl font-medium text-white font-montserrat mb-3">Enterprise Platforms</h3>
              <p className="text-brand-textLight/70 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                Scalable SaaS solutions for workflow automation and resource planning.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-white font-bold text-sm hover:underline underline-offset-4 group/link">
              View Integrations 
              <iconify-icon icon="lucide:arrow-right" class="ml-2 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>

          {/* Visual Side (Kanban/Operations) */}
          <div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
            {/* Tilted Container */}
            <div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
              <div className="bg-[#1a352f] backdrop-blur rounded-xl shadow-lg border border-white/5 p-4">
                {/* Columns */}
                <div className="flex gap-3">
                  {/* Col 1 */}
                  <div className="flex-1 bg-black/10 rounded-lg p-2 space-y-2 border border-white/5">
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Backlog</div>
                    <div className="bg-[#24423b] p-3 rounded border border-white/5 shadow-sm">
                      <div className="h-1.5 w-12 bg-white/20 rounded mb-2"></div>
                      <div className="h-1 w-full bg-white/10 rounded"></div>
                    </div>
                  </div>
                  {/* Col 2 */}
                  <div className="flex-1 bg-black/10 rounded-lg p-2 space-y-2 border border-white/5">
                    <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider mb-1">In Progress</div>
                    <div className="bg-[#2e524a] p-3 rounded border border-white/10 shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent"></div>
                      <div className="h-1.5 w-16 bg-white/40 rounded mb-2"></div>
                      <div className="h-1 w-full bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Predictive Analytics */}
        <div className="group relative overflow-hidden bg-brand-darker rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-white/5 hover:border-white/10">
          
          {/* Visuals */}
          <div className="relative w-full h-32 mb-4">
            <div className="absolute right-0 top-0 space-y-3 w-full max-w-[220px]">
              <div className="bg-[#1a352f] p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-white/70 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75 border border-white/5">
                <div className="flex items-center gap-2">
                  <iconify-icon icon="lucide:pie-chart" class="text-white"></iconify-icon>
                  Market Trend Analysis
                </div>
              </div>
              <div className="bg-brand-accent/20 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-brand-accent w-fit transform group-hover:translate-x-1 transition-transform delay-100 border border-brand-accent/10">
                <div className="flex items-center gap-2">
                  <iconify-icon icon="lucide:arrow-right" class="text-brand-accent"></iconify-icon>
                  Prediction: +24% Growth
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto relative z-20">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
            </div>
            <h3 className="lg:text-2xl text-xl font-medium text-white font-montserrat mb-2">Predictive Analytics</h3>
            <p className="text-brand-textLight/70 text-sm mb-4 leading-relaxed">Forecasting models that drive smarter business decisions.</p>
            <a href="#" className="inline-flex items-center text-brand-accent font-bold text-xs uppercase tracking-wide hover:opacity-70">
              Learn More <iconify-icon icon="lucide:chevron-right" class="ml-1"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Card 4: Intelligent Commerce */}
        <div className="group relative overflow-hidden bg-brand-darker rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-white/5 hover:border-white/10">
          
          {/* Visual */}
          <div className="flex w-full h-32 relative justify-end">
            <div className="relative transform rotate-3 group-hover:rotate-6 transition-transform duration-500 origin-bottom-right">
              <div className="bg-[#1a352f] p-3 rounded-xl shadow-lg border border-white/10 w-32">
                <div className="w-full aspect-square bg-black/20 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center border border-white/5">
                  <iconify-icon icon="lucide:gift" class="text-white/40 text-3xl"></iconify-icon>
                </div>
                <div className="h-1.5 bg-white/10 rounded w-2/3 mb-1"></div>
                <div className="h-1.5 bg-white/5 rounded w-1/2"></div>
                <div className="-top-2 -right-2 text-[10px] font-bold text-brand-dark bg-brand-accent rounded-full pt-1 pr-2 pb-1 pl-2 absolute">AI Rec</div>
              </div>
            </div>
          </div>

          <div className="z-20 mt-auto relative">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
            </div>
            <h3 className="lg:text-2xl text-xl font-medium text-white font-montserrat mb-2">Intelligent Commerce</h3>
            <p className="text-brand-textLight/70 text-sm mb-4 leading-relaxed">AI-driven personalization and dynamic pricing engines.</p>
            <a href="#" className="inline-flex items-center text-brand-accent font-bold text-xs uppercase tracking-wide hover:opacity-70">
              View Solutions <iconify-icon icon="lucide:chevron-right" class="ml-1"></iconify-icon>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
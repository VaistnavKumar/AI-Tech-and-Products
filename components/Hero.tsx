import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="lg:px-12 pb-20 pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1600px] mx-auto px-6 items-center">
      <div className="lg:col-span-6 space-y-8">
        
        {/* Headline with 3D Roll-Up Animation */}
        <h1 className="leading-[1.05] lg:text-[5.5rem] xl:text-[6.5rem] text-6xl font-medium text-brand-textDark tracking-tight font-google-sans-flex perspective-text">
          <div className="overflow-hidden block">
            <span className="block animate-roll-up opacity-0 origin-bottom" style={{ animationDelay: '0.1s' }}>
              Building the Future
            </span>
          </div>
          <div className="overflow-hidden block">
            <span className="block animate-roll-up opacity-0 origin-bottom text-brand-dark" style={{ animationDelay: '0.3s' }}>
              of AI & Tech
            </span>
          </div>
        </h1>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <button className="bg-brand-accent text-brand-textDark hover:bg-stone-200 transition-all duration-300 pl-8 pr-2 py-2 rounded-full text-base font-medium flex items-center gap-4 group">
            Explore Products
            <span className="bg-brand-dark text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
               <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
            </span>
          </button>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="lg:col-span-6 flex flex-col animate-fade-up lg:mt-0 relative items-center justify-center h-full min-h-[500px]" style={{ animationDelay: '0.5s' }}>
          
        {/* Main Image Placeholder / Character */}
        <div className="relative z-10 w-full max-w-md mx-auto">
            {/* Abstract representation of the 'Product' */}
            <div className="aspect-[4/5] rounded-[40px] bg-gradient-to-b from-stone-100 to-brand-accent overflow-hidden relative shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2940&auto=format&fit=crop" 
                    alt="Neurallabs Technology" 
                    className="object-cover w-full h-full mix-blend-multiply opacity-90 scale-105 hover:scale-100 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>

            {/* Floating UI Card - Stats */}
            <div className="absolute top-10 -right-12 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-brand-textDark">20M+</span>
                    </div>
                </div>
            </div>

             {/* Floating UI Card - Description */}
            <div className="absolute bottom-12 -left-12 max-w-[240px] text-right">
                <p className="text-sm font-medium text-stone-600 leading-relaxed bg-white/80 p-4 rounded-2xl backdrop-blur-sm shadow-lg border border-stone-100">
                    Empower your enterprise with Neurallabs' intelligent products designed to scale innovation.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
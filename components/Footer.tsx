import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
        <div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">
              Ready to upgrade your workflow?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex">
                Start Free Trial
              </button>
            </div>
          </div>
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)' }}
          ></div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
        <div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
            <div className="lg:w-1/3 space-y-5">
              <div className="flex gap-2 items-center">
                <span className="text-2xl font-bold tracking-tighter font-google-sans-flex">Neural<span className="text-lime-500">labs</span></span>
              </div>
              <p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
                Next-generation AI and tech products for the modern enterprise.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Company</h3>
                <ul className="space-y-3 text-stone-600">
                  <li><a href="#services" className="hover:text-stone-900 transition-colors">Products</a></li>
                  <li><a href="#cases" className="hover:text-stone-900 transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-stone-900 transition-colors">Login</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Connect</h3>
                <ul className="space-y-3 text-stone-600">
                  <li><a href="#" className="flex items-center gap-2 hover:text-stone-900 transition-colors"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a></li>
                  <li><a href="#" className="flex items-center gap-2 hover:text-stone-900 transition-colors"><iconify-icon icon="simple-icons:twitter" width="14"></iconify-icon> Twitter</a></li>
                  <li><a href="#" className="flex items-center gap-2 hover:text-stone-900 transition-colors"><iconify-icon icon="simple-icons:github" width="14"></iconify-icon> GitHub</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Legal</h3>
                <ul className="space-y-3 text-stone-600">
                  <li><a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-stone-900 transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
            <p>© 2026 Neurallabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
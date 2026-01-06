import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
        <div className="relative overflow-hidden rounded-[32px] bg-[#1a352f] border border-white/5">
          {/* Content Container - Flexbox for perfect centering */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[350px] lg:min-h-[450px] p-8 md:p-12 lg:p-20 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight font-montserrat leading-tight mb-8">
                Ready to upgrade your workflow?
              </h2>
              <div className="flex justify-center w-full">
                <button className="font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-white text-brand-dark hover:bg-brand-accent border border-transparent whitespace-nowrap text-sm lg:text-base">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
        <div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-brand-darker border-white/5">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
            <div className="lg:w-1/3 space-y-5">
              <div className="flex gap-2 items-center text-white">
                <span className="text-2xl font-bold tracking-tighter font-google-sans-flex">Neurallabs</span>
              </div>
              <p className="text-sm text-brand-textLight/60 font-montserrat max-w-sm leading-relaxed">
                Next-generation AI and tech products for the modern enterprise.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-wider text-white/40">Company</h3>
                <ul className="space-y-3 text-brand-textLight/70">
                  <li><a href="#services" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="#cases" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-wider text-white/40">Connect</h3>
                <ul className="space-y-3 text-brand-textLight/70">
                  <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a></li>
                  <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><iconify-icon icon="simple-icons:twitter" width="14"></iconify-icon> Twitter</a></li>
                  <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" width="14"></iconify-icon> GitHub</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-wider text-white/40">Legal</h3>
                <ul className="space-y-3 text-brand-textLight/70">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-white/5 text-brand-textLight/50">
            <p>© 2026 Neurallabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
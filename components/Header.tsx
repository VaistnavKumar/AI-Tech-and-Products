import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-transparent">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group text-2xl font-bold tracking-tight font-google-sans-flex text-brand-textDark">
          Neurallabs
        </a>

        {/* Desktop Menu - Centered Pill */}
        <nav className="hidden lg:flex items-center bg-[#f2f4f3] rounded-full px-2 py-1.5 shadow-sm border border-black/5">
          <a href="#" className="px-6 py-2 rounded-full text-sm font-medium text-brand-textDark hover:bg-white transition-all shadow-sm">Home</a>
          <a href="#services" className="px-6 py-2 rounded-full text-sm font-medium text-stone-600 hover:text-brand-textDark hover:bg-white transition-all">Solutions</a>
          <a href="#cases" className="px-6 py-2 rounded-full text-sm font-medium text-stone-600 hover:text-brand-textDark hover:bg-white transition-all">Use Cases</a>
          <a href="#pricing" className="px-6 py-2 rounded-full text-sm font-medium text-stone-600 hover:text-brand-textDark hover:bg-white transition-all">Pricing</a>
          <a href="#resources" className="px-6 py-2 rounded-full text-sm font-medium text-stone-600 hover:text-brand-textDark hover:bg-white transition-all">Resources</a>
        </nav>

        {/* Actions */}
        <div className="flex gap-x-4 items-center">
          <button className="bg-brand-dark text-white hover:bg-brand-green hover:shadow-lg transition-all duration-300 font-medium px-6 py-3 rounded-full text-sm flex items-center gap-2 group">
            Book a Demo
            <iconify-icon icon="lucide:arrow-up-right" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex text-white">
          Neural<span className="transition-colors text-stone-400 group-hover:text-[#c1ff72]">labs</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
          <a href="#services" className="hover:text-white transition-colors text-sm font-medium text-stone-300">Products</a>
          <a href="#cases" className="hover:text-white transition-colors text-sm font-medium text-stone-300">Case Studies</a>
          <a href="#" className="hover:text-white transition-colors text-sm font-medium text-stone-300">Login</a>
        </nav>

        {/* Actions */}
        <div className="flex gap-x-8 items-center">
          <button className="bg-[#c1ff72] text-stone-900 hover:bg-[#b0f060] transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
            Get Early Access
            <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
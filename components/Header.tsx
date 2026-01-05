import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-brand-neonCyan/20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex text-white">
          Neural<span className="transition-colors text-brand-neonCyan group-hover:text-brand-neonPurple group-hover:text-glow-purple">labs</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
          <a href="#services" className="hover:text-brand-neonCyan transition-colors text-sm font-medium text-stone-300">Products</a>
          <a href="#cases" className="hover:text-brand-neonCyan transition-colors text-sm font-medium text-stone-300">Case Studies</a>
          <a href="#" className="hover:text-brand-neonCyan transition-colors text-sm font-medium text-stone-300">Login</a>
        </nav>

        {/* Actions */}
        <div className="flex gap-x-8 items-center">
          <button className="bg-brand-neonCyan text-black hover:bg-brand-neonPurple hover:text-white transition-all duration-300 font-bold px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_20px_rgba(188,19,254,0.5)]">
            Get Early Access
            <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
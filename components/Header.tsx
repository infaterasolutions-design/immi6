"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ripple effect handler for mobile icon buttons
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--ripple-x', `${x}px`);
    btn.style.setProperty('--ripple-y', `${y}px`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4'}`}>
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 h-12">
          
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center">
              <span className="bg-primary text-white px-2 py-1 mr-1.5 rounded-sm">USA</span>
              <span>Visas</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            <div className="nav-item group relative h-full flex items-center px-4 cursor-pointer">
              <Link href="/" className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold text-blue-700 border-b-2 border-primary pb-1">
                Home
              </Link>
            </div>
            <div className="nav-item group relative h-full flex items-center px-4 cursor-pointer">
              <Link href="/category/visa-news" className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Visa News
              </Link>
            </div>
            <div className="nav-item group relative h-full flex items-center px-4 cursor-pointer">
              <Link href="/category/visa-bulletin" className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Visa Bulletin
              </Link>
            </div>
          </div>

          {/* Desktop Search & Mobile Toggles */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center bg-slate-100 px-4 py-2 border border-slate-200 rounded-full">
              <span className="material-symbols-outlined text-slate-400 text-sm mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none" placeholder="Search news..." type="text" />
            </div>

            <button className="hidden lg:block bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-all scale-100 active:scale-95">
              Subscribe
            </button>

            <button 
              className="lg:hidden mob-icon-btn ml-2" 
              onClick={(e) => { handleRipple(e); setIsSearchOpen(true); }}
            >
              <svg className="search-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <line x1="15.5" y1="15.5" x2="20" y2="20" />
              </svg>
            </button>

            <button 
              className={`lg:hidden mob-icon-btn ml-1 ${isMobileMenuOpen ? 'is-active' : ''}`}
              onClick={(e) => { handleRipple(e); setIsMobileMenuOpen(!isMobileMenuOpen); }}
            >
              <div className="hamburger-bars">
                <span></span><span></span><span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ top: '72px' }}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div 
        className={`fixed left-0 w-full bg-white z-40 shadow-xl lg:hidden transform transition-all duration-400 cubic-bezier(0.25, 0.8, 0.25, 1) ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ top: '72px', maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
      >
        <div className="p-4 space-y-1">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 font-bold text-slate-800 border-b border-slate-50">Top Stories</Link>
          <Link href="/category/visa-news" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 font-bold text-slate-800 border-b border-slate-50">Visa News</Link>
          <Link href="/category/processing-times" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 font-bold text-slate-800">Processing Times</Link>
        </div>
      </div>

      {/* Smart Search Overlay */}
      <div className={`fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl transition-all duration-300 transform ${isSearchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => setIsSearchOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 shrink-0">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <div className="flex-1 flex items-center bg-slate-100 px-4 h-12 rounded-full border border-slate-200">
            <span className="material-symbols-outlined text-slate-400 text-lg mr-2">search</span>
            <input autoFocus={isSearchOpen} className="bg-transparent border-none text-sm w-full outline-none" placeholder="Search visa news, guides..." type="text" />
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-secondary font-semibold text-sm mb-4">Trending Searches</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-600">H1B Lottery 2025</span>
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-600">USCIS Fee Hit</span>
            <span className="bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-600">F1 OPT Rules</span>
          </div>
        </div>
      </div>
    </>
  );
}

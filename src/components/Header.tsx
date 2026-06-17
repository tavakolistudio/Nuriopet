'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/data/products';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10'
          : 'bg-white/5 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="#" onClick={handleLinkClick} className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Nurio Pet — Şelatlı Mineral Takviyesi"
              width={130}
              height={52}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/65 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#satin-al"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                         bg-teal-500 hover:bg-teal-400 text-white border border-transparent
                         transition-all duration-200 shadow-lg shadow-teal-900/30"
            >
              Satın Al
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link
                href="#satin-al"
                onClick={handleLinkClick}
                className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                           bg-teal-500 hover:bg-teal-400 text-white transition-all duration-200"
              >
                Satın Al
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

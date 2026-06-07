'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePlexLang } from '@/contexts/PlexLanguageContext';
import type { Lang } from '@/contexts/PlexLanguageContext';

export default function PlexNavbar() {
  const { lang, setLang, t } = usePlexLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.product, href: '#product' },
    { label: t.nav.technology, href: '#technology' },
    { label: t.nav.benefits, href: '#benefits' },
    { label: t.nav.species, href: '#species' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060F1E]/95 backdrop-blur-md border-b border-[#C9A84C]/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Nurio Plex"
            width={140}
            height={52}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-[#C9A84C] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Lang switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5">
            {(['tr', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                  lang === l
                    ? 'bg-[#C9A84C] text-[#060F1E]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-[#C9A84C] hover:bg-[#E8C97A] text-[#060F1E] text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5">
            {(['tr', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                  lang === l ? 'bg-[#C9A84C] text-[#060F1E]' : 'text-slate-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#060F1E]/98 backdrop-blur-md border-b border-[#C9A84C]/10 px-6 pb-6"
          >
            <div className="flex flex-col gap-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-[#C9A84C] text-sm tracking-wide py-1 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-[#C9A84C] text-[#060F1E] text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

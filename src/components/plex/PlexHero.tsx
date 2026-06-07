'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

export default function PlexHero() {
  const { t } = usePlexLang();

  return (
    <section
      id="product"
      className="relative min-h-screen flex flex-col bg-[#060F1E] overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030912] via-[#0A1628] to-[#0D2040]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 55%, #0B3B2A 0%, transparent 48%),
                            radial-gradient(circle at 85% 20%, #0D2040 0%, transparent 45%)`
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Glow spots */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C9A84C]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#0B3B2A]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight">
                <span className="text-white">{t.hero.headline1}</span>
                <br />
                <span className="bg-gradient-to-r from-[#E8C97A] to-[#C9A84C] bg-clip-text text-transparent">
                  {t.hero.headline2}
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-300/90 text-lg leading-relaxed max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C97A] text-[#060F1E] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/25 text-sm"
              >
                {t.hero.cta1}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#technology"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
              >
                {t.hero.cta2}
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.65, transformOrigin: 'left' }}
              style={{ transformOrigin: 'left center' }}
              className="h-px bg-gradient-to-r from-[#C9A84C]/30 via-[#C9A84C]/10 to-transparent"
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex gap-8"
            >
              {[
                { value: t.hero.stat1Value, label: t.hero.stat1Label },
                { value: t.hero.stat2Value, label: t.hero.stat2Label },
                { value: t.hero.stat3Value, label: t.hero.stat3Label },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-[#C9A84C] text-xl font-bold tracking-tight">{stat.value}</span>
                  <span className="text-slate-400 text-xs leading-snug max-w-[90px]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-3xl bg-[#C9A84C]/5 blur-2xl" />

            {/* Image container */}
            <div className="relative w-full max-w-[560px] rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
              {/* Slight gold vignette overlay on edges */}
              <div className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 55%, #060F1E44 100%)'
                }}
              />

              <Image
                src="/images/plex-product.png"
                alt="Nurio Plex — Advanced Chelated Mineral Supplement for Livestock"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Product label badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between"
              >
                <div className="bg-[#060F1E]/80 backdrop-blur-sm border border-[#C9A84C]/25 rounded-xl px-4 py-2.5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                  <div>
                    <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest">Nurio Plex</p>
                    <p className="text-slate-300 text-xs">Chelated Mineral Supplement</p>
                  </div>
                </div>
                <div className="bg-[#C9A84C]/10 backdrop-blur-sm border border-[#C9A84C]/20 rounded-xl px-3 py-2.5 text-center">
                  <p className="text-[#E8C97A] text-[10px] font-semibold uppercase tracking-wider">Advanced</p>
                  <p className="text-[#C9A84C] text-[10px] font-semibold uppercase tracking-wider">Chelated</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 rounded-full bg-[#C9A84C]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-xl relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <div className="flex flex-col gap-8">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase
                               bg-teal-500/15 text-teal-300 border border-teal-400/30 mb-6">
                Advanced Chelated Mineral Technology
              </span>
              <h1
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Takviye değil,{' '}
                <span className="text-teal-400 relative">
                  emilim farkı.
                  <svg className="absolute -bottom-2 left-0 w-full h-2 opacity-40" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,6 Q50,0 100,4 T200,3" stroke="#2dd4bf" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-white/70 leading-relaxed max-w-lg"
              initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            >
              Nurio, gelişmiş şelat teknolojisiyle formüle edilmiş kedi ve köpek mineral takviyesidir.
              Minerallerin vücutta daha stabil kalmasını ve daha etkili kullanılmasını destekler.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            >
              <Link
                href="#nurio-dog"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm
                           bg-teal-500 hover:bg-teal-400 text-white transition-all duration-200 shadow-lg shadow-teal-900/30 cursor-pointer"
              >
                <span className="text-base" aria-hidden="true">🐕</span>
                Nurio Dog'u İncele
              </Link>
              <Link
                href="#nurio-cat"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm
                           bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <span className="text-base" aria-hidden="true">🐈</span>
                Nurio Cat'i İncele
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 pt-2"
              initial="hidden" animate="visible" custom={0.45} variants={fadeUp}
            >
              {[
                { icon: '🔬', label: 'Bilimsel Formülasyon' },
                { icon: '🎯', label: 'Hedefli Mineral Desteği' },
                { icon: '✓',  label: 'Net Dozaj Bilgisi' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-white/50">
                  <span className="text-teal-400 font-semibold" aria-hidden="true">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: product photo ── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(46,125,103,0.35) 0%, transparent 70%)' }} />

            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/images/hero.png"
                alt="Nurio Cat ve Nurio Dog — Şelatlı Mineral Takviyesi"
                width={900}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
              {/* floating labels */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-xs font-semibold text-white/90 px-3 py-1.5 rounded-full border border-white/20 shadow">
                  🐈 Nurio Cat
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-xs font-semibold text-white/90 px-3 py-1.5 rounded-full border border-white/20 shadow">
                  🐕 Nurio Dog
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand promise footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/35">
            Gerçek Emilim &nbsp;•&nbsp; Gerçek Sonuç
          </p>
          <p className="text-xs text-white/30 text-center sm:text-right max-w-sm">
            Bu ürün bir ilaç değildir. Hastalıkların önlenmesi veya tedavisi amacıyla kullanılmaz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

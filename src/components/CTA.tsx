'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="satin-al" className="section-py relative overflow-hidden" ref={ref}>
      {/* Enhanced dark layer for contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2dd4bf 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* Subtle hex pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L30 8.66L45 0L60 8.66V26L45 34.64L30 26L15 34.64L0 26V8.66L15 0z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 52px',
        }}
      />

      <div className="container-xl relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Product lifestyle image */}
          <motion.div
            className="mb-14 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/dog-hand.jpg"
              alt="Nurio Dog — 0.5g şelatlı mineral saşeleri"
              width={600}
              height={800}
              className="w-full h-80 object-cover object-center"
            />
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6">
                Nurio Pet
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Gerçek Emilim.{' '}
                <span className="text-teal-400">
                  Gerçek Sonuç.
                </span>
              </h2>
              <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
                Gelişmiş şelat teknolojisiyle formüle edilmiş Nurio Dog ve Nurio Cat,
                evcil hayvanınızın mineral takviyesini bir üst seviyeye taşımak için tasarlandı.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Primary */}
              <a
                href="#urunler"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base
                           bg-teal-500 hover:bg-teal-400 text-white
                           transition-all duration-200 shadow-lg shadow-teal-900/40 hover:shadow-teal-900/60 w-full sm:w-auto"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M2.5 3A1.5 1.5 0 001 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0115 5.293V4.5A1.5 1.5 0 0013.5 3h-11z" />
                  <path d="M15 6.954L8.978 9.86a2.25 2.25 0 01-1.956 0L1 6.954V11.5A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5V6.954z" />
                </svg>
                Satın Al
              </a>

              {/* Hepsiburada */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base
                           bg-white/10 hover:bg-white/15 text-white border border-white/20
                           transition-all duration-200 w-full sm:w-auto"
                aria-label="Hepsiburada'da Görüntüle"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v13a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z" />
                </svg>
                Hepsiburada'da Gör
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nuriopet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base
                           bg-white/10 hover:bg-white/15 text-white border border-white/20
                           transition-all duration-200 w-full sm:w-auto"
                aria-label="Instagram'da İncele"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram'da İncele
              </a>
            </motion.div>

            <motion.p
              className="mt-10 text-xs text-white/25 max-w-lg mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Bu ürün bir ilaç değildir. Hastalıkların önlenmesi veya tedavisi amacıyla kullanılmaz.
              Özel durumlarda veteriner hekiminize danışınız.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

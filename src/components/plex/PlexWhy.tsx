'use client';

import { motion } from 'framer-motion';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

function XIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8.5l4 4 7-9" />
    </svg>
  );
}

export default function PlexWhy() {
  const { t } = usePlexLang();

  const ordinaryItems = [t.why.ordinary1, t.why.ordinary2, t.why.ordinary3, t.why.ordinary4, t.why.ordinary5, t.why.ordinary6];
  const chelatedItems = [t.why.chelated1, t.why.chelated2, t.why.chelated3, t.why.chelated4, t.why.chelated5, t.why.chelated6];

  return (
    <section className="relative bg-[#F8F6F0] py-28 overflow-hidden">
      {/* Decorative number */}
      <div className="absolute bottom-8 right-8 text-[200px] font-black text-[#0A1628]/[0.025] select-none pointer-events-none leading-none">
        05
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#0A1628]/6 border border-[#0A1628]/12 text-[#0A1628] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            {t.why.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-[1.1] tracking-tight mb-5"
          >
            {t.why.headline1}
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#8B6914] bg-clip-text text-transparent">
              {t.why.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.why.subheadline}
          </motion.p>
        </div>

        {/* Comparison columns */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Conventional — dark */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0A1628] rounded-2xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">{t.why.ordinaryTitle}</h3>
            </div>

            <ul className="flex flex-col gap-4">
              {ordinaryItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-400/80 mt-0.5">
                    <XIcon />
                  </span>
                  <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Nurio Plex — gold border */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-2xl p-8 border-2 border-[#C9A84C]/40 overflow-hidden"
          >
            {/* Gold glow */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-80" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-between gap-3 mb-7">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#060F1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-[#0A1628] font-bold text-lg">{t.why.chelatedTitle}</h3>
                </div>

                {/* Nurio Plex badge */}
                <span className="hidden sm:flex items-center gap-1.5 bg-[#0A1628] rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-[10px] font-bold tracking-wider uppercase">Nurio Plex</span>
                </span>
              </div>

              <ul className="flex flex-col gap-4">
                {chelatedItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#C9A84C] mt-0.5">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

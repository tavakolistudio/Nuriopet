'use client';

import { motion } from 'framer-motion';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

export default function PlexScientific() {
  const { t } = usePlexLang();

  const cards = [
    { title: t.scientific.card1Title, desc: t.scientific.card1Desc },
    { title: t.scientific.card2Title, desc: t.scientific.card2Desc },
    { title: t.scientific.card3Title, desc: t.scientific.card3Desc },
  ];

  const cardIcons = [
    // Atom / molecule icon
    <svg key="a" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c0 3.313-3.134 6-7 6s-7-2.687-7-6 3.134-6 7-6 7 2.687 7 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c0 3.313 3.134 6 7 6s7-2.687 7-6-3.134-6-7-6-7 2.687-7 6z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>,
    // Chart bar icon
    <svg key="b" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>,
    // Building/professional icon
    <svg key="c" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>,
  ];

  return (
    <section className="relative bg-[#060F1E] py-28 overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-8 left-8 text-[200px] font-black text-white/[0.018] select-none pointer-events-none leading-none">
        06
      </div>

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#060F1E] to-[#030912]" />

      {/* Gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-[#C9A84C]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/8 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            {t.scientific.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            {t.scientific.headline1}
            <br />
            <span className="bg-gradient-to-r from-[#E8C97A] to-[#C9A84C] bg-clip-text text-transparent">
              {t.scientific.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.scientific.subheadline}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#0D2040]/60 border border-white/8 hover:border-[#C9A84C]/20 rounded-2xl p-7 transition-all duration-300 group"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] mb-5">
                {cardIcons[i]}
              </div>

              <h3 className="text-white font-bold text-base mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white/3 border border-white/6 rounded-xl px-6 py-4 flex items-start gap-3"
        >
          <svg className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-slate-500 text-xs leading-relaxed">{t.scientific.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PlexProblem() {
  const { t } = usePlexLang();

  const cards = [
    { title: t.problem.card1Title, desc: t.problem.card1Desc, type: t.problem.card1Type },
    { title: t.problem.card2Title, desc: t.problem.card2Desc, type: t.problem.card2Type },
    { title: t.problem.card3Title, desc: t.problem.card3Desc, type: t.problem.card3Type },
  ];

  return (
    <section className="relative bg-[#F8F6F0] py-28 overflow-hidden">
      {/* Decorative large number */}
      <div className="absolute top-8 right-8 text-[200px] font-black text-[#0A1628]/[0.025] select-none pointer-events-none leading-none">
        01
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A1628 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-200/60 text-red-700 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 1a4 4 0 110 8 4 4 0 010-8zm0 2a.5.5 0 00-.5.5V6a.5.5 0 001 0V4.5A.5.5 0 006 4zm0 4a.5.5 0 100 1 .5.5 0 000-1z" />
            </svg>
            {t.problem.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-[1.1] tracking-tight mb-6"
          >
            {t.problem.headline1}
            <br />
            <span className="text-red-600">{t.problem.headline2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            {t.problem.subheadline}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className={`relative rounded-2xl p-8 border overflow-hidden group ${
                card.type === 'insight'
                  ? 'bg-[#060F1E] border-[#C9A84C]/30'
                  : 'bg-white border-slate-200/80 hover:border-red-200 transition-colors duration-200'
              }`}
            >
              {/* Card accent top border */}
              <div
                className={`absolute top-0 inset-x-0 h-0.5 ${
                  card.type === 'insight'
                    ? 'bg-gradient-to-r from-[#C9A84C] to-[#8B6914]'
                    : 'bg-gradient-to-r from-red-500/50 to-orange-400/30'
                }`}
              />

              {/* Icon */}
              <div className="mb-5">
                {card.type === 'insight' ? (
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                )}
              </div>

              <h3 className={`text-lg font-bold mb-3 ${card.type === 'insight' ? 'text-[#E8C97A]' : 'text-[#0A1628]'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${card.type === 'insight' ? 'text-slate-300' : 'text-slate-600'}`}>
                {card.desc}
              </p>

              {/* Insight card decorative dot grid */}
              {card.type === 'insight' && (
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

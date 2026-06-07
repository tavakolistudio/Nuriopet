'use client';

import { motion } from 'framer-motion';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

function GrowthIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}
function ImmunityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function ReproIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}
function FeedIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}
function QualityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}
function StressIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

const icons = [<GrowthIcon key="g" />, <ImmunityIcon key="i" />, <ReproIcon key="r" />, <FeedIcon key="f" />, <QualityIcon key="q" />, <StressIcon key="s" />];

export default function PlexBenefits() {
  const { t } = usePlexLang();

  const items = [
    { title: t.benefits.item1Title, desc: t.benefits.item1Desc },
    { title: t.benefits.item2Title, desc: t.benefits.item2Desc },
    { title: t.benefits.item3Title, desc: t.benefits.item3Desc },
    { title: t.benefits.item4Title, desc: t.benefits.item4Desc },
    { title: t.benefits.item5Title, desc: t.benefits.item5Desc },
    { title: t.benefits.item6Title, desc: t.benefits.item6Desc },
  ];

  return (
    <section id="benefits" className="relative bg-white py-28 overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-8 left-8 text-[200px] font-black text-[#0A1628]/[0.025] select-none pointer-events-none leading-none">
        03
      </div>

      {/* Gold gradient top edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/8 border border-[#C9A84C]/20 text-[#8B6914] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            {t.benefits.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-[1.1] tracking-tight mb-5"
          >
            {t.benefits.headline1}
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#8B6914] bg-clip-text text-transparent">
              {t.benefits.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.benefits.subheadline}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#F8F6F0] hover:bg-white border border-slate-100 hover:border-[#C9A84C]/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/10"
            >
              {/* Top gold accent */}
              <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="mb-5 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#060F1E] transition-all duration-300">
                  {icons[i]}
                </div>
                <span className="text-4xl font-black text-[#0A1628]/[0.04]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-[#0A1628] font-bold text-base mb-3 leading-snug group-hover:text-[#0A1628] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

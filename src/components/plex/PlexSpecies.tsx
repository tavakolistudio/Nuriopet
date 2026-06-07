'use client';

import { motion } from 'framer-motion';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

function DairyCowIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="30" rx="13" ry="9" />
      <path d="M11 30v4a4 4 0 004 4h18a4 4 0 004-4v-4" />
      <path d="M14 30l-3-8M34 30l3-8" />
      <ellipse cx="24" cy="19" rx="7" ry="6" />
      <path d="M17 19l-2-5M31 19l2-5" />
      <circle cx="22" cy="18" r="1" fill="currentColor" />
      <circle cx="26" cy="18" r="1" fill="currentColor" />
      <path d="M20 34h8M22 38h4" />
    </svg>
  );
}

function BeefCattleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="25" cy="29" rx="14" ry="10" />
      <path d="M11 29v5a4 4 0 004 4h20a4 4 0 004-4v-5" />
      <path d="M13 29l-2-7M37 29l2-7" />
      <ellipse cx="25" cy="19" rx="8" ry="6" />
      <path d="M17 17l-4-4M33 17l4-4" />
      <circle cx="22" cy="18" r="1" fill="currentColor" />
      <circle cx="28" cy="18" r="1" fill="currentColor" />
      <path d="M22 23c0 2 6 2 6 0" />
      <path d="M19 33h12M21 38h6" />
    </svg>
  );
}

function SheepIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="24" r="6" />
      <circle cx="26" cy="22" r="5" />
      <circle cx="32" cy="26" r="5" />
      <circle cx="22" cy="29" r="6" />
      <ellipse cx="25" cy="31" rx="10" ry="6" />
      <path d="M15 37v4M19 37v4M28 37v4M32 37v4" />
      <ellipse cx="16" cy="20" rx="4" ry="4" />
      <circle cx="14" cy="19" r="1" fill="currentColor" />
      <path d="M12 18l-3-3M13 16l-2-4" />
    </svg>
  );
}

function GoatIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="30" rx="11" ry="8" />
      <path d="M13 30v5a3 3 0 003 3h16a3 3 0 003-3v-5" />
      <ellipse cx="24" cy="21" rx="6" ry="6" />
      <path d="M18 19l-3-5M30 19l3-5" />
      <path d="M21 15l-2-4M27 15l2-4" />
      <circle cx="21" cy="21" r="1" fill="currentColor" />
      <circle cx="27" cy="21" r="1" fill="currentColor" />
      <path d="M16 33h16M19 37h10" />
    </svg>
  );
}

function FarmIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 42V22l16-14 16 14v20H8z" />
      <path d="M18 42v-12h12v12" />
      <path d="M8 22h32" />
      <path d="M24 8v14" />
      <circle cx="36" cy="18" r="4" />
      <path d="M36 14v-4M36 26v-4M32 18h-4M44 18h-4M33.2 15.2l-2.8-2.8M41.6 23.6l-2.8-2.8M33.2 20.8l-2.8 2.8M41.6 12.4l-2.8 2.8" />
    </svg>
  );
}

const speciesIcons = [
  <DairyCowIcon key="dairy" />,
  <BeefCattleIcon key="beef" />,
  <SheepIcon key="sheep" />,
  <GoatIcon key="goat" />,
  <FarmIcon key="farm" />,
];

export default function PlexSpecies() {
  const { t } = usePlexLang();

  const items = [
    { name: t.species.item1Name, desc: t.species.item1Desc },
    { name: t.species.item2Name, desc: t.species.item2Desc },
    { name: t.species.item3Name, desc: t.species.item3Desc },
    { name: t.species.item4Name, desc: t.species.item4Desc },
    { name: t.species.item5Name, desc: t.species.item5Desc },
  ];

  return (
    <section id="species" className="relative bg-[#071A10] py-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A10] via-[#0B2D1C] to-[#071A10]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0B3B2A]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0B3B2A]/40 rounded-full blur-3xl" />
      </div>

      {/* Hex pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L30 8.66L45 0L60 8.66V26L45 34.64L30 26L15 34.64L0 26V8.66L15 0z' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            {t.species.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            {t.species.headline1}
            <br />
            <span className="bg-gradient-to-r from-[#E8C97A] to-[#C9A84C] bg-clip-text text-transparent">
              {t.species.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8FBD9E] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.species.subheadline}
          </motion.p>
        </div>

        {/* Species cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white/5 hover:bg-white/8 border border-white/8 hover:border-[#C9A84C]/30 rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-default transition-all duration-300"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon container */}
              <div className="w-20 h-20 rounded-2xl bg-[#C9A84C]/8 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/12 transition-colors duration-300">
                {speciesIcons[i]}
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{item.name}</h3>
                <p className="text-[#8FBD9E]/80 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

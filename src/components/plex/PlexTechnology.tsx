'use client';

import { motion } from 'framer-motion';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function PathIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-4-7.5-9.5-7.5-9.5S4.5 8 4.5 12a7.5 7.5 0 0015 0z" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

const icons = [<ShieldIcon key="s" />, <PathIcon key="p" />, <DropIcon key="d" />, <LightningIcon key="l" />];

export default function PlexTechnology() {
  const { t } = usePlexLang();

  const steps = [
    { number: t.technology.step1Number, title: t.technology.step1Title, desc: t.technology.step1Desc },
    { number: t.technology.step2Number, title: t.technology.step2Title, desc: t.technology.step2Desc },
    { number: t.technology.step3Number, title: t.technology.step3Title, desc: t.technology.step3Desc },
    { number: t.technology.step4Number, title: t.technology.step4Title, desc: t.technology.step4Desc },
  ];

  return (
    <section id="technology" className="relative bg-[#0A1628] py-28 overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-8 right-8 text-[200px] font-black text-white/[0.018] select-none pointer-events-none leading-none">
        02
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Green accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0B3B2A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            {t.technology.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            {t.technology.headline1}
            <br />
            <span className="bg-gradient-to-r from-[#E8C97A] to-[#C9A84C] bg-clip-text text-transparent">
              {t.technology.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.technology.subheadline}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[54px] left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C]/60 to-[#C9A84C]/20 origin-left"
              style={{ transformOrigin: 'left center' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Vertical connector line (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[27px] top-[60px] w-px h-8 bg-gradient-to-b from-[#C9A84C]/40 to-transparent" />
                )}

                <div className="bg-[#0D2040]/80 border border-white/8 hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-all duration-300 h-full group-hover:bg-[#0D2040]">
                  {/* Icon circle */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/15 transition-colors duration-300">
                      {icons[i]}
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center">
                      <span className="text-[#060F1E] text-[9px] font-black">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

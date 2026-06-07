'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const cards = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="14" strokeDasharray="3 4" />
        <circle cx="20" cy="8" r="3" fill="currentColor" stroke="none" />
        <circle cx="30" cy="30" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="10" cy="30" r="2.5" fill="currentColor" stroke="none" />
        <path d="M20 12v-4M26.5 26.5l2.5 2.5M13.5 26.5l-2.5 2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Daha Yüksek Biyoyararlanım',
    description:
      'Şelat yapısı, minerallerin sindirim sürecini daha iyi geçmesini desteklemek amacıyla tasarlanmıştır. Bu tasarım, standart inorganik mineral kaynaklarına kıyasla daha iyi biyoyararlanım potansiyeli sunmaktadır.',
    highlight: 'Gelişmiş emilim potansiyeli',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4L8 10v10c0 8 5 14 12 16 7-2 12-8 12-16V10L20 4z" strokeLinejoin="round" />
        <path d="M14 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sindirim Sürecinde Daha İyi Stabilite',
    description:
      'Normal mineral takviyeleri sindirim ortamında yapısal değişikliklere uğrayabilir. Şelatlı form, bu sürece karşı daha dayanıklı bir yapı sunmak amacıyla geliştirilmiştir.',
    highlight: 'Formüle edilmiş dayanıklılık',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 6C12 6 6 12 6 20s6 14 14 14 14-6 14-14S28 6 20 6z" />
        <path d="M20 12v8l5 3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
        <path d="M12 20h-3M31 20h-3M20 12V9M20 31v-3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Daha Hedefli Mineral Desteği',
    description:
      'Her mineral, spesifik bir amino asit veya organik bileşikle kompleks oluşturur. Bu yaklaşım, genel mineral karışımlarına kıyasla daha hedefe yönelik bir destek stratejisi sunar.',
    highlight: 'Spesifik formülasyon yaklaşımı',
  },
];

export default function WhyChelated() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="teknoloji" className="section-py bg-white" ref={ref}>
      <div className="container-xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge bg-brand-green-50 text-brand-green-700 border border-brand-green-200 mb-4">
            Teknoloji
          </span>
          <h2 className="section-title mb-4">
            Şelat Teknolojisi Neden Önemli?
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Normal mineral takviyeleri sindirim sürecinde stabilitelerini kaybedebilir.
            Şelatlı mineraller, bu sürece karşı daha dayanıklı bir yapıya sahip olmak üzere formüle edilmiştir.
          </p>
        </motion.div>

        {/* Comparison visual */}
        <motion.div
          className="mb-14 p-6 md:p-8 rounded-2xl bg-brand-beige border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Standard */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
                Standart Mineral Takviyesi
              </h3>
              <div className="relative h-12 rounded-xl bg-gray-200 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[40%] bg-gray-400 rounded-xl flex items-center justify-end pr-3">
                  <span className="text-xs font-semibold text-white">~40%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                İnorganik mineraller sindirim ortamında reaksiyona girebilir; emilim potansiyeli sınırlı kalabilir.
              </p>
            </div>
            {/* Chelated */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-brand-green-700">
                Şelatlı Mineral — Nurio
              </h3>
              <div className="relative h-12 rounded-xl bg-brand-green-100 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[80%] bg-brand-green-700 rounded-xl flex items-center justify-end pr-3">
                  <span className="text-xs font-semibold text-white">Daha Yüksek Potansiyel</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Şelat yapısı, sindirim sürecinde daha iyi stabilite ve biyoyararlanım potansiyeli sunmak üzere tasarlanmıştır.
              </p>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mt-4 text-center">
            * Gösterim amaçlıdır. Bireysel sonuçlar değişkenlik gösterebilir.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="card p-7 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green-50 text-brand-green-700 flex items-center justify-center group-hover:bg-brand-green-100 transition-colors">
                {card.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-brand-green-700 tracking-wide">
                  {card.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

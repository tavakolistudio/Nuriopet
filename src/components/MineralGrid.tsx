'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { minerals } from '@/data/products';
import type { Mineral } from '@/types';

const categoryConfig = {
  macro: { label: 'Makro Mineral', color: '#1B4D3E', bg: '#edf5f0', border: '#9dcaaf' },
  micro: { label: 'Mikro Mineral', color: '#1C2B4A', bg: '#eef1f7', border: '#a3b3d6' },
  trace: { label: 'Eser Element', color: '#7c3a0e', bg: '#fff4e6', border: '#f0c38e' },
};

function formatPpm(ppm: number): string {
  if (ppm >= 1000) return `${(ppm / 1000).toLocaleString('tr-TR')}k`;
  return ppm.toLocaleString('tr-TR');
}

function MineralCard({ mineral, index, inView }: { mineral: Mineral; index: number; inView: boolean }) {
  const cfg = categoryConfig[mineral.category];
  const maxPpm = 100000;
  const barWidth = Math.max((Math.log10(mineral.ppm + 1) / Math.log10(maxPpm + 1)) * 100, 8);

  return (
    <motion.div
      className="rounded-xl border p-4 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-200"
      style={{ background: cfg.bg, borderColor: cfg.border }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white mb-2"
            style={{ background: cfg.color }}
          >
            {mineral.symbol}
          </div>
          <p className="text-sm font-semibold text-gray-900">{mineral.nameTR}</p>
          <p className="text-xs text-gray-500">{mineral.name}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold" style={{ color: cfg.color }}>
            {formatPpm(mineral.ppm)}
          </p>
          <p className="text-xs text-gray-400">ppm</p>
        </div>
      </div>
      {/* Relative concentration bar */}
      <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${barWidth}%`, background: cfg.color }}
        />
      </div>
    </motion.div>
  );
}

export default function MineralGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const macros = minerals.filter((m) => m.category === 'macro');
  const micros  = minerals.filter((m) => m.category === 'micro');
  const traces  = minerals.filter((m) => m.category === 'trace');

  return (
    <section id="formulasyon" className="section-py bg-brand-cream" ref={ref}>
      <div className="container-xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge bg-white text-gray-600 border border-gray-200 mb-4">
            Formülasyon
          </span>
          <h2 className="section-title mb-4">
            Bilimsel Mineral Kompozisyonu
          </h2>
          <p className="section-subtitle mx-auto text-center">
            12 aktif mineral, dengeli ppm değerleriyle şelat teknolojisi kullanılarak formüle edilmiştir.
            Her iki ürün (Nurio Dog ve Nurio Cat) aynı mineral profiline sahiptir.
          </p>
        </motion.div>

        {/* Category sections */}
        {[
          { key: 'macro', list: macros, title: 'Makro Mineraller' },
          { key: 'micro', list: micros, title: 'Mikro Mineraller' },
          { key: 'trace', list: traces, title: 'Eser Elementler' },
        ].map(({ key, list, title }) => (
          <div key={key} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: categoryConfig[key as keyof typeof categoryConfig].color }}
              />
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                {title}
              </h3>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {list.map((m, i) => (
                <MineralCard key={m.symbol} mineral={m} index={i} inView={inView} />
              ))}
            </div>
          </div>
        ))}

        {/* Full table */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <details className="group">
            <summary className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 group-open:rotate-90 transition-transform"
              >
                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L9.19 8 6.22 5.28a.75.75 0 010-1.06z" />
              </svg>
              Tam Mineral Tablosunu Görüntüle
            </summary>
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider">Sembol</th>
                    <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider">Mineral</th>
                    <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Bilimsel Ad</th>
                    <th className="text-right px-5 py-3 font-semibold text-xs uppercase tracking-wider">Değer (ppm)</th>
                    <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Kategori</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {minerals.map((m) => {
                    const cfg = categoryConfig[m.category];
                    return (
                      <tr key={m.symbol} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4">
                          <span
                            className="inline-flex w-8 h-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                            style={{ background: cfg.color }}
                          >
                            {m.symbol}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-semibold text-gray-900">{m.nameTR}</td>
                        <td className="px-5 py-4 text-gray-500 hidden sm:table-cell">{m.name}</td>
                        <td className="px-5 py-4 text-right font-bold" style={{ color: cfg.color }}>
                          {m.ppm.toLocaleString('tr-TR')}
                        </td>
                        <td className="px-5 py-4 hidden md:table-cell">
                          <span
                            className="badge text-[10px]"
                            style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
                          >
                            {cfg.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </details>
        </motion.div>

        <motion.p
          className="text-xs text-gray-400 text-center mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Tüm değerler ppm (parts per million — mg/kg) cinsinden verilmiştir. Her iki ürün aynı mineral profiline sahiptir.
        </motion.p>
      </div>
    </section>
  );
}

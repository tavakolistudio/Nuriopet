'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weightRanges = [
  { label: '5 kg altı',   value: 'under5',  dose: '0,25 g', sachets: { dog: '½ saşe (0,5 g saşeyi ikiye bölün)', cat: '1 saşe' } },
  { label: '5–20 kg',    value: '5to20',   dose: '0,5 g',  sachets: { dog: '1 saşe',                              cat: '2 saşe' } },
  { label: '20–40 kg',   value: '20to40',  dose: '0,75 g', sachets: { dog: '1,5 saşe',                            cat: '3 saşe' } },
  { label: '40 kg üzeri', value: 'over40',  dose: '1 g',    sachets: { dog: '2 saşe',                              cat: '4 saşe' } },
];

type Animal = 'dog' | 'cat';
type WeightValue = typeof weightRanges[number]['value'];

export default function DosageCalculator() {
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [weight, setWeight] = useState<WeightValue | null>(null);

  const result = weightRanges.find((r) => r.value === weight);
  const isDog = animal === 'dog';

  return (
    <section id="dozaj" className="section-py">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase
                             bg-teal-500/15 text-teal-300 border border-teal-400/30 mb-4">
              Dozaj Rehberi
            </span>
            <h2 className="section-title mb-4">
              Haftalık Dozaj Hesaplayıcı
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Evcil hayvanınızın türünü ve ağırlık aralığını seçerek önerilen haftalık dozu öğrenin.
            </p>
          </div>

          <div className="card p-8 md:p-10">
            {/* Step 1: Animal type */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                Adım 1 — Evcil Hayvan Türü
              </p>
              <div className="grid grid-cols-2 gap-3">
                {(['dog', 'cat'] as Animal[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => { setAnimal(type); setWeight(null); }}
                    className={`p-5 rounded-xl border-2 flex flex-col items-center gap-3 transition-all duration-200 cursor-pointer ${
                      animal === type
                        ? type === 'dog'
                          ? 'border-teal-500 bg-teal-500/15'
                          : 'border-blue-500 bg-blue-500/15'
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                    }`}
                    aria-pressed={animal === type}
                  >
                    <span className="text-4xl" aria-hidden="true">
                      {type === 'dog' ? '🐕' : '🐈'}
                    </span>
                    <div>
                      <p className={`text-sm font-bold ${animal === type ? (type === 'dog' ? 'text-teal-400' : 'text-blue-400') : 'text-white/70'}`}>
                        {type === 'dog' ? 'Nurio Dog' : 'Nurio Cat'}
                      </p>
                      <p className="text-xs text-white/40">
                        {type === 'dog' ? '12 × 0,5 g saşe' : '12 × 0,25 g saşe'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Weight range */}
            <AnimatePresence>
              {animal && (
                <motion.div
                  key="weight-step"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 overflow-hidden"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                    Adım 2 — Vücut Ağırlığı
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {weightRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setWeight(range.value as WeightValue)}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          weight === range.value
                            ? isDog
                              ? 'border-teal-500 bg-teal-500 text-white'
                              : 'border-blue-500 bg-blue-600 text-white'
                            : 'border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:bg-white/8'
                        }`}
                        aria-pressed={weight === range.value}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result */}
            <AnimatePresence mode="wait">
              {animal && weight && result && (
                <motion.div
                  key={`${animal}-${weight}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-2xl p-6 border ${
                    isDog
                      ? 'bg-teal-500/10 border-teal-400/30'
                      : 'bg-blue-500/10 border-blue-400/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: isDog ? 'rgba(45,212,191,0.2)' : 'rgba(96,165,250,0.2)' }}
                    >
                      {isDog ? '🐕' : '🐈'}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/45 mb-1">
                        Önerilen Haftalık Doz
                      </p>
                      <p
                        className="text-3xl font-bold mb-1"
                        style={{ color: isDog ? '#2dd4bf' : '#60a5fa', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {result.dose}
                      </p>
                      <p className="text-sm text-white/65">
                        {result.sachets[animal]}
                        &nbsp;·&nbsp; Haftada 1 kez
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Ürün</p>
                      <p className={`text-sm font-bold ${isDog ? 'text-teal-400' : 'text-blue-400'}`}>
                        {isDog ? 'Nurio Dog' : 'Nurio Cat'}
                      </p>
                      <p className="text-xs text-white/40">
                        {isDog ? '12 × 0,5 g' : '12 × 0,25 g'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Disclaimer */}
            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-400/25">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <p className="text-xs text-amber-300/85 leading-relaxed">
                  <span className="font-semibold text-amber-300">Önemli Not:</span> Bu bilgiler genel kullanım rehberidir.
                  Özel sağlık durumlarında, kronik hastalıklarda veya ilaç kullanımı söz konusunda
                  veteriner hekiminize danışınız. Kullanım sıklığı yalnızca veteriner önerisiyle artırılmalıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductMockup from './ProductMockup';
import DosageTable from './DosageTable';

export default function ProductDetail() {
  const [active, setActive] = useState<'dog' | 'cat'>('dog');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const product = products.find((p) => p.animal === active)!;
  const isDog = product.animal === 'dog';
  const accentText = isDog ? 'text-teal-400' : 'text-blue-400';
  const accentBg = isDog ? 'bg-teal-500/15' : 'bg-blue-500/15';
  const accentBullet = isDog ? 'bg-teal-500' : 'bg-blue-500';

  return (
    <section className="section-py" ref={ref}>
      <div className="container-xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">Ürün Detayları</h2>
          <p className="section-subtitle mx-auto text-center">
            Her ürünün içerik, dozaj ve kullanım bilgilerine detaylı ulaşın.
          </p>
        </motion.div>

        {/* Product switcher tabs */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex rounded-xl bg-white/5 border border-white/10 p-1 gap-1">
            {(['dog', 'cat'] as const).map((type) => {
              const isSelected = active === type;
              const p = products.find((x) => x.animal === type)!;
              return (
                <button
                  key={type}
                  onClick={() => setActive(type)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? type === 'dog'
                        ? 'bg-teal-500 text-white shadow-sm'
                        : 'bg-blue-600 text-white shadow-sm'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/8'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span aria-hidden="true">{type === 'dog' ? '🐕' : '🐈'}</span>
                  {p.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Product detail panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div id={product.id} className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.05] backdrop-blur-xl">
            {/* Header band */}
            <div
              className="px-8 py-10 flex flex-col md:flex-row items-center gap-8"
              style={{
                background: `linear-gradient(135deg, ${product.accentColor}12 0%, transparent 100%)`,
              }}
            >
              {/* Product images */}
              <div className="flex items-end gap-4 flex-shrink-0">
                <ProductMockup product={product} size="md" />
                {product.imageDetail && (
                  <div className="w-28 h-36 relative rounded-xl overflow-hidden border border-white/10 shadow-lg hidden sm:block">
                    <Image
                      src={product.imageDetail}
                      alt={`${product.name} saşe detayı`}
                      fill
                      className="object-cover object-center"
                      sizes="112px"
                    />
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-2">
                  {product.category}
                </p>
                <h3
                  className={`text-3xl md:text-4xl font-bold ${accentText} mb-4`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {product.name}
                </h3>
                <p className="text-white/65 leading-relaxed max-w-xl">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${accentBg} border border-white/10`}>
                    <svg viewBox="0 0 16 16" fill="currentColor" className={`w-4 h-4 ${accentText}`}>
                      <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM6 8a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                    <span className={`text-xs font-semibold ${accentText}`}>
                      {product.packaging.sachets}
                    </span>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${accentBg} border border-white/10`}>
                    <svg viewBox="0 0 16 16" fill="currentColor" className={`w-4 h-4 ${accentText}`}>
                      <path d="M8 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 3a3 3 0 116 0v2h1.5A1.5 1.5 0 0114 6.5v7A1.5 1.5 0 0112.5 15h-9A1.5 1.5 0 012 13.5v-7A1.5 1.5 0 013.5 5H5V3z" />
                    </svg>
                    <span className={`text-xs font-semibold ${accentText}`}>
                      Net {product.packaging.size}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
              {/* Benefits */}
              <div className="p-8">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                  Desteklediği Alanlar
                </h4>
                <ul className="space-y-3">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${accentBg}`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 12 12" fill="none" className={`w-3 h-3 ${accentText}`} stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-white/70">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Usage */}
                <div className="mt-8 pt-8 border-t border-white/8">
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                    Kullanım
                  </h4>
                  <ul className="space-y-2.5">
                    {product.usage.map((u) => (
                      <li key={u} className="flex items-start gap-3 text-sm text-white/65">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBullet}`} aria-hidden="true" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dosage table */}
              <div className="p-8">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                  Haftalık Dozaj Rehberi
                </h4>
                <DosageTable
                  entries={product.dosage}
                  accentColor={product.accentColor}
                  animal={product.animal}
                />

                <div className="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-400/25">
                  <p className="text-xs text-amber-300/90 leading-relaxed">
                    <span className="font-semibold text-amber-300">Önemli:</span> Bu bilgiler genel kullanım rehberidir.
                    Özel sağlık durumlarında veteriner hekiminize danışınız. Veteriner önerisiyle
                    haftada 2 kez kullanılabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

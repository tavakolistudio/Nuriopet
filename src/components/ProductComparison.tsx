'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { products } from '@/data/products';
import ProductMockup from './ProductMockup';

export default function ProductComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="urunler" className="section-py" ref={ref}>
      <div className="container-xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase
                           bg-white/10 text-white/75 border border-white/20 mb-4">
            Ürünler
          </span>
          <h2 className="section-title mb-4">
            Türüne Özel Formülasyon
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Kedi ve köpekler için ayrı ayrı geliştirilmiş, farklı saşe boyutlarına ve dozaj miktarlarına sahip iki farklı ürün.
          </p>
        </motion.div>

        {/* Both-products lifestyle image */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Image
            src="/images/both-products.jpg"
            alt="Nurio Cat ve Nurio Dog — her ikisi birlikte"
            width={900}
            height={700}
            className="w-full h-80 object-cover object-bottom"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, i) => {
            const isDog = product.animal === 'dog';
            const accentText = isDog ? 'text-teal-400' : 'text-blue-400';
            const accentBadgeBg = isDog ? 'bg-teal-500/15 text-teal-300 border-teal-400/30' : 'bg-blue-500/15 text-blue-300 border-blue-400/30';
            const btnClass = isDog
              ? 'bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-900/30'
              : 'bg-blue-600/80 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30';

            return (
              <motion.article
                key={product.id}
                className="card overflow-hidden group"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card header with mockup */}
                <div
                  className="p-8 flex flex-col sm:flex-row items-center gap-6"
                  style={{
                    background: `linear-gradient(135deg, ${product.accentColor}18 0%, ${product.accentColor}05 100%)`,
                  }}
                >
                  <div className="flex-shrink-0">
                    <ProductMockup product={product} size="sm" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border mb-3 ${accentBadgeBg}`}>
                      {product.category}
                    </span>
                    <h3 className={`text-2xl font-bold ${accentText} mb-2`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col gap-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                      Desteklediği Alanlar
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-white/65">
                          <span className={`mt-0.5 flex-shrink-0 ${accentText}`} aria-hidden="true">
                            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                              <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging & dosage summary */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 border border-white/8 p-4">
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Ambalaj</p>
                      <p className="text-sm font-semibold text-white">{product.packaging.size}</p>
                      <p className="text-xs text-white/50 mt-0.5">{product.packaging.sachets}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/8 p-4">
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Kullanım</p>
                      <p className="text-sm font-semibold text-white">Haftada 1 kez</p>
                      <p className="text-xs text-white/50 mt-0.5">Vet. önerisiyle 2×</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`#${product.id}`}
                    className={`inline-flex items-center justify-center gap-2 w-full mt-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${btnClass}`}
                  >
                    {product.name} Detaylarını İncele
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

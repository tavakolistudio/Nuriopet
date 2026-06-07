'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { faqItems } from '@/data/products';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="sss" className="section-py bg-brand-beige" ref={ref}>
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="badge bg-white text-gray-600 border border-gray-200 mb-4">
              Sık Sorulan Sorular
            </span>
            <h2 className="section-title mb-4">
              Merak Edilenler
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Nurio ve şelatlı mineral teknolojisi hakkında sıkça sorulan soruların yanıtları.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 p-6 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-4 flex-1 min-w-0">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-green-50 text-brand-green-700 flex items-center justify-center text-xs font-bold mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-brand-green-700 transition-colors">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
                        isOpen
                          ? 'bg-brand-green-700 border-brand-green-700 rotate-180'
                          : 'border-gray-300 group-hover:border-brand-green-400'
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`w-3 h-3 transition-colors ${isOpen ? 'text-white' : 'text-gray-500'}`}
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[4.25rem]">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-500">
              Başka sorularınız mı var?{' '}
              <a
                href="https://www.instagram.com/nuriopet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green-700 font-semibold hover:underline"
              >
                Instagram'dan bize ulaşın
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

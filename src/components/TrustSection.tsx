'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
        <path d="M24 6L10 13v11c0 10 6 17 14 20 8-3 14-10 14-20V13L24 6z" strokeLinejoin="round" />
        <path d="M17 24l5 5 9-9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Bilimsel Formülasyon',
    description:
      'Her mineral, şelat teknolojisiyle formüle edilmiş olup ppm değerleri açıkça belirtilmiştir. Belirsiz ya da genel "mineral karışımı" ifadesi kullanılmamaktadır.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
        <rect x="10" y="8" width="28" height="34" rx="4" />
        <path d="M17 18h14M17 24h14M17 30h8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Net Dozaj Bilgisi',
    description:
      'Ağırlık aralığına göre net dozaj tablosu sunulmaktadır. "İstediğiniz kadar kullanın" gibi muğlak kullanım talimatları içermez.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
        <path d="M16 24c0-8 6-14 8-14s8 6 8 14" />
        <ellipse cx="24" cy="28" rx="8" ry="6" />
        <path d="M18 33l-4 6M30 33l4 6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Türe Özel Ürün Yapısı',
    description:
      'Kedi ve köpekler için ayrı formülasyon ve ambalaj boyutu. İki farklı tür için tek bir "genel" ürün kullanılmamaktadır.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 16v8l5 3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Düzenli Kullanım Frekansı',
    description:
      'Haftada bir kullanım, günlük takviye gerektirmez. Kullanım sıklığı artırımı yalnızca veteriner öneriyle yapılabilir.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 20h4M32 20h4M24 12v4M24 32v4" strokeLinecap="round" />
        <path d="M16 16l3 3M29 29l3 3M16 32l3-3M29 19l3-3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" />
      </svg>
    ),
    title: 'Abartısız İletişim',
    description:
      '"Tedavi eder", "iyileştirir", "mucize sonuç", "garanti" gibi ifadeler kullanılmamaktadır. Tüm iddialar "destekler" düzeyinde tutulmaktadır.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.75">
        <path d="M24 8a16 16 0 100 32A16 16 0 0024 8z" />
        <path d="M24 16a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" stroke="none" />
        <path d="M24 22v10" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: 'Şeffaf Ürün Bilgisi',
    description:
      'İçerik, ambalaj, dozaj ve kullanım koşulları açıkça paylaşılmaktadır. Belirsiz bileşen listesi ya da gizli formülasyon bulunmamaktadır.',
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section-py bg-gray-950" ref={ref}>
      <div className="container-xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge bg-white/10 text-white/80 border border-white/20 mb-4">
            Güven & Güvenlik
          </span>
          <h2 className="section-title text-white mb-4">
            Neden Nurio'ya Güvenebilirsiniz?
          </h2>
          <p className="section-subtitle mx-auto text-center text-gray-400">
            Bilimsel şeffaflık, net dozaj ve abartısız iletişim — güvenin temelini bunlar oluşturur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col gap-4 hover:bg-white/8 transition-colors duration-200"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green-700/20 text-brand-green-400 flex items-center justify-center">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer banner */}
        <motion.div
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="font-semibold text-white">Yasal Uyarı:</span>{' '}
            Nurio bir ilaç değildir. Hastalıkların teşhisi, önlenmesi veya tedavisi amacıyla
            kullanılmaz ve kullanılmamalıdır. Tüm ürün iddiaları takviye niteliğinde olup
            veteriner hekimi tavsiyesinin yerini tutmaz. Evcil hayvanınızın sağlık durumu
            için veteriner hekiminize başvurunuz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

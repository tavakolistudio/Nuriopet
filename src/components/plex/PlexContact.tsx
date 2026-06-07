'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePlexLang } from '@/contexts/PlexLanguageContext';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-white border border-slate-200 focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/10 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200';

const labelClass = 'block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5';

export default function PlexContact() {
  const { t } = usePlexLang();

  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    location: '', animalType: '', message: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <section id="contact" className="relative bg-[#F8F6F0] py-28 overflow-hidden">
      {/* Decorative number */}
      <div className="absolute bottom-8 left-8 text-[200px] font-black text-[#0A1628]/[0.025] select-none pointer-events-none leading-none">
        07
      </div>

      {/* Top edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#0A1628]/6 border border-[#0A1628]/12 text-[#0A1628] text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
          >
            {t.contact.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-[1.1] tracking-tight mb-5"
          >
            {t.contact.headline1}
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#8B6914] bg-clip-text text-transparent">
              {t.contact.headline2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.contact.subheadline}
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bg-[#0A1628] rounded-2xl p-8 flex flex-col gap-7"
          >
            <div>
              <Image
                src="/images/logo.png"
                alt="Nurio Plex"
                width={130}
                height={48}
                className="h-9 w-auto object-contain mb-2"
              />
              <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest">Advanced Chelated Mineral Nutrition</p>
            </div>

            <div className="h-px bg-white/8" />

            <div>
              <h3 className="text-white font-semibold mb-2">{t.contact.infoTitle}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t.contact.infoDesc}</p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:info@nurioplex.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{t.footer.contactEmail}</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-[#C9A84C]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm">{t.footer.contactPhone}</span>
              </div>
            </div>

            {/* Target audience tags */}
            <div className="mt-auto">
              <div className="h-px bg-white/8 mb-6" />
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">For</p>
              <div className="flex flex-wrap gap-2">
                {['Livestock Farms', 'Veterinarians', 'Feed Companies', 'Nutrition Consultants'].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/8 text-slate-400 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-slate-100/80"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-5 text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#060F1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0A1628] font-bold text-xl mb-2">{t.contact.success}</h3>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t.contact.labelName}</label>
                    <input required type="text" value={form.name} onChange={set('name')} className={inputClass} placeholder="—" />
                  </div>
                  <div>
                    <label className={labelClass}>{t.contact.labelCompany}</label>
                    <input required type="text" value={form.company} onChange={set('company')} className={inputClass} placeholder="—" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t.contact.labelPhone}</label>
                    <input type="tel" value={form.phone} onChange={set('phone')} className={inputClass} placeholder="—" />
                  </div>
                  <div>
                    <label className={labelClass}>{t.contact.labelEmail}</label>
                    <input required type="email" value={form.email} onChange={set('email')} className={inputClass} placeholder="—" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t.contact.labelLocation}</label>
                    <input type="text" value={form.location} onChange={set('location')} className={inputClass} placeholder="—" />
                  </div>
                  <div>
                    <label className={labelClass}>{t.contact.labelAnimalType}</label>
                    <input
                      type="text"
                      value={form.animalType}
                      onChange={set('animalType')}
                      className={inputClass}
                      placeholder={t.contact.placeholderAnimalType}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t.contact.labelMessage}</label>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder={t.contact.placeholderMessage}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0A1628] hover:bg-[#162952] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm mt-1 disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.contact.submitting}
                    </>
                  ) : (
                    <>
                      {t.contact.submit}
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

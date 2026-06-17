import Link from 'next/link';
import { navLinks } from '@/data/products';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/20 backdrop-blur-sm">
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                className="w-10 h-10 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M8,48 C4,40 4,20 10,12 C15,5 24,4 32,6 C36,7 40,8 44,12 C50,17 54,26 52,36 C50,44 44,50 36,52 C28,54 12,56 8,48Z"
                  fill="#2dd4bf"
                  opacity="0.85"
                />
                <path
                  d="M22,52 L22,36 C22,28 26,22 32,22 C38,22 42,28 42,36 L42,52"
                  stroke="#0b1d13"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="52" cy="12" r="5" fill="#2dd4bf" opacity="0.85" />
              </svg>
              <div>
                <p className="text-lg font-bold leading-tight text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  nurio
                </p>
                <p className="text-xs font-bold tracking-widest text-teal-400 leading-tight">
                  PET
                </p>
              </div>
            </div>

            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Gelişmiş şelat teknolojisiyle formüle edilmiş kedi ve köpek mineral takviyesi.
            </p>

            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-teal-400/70">
              Gerçek Emilim • Gerçek Sonuç
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/nuriopet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Instagram @nuriopet"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://advanimal.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="advanimal.com.tr"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Site Haritası
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#satin-al" className="text-sm text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                Satın Al →
              </Link>
            </nav>
          </div>

          {/* Products + Contact column */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
                Ürünler
              </p>
              <div className="flex flex-col gap-3">
                <Link href="#nurio-dog" className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-2">
                  <span aria-hidden="true">🐕</span> Nurio Dog
                </Link>
                <Link href="#nurio-cat" className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-2">
                  <span aria-hidden="true">🐈</span> Nurio Cat
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
                İletişim
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/nuriopet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  @nuriopet
                </a>
                <a
                  href="https://advanimal.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  advanimal.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Nurio Pet. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/25 max-w-md md:text-right leading-relaxed">
            Bu ürün bir ilaç değildir. Hastalıkların önlenmesi veya tedavisi amacıyla kullanılmaz.
            Özel durumlarda veteriner hekiminize danışınız.
          </p>
        </div>

        {/* Studio credit */}
        <div className="mt-6 pt-4 border-t border-white/[0.03] text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            Powered by{' '}
            <span className="text-white/35 font-medium">TAVAKOLISTUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

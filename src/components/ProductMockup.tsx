import Image from 'next/image';
import type { Product } from '@/types';

interface Props {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
  imageSrc?: string;
}

const sizeMap = {
  sm: { box: 'w-36 h-48',  symbol: 'text-5xl', title: 'text-xl',  sub: 'text-[10px]', badge: 'text-[9px] px-2 py-0.5' },
  md: { box: 'w-48 h-64',  symbol: 'text-7xl', title: 'text-2xl', sub: 'text-xs',      badge: 'text-[10px] px-2.5 py-1' },
  lg: { box: 'w-56 h-72',  symbol: 'text-8xl', title: 'text-3xl', sub: 'text-sm',      badge: 'text-xs px-3 py-1' },
};

export default function ProductMockup({ product, size = 'md', imageSrc }: Props) {
  const s = sizeMap[size];
  const src = imageSrc ?? product.imagePath;

  /* ── Real product photo ── */
  if (src) {
    return (
      <div className={`${s.box} relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0`}>
        <Image
          src={src}
          alt={`${product.name} ambalajı`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 144px, 224px"
        />
        {/* subtle brand label at bottom */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
          <p className="text-white text-[10px] font-bold tracking-widest uppercase">
            {product.name}
          </p>
        </div>
      </div>
    );
  }

  /* ── CSS fallback (no image) ── */
  const isDog = product.animal === 'dog';
  const primaryColor = isDog ? '#1B4D3E' : '#1C2B4A';
  const accentColor  = isDog ? '#2D6A55' : '#2D4A7A';
  const lightColor   = isDog ? '#9dcaaf' : '#a3b3d6';

  return (
    <div
      className={`${s.box} relative rounded-2xl flex flex-col items-center justify-between overflow-hidden shadow-2xl select-none flex-shrink-0`}
      style={{ background: `linear-gradient(160deg, ${primaryColor} 0%, ${accentColor} 100%)` }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `radial-gradient(circle at 80% 20%, ${lightColor} 0%, transparent 50%)` }} />
      <div className="relative z-10 w-full flex justify-center pt-4">
        <span className={`${s.badge} rounded-full text-white font-bold tracking-[0.15em] uppercase`}
          style={{ background: 'rgba(255,255,255,0.15)' }}>
          {product.category}
        </span>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-1 text-white text-center px-4">
        <span className={`${s.symbol} leading-none`} aria-hidden="true">{isDog ? '🐕' : '🐈'}</span>
        <div className="mt-1">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">NURIO</p>
          <p className={`${s.title} font-bold tracking-tight leading-tight`}>{isDog ? 'DOG' : 'CAT'}</p>
        </div>
        <p className={`${s.sub} text-white/60 leading-tight mt-0.5 max-w-[120px] text-center`}>
          Şelatlı Mineral Takviyesi
        </p>
      </div>
      <div className="relative z-10 w-full flex items-center justify-between px-4 py-3"
        style={{ background: 'rgba(0,0,0,0.25)' }}>
        <span className="text-white/70 text-[9px] font-medium">{product.packaging.sachets}</span>
        <span className="text-white font-bold text-sm">{product.packaging.size}</span>
      </div>
    </div>
  );
}

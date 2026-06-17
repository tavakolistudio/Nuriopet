import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RIVR — Fluid Asset Streams',
  description: 'Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid cash instantly.',
};

export default function RivrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'var(--font-helvetica)', margin: 0, overflowX: 'hidden', backgroundColor: '#f0f0f0' }}>
      {children}
    </div>
  );
}

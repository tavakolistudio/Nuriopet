import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChelated from '@/components/WhyChelated';
import ProductComparison from '@/components/ProductComparison';
import ProductDetail from '@/components/ProductDetail';
import MineralGrid from '@/components/MineralGrid';
import DosageCalculator from '@/components/DosageCalculator';
import TrustSection from '@/components/TrustSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(150deg, #0b1d13 0%, #0f1b28 45%, #0c1e15 100%)' }}
    >
      {/* Ambient blobs — fixed so they stay in place during scroll */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-48 -right-48 w-[900px] h-[900px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(circle, rgba(27,77,62,0.38) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[35%] -left-48 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(28,43,74,0.3) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-30%] right-[15%] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(46,125,103,0.22) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <WhyChelated />
          <ProductComparison />
          <ProductDetail />
          <MineralGrid />
          <DosageCalculator />
          <TrustSection />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

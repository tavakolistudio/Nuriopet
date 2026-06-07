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
    <>
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
    </>
  );
}

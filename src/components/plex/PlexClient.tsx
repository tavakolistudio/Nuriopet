'use client';

import { PlexLanguageProvider } from '@/contexts/PlexLanguageContext';
import PlexNavbar from './PlexNavbar';
import PlexHero from './PlexHero';
import PlexProblem from './PlexProblem';
import PlexTechnology from './PlexTechnology';
import PlexBenefits from './PlexBenefits';
import PlexSpecies from './PlexSpecies';
import PlexWhy from './PlexWhy';
import PlexScientific from './PlexScientific';
import PlexContact from './PlexContact';
import PlexFooter from './PlexFooter';

export default function PlexClient() {
  return (
    <PlexLanguageProvider>
      <div className="min-h-screen font-sans antialiased">
        <PlexNavbar />
        <PlexHero />
        <PlexProblem />
        <PlexTechnology />
        <PlexBenefits />
        <PlexSpecies />
        <PlexWhy />
        <PlexScientific />
        <PlexContact />
        <PlexFooter />
      </div>
    </PlexLanguageProvider>
  );
}

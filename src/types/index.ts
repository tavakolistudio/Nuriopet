export interface DosageEntry {
  weightRange: string;
  dose: string;
}

export interface Product {
  id: string;
  name: string;
  animal: 'dog' | 'cat';
  category: string;
  description: string;
  benefits: string[];
  packaging: {
    size: string;
    sachets: string;
  };
  dosage: DosageEntry[];
  usage: string[];
  accentColor: string;
  bgColor: string;
  imagePath: string;
  imageDetail?: string;
}

export interface Mineral {
  name: string;
  nameTR: string;
  symbol: string;
  ppm: number;
  category: 'macro' | 'micro' | 'trace';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

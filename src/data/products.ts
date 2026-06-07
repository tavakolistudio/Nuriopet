import type { Product, Mineral, FAQItem, NavLink } from '@/types';

export const products: Product[] = [
  {
    id: 'nurio-dog',
    name: 'Nurio Dog',
    animal: 'dog',
    category: 'Şelatlı Mineral Takviyesi',
    description:
      'Köpekler için geliştirilmiş, minerallerin vücutta daha iyi emilmesini ve stabil kalmasını sağlayan yeni nesil mineral takviyesi.',
    benefits: [
      'Besin emilimini destekler',
      'Bağışıklık sistemini destekler',
      'Kemik ve kas yapısını destekler',
      'Enerji ve canlılığı destekler',
      'Tüy ve cilt sağlığını destekler',
      'Stres ve çevresel faktörlere karşı toleransı destekler',
    ],
    packaging: {
      size: '6 g',
      sachets: '12 × 0,5 g saşe',
    },
    dosage: [
      { weightRange: '5 kg altı', dose: '0,25 g' },
      { weightRange: '5–20 kg', dose: '0,5 g' },
      { weightRange: '20–40 kg', dose: '0,75 g' },
      { weightRange: '40 kg üzeri', dose: '1 g' },
    ],
    usage: [
      'Mama ile karıştırılabilir.',
      'Su veya süt içinde eritilebilir.',
      'Haftada bir kez kullanılır.',
      'Veteriner önerisiyle haftada 2 kez kullanılabilir.',
    ],
    accentColor: '#1B4D3E',
    bgColor: '#edf5f0',
    imagePath: '/images/product-dog.jpg',
    imageDetail: '/images/dog-sachets.jpg',
  },
  {
    id: 'nurio-cat',
    name: 'Nurio Cat',
    animal: 'cat',
    category: 'Şelatlı Mineral Takviyesi',
    description:
      'Kediler için özel olarak tasarlanmış, minerallerin sindirim sisteminde kaybolmadan emilmesini sağlayan yeni nesil mineral takviyesi.',
    benefits: [
      'Gelişmiş mineral emilimini destekler',
      'Bağışıklık sistemini destekler',
      'Sağlıklı büyüme ve kilo dengesini destekler',
      'Parlak tüyler ve sağlıklı cildi destekler',
      'Enerji ve canlılığı destekler',
      'Kemik ve kas yapısını destekler',
    ],
    packaging: {
      size: '3 g',
      sachets: '12 × 0,25 g saşe',
    },
    dosage: [
      { weightRange: '5 kg altı', dose: '0,25 g' },
      { weightRange: '5–20 kg', dose: '0,5 g' },
      { weightRange: '20–40 kg', dose: '0,75 g' },
      { weightRange: '40 kg üzeri', dose: '1 g' },
    ],
    usage: [
      'Mama ile karıştırılabilir.',
      'Su veya süt içinde eritilebilir.',
      'Haftada bir kez kullanılır.',
      'Veteriner önerisiyle haftada 2 kez kullanılabilir.',
    ],
    accentColor: '#1C2B4A',
    bgColor: '#eef1f7',
    imagePath: '/images/product-cat.jpg',
  },
];

export const minerals: Mineral[] = [
  { name: 'Potassium',  nameTR: 'Potasyum',  symbol: 'K',  ppm: 100000, category: 'macro' },
  { name: 'Calcium',   nameTR: 'Kalsiyum',  symbol: 'Ca', ppm: 60000,  category: 'macro' },
  { name: 'Phosphorus',nameTR: 'Fosfor',    symbol: 'P',  ppm: 24000,  category: 'macro' },
  { name: 'Magnesium', nameTR: 'Magnezyum', symbol: 'Mg', ppm: 5000,   category: 'macro' },
  { name: 'Iron',      nameTR: 'Demir',     symbol: 'Fe', ppm: 4000,   category: 'micro' },
  { name: 'Zinc',      nameTR: 'Çinko',     symbol: 'Zn', ppm: 4000,   category: 'micro' },
  { name: 'Manganese', nameTR: 'Manganez',  symbol: 'Mn', ppm: 500,    category: 'micro' },
  { name: 'Copper',    nameTR: 'Bakır',     symbol: 'Cu', ppm: 300,    category: 'micro' },
  { name: 'Iodine',    nameTR: 'İyot',      symbol: 'I',  ppm: 100,    category: 'trace' },
  { name: 'Selenium',  nameTR: 'Selenyum',  symbol: 'Se', ppm: 20,     category: 'trace' },
  { name: 'Chromium',  nameTR: 'Krom',      symbol: 'Cr', ppm: 10,     category: 'trace' },
  { name: 'Cobalt',    nameTR: 'Kobalt',    symbol: 'Co', ppm: 10,     category: 'trace' },
];

export const faqItems: FAQItem[] = [
  {
    question: 'Şelatlı mineral ne demektir?',
    answer:
      'Şelatlı mineraller, mineral iyonlarının amino asit veya organik moleküllerle bağlanması sonucu oluşturulan kompleks yapılardır. Bu yapı, minerallerin sindirim sürecinde daha stabil kalmasını ve biyoyararlanımını desteklemeye yönelik tasarlanmıştır. Standart inorganik mineral kaynaklarından farklı bir yapısal özelliktedir.',
  },
  {
    question: 'Nurio her gün kullanılır mı?',
    answer:
      'Hayır. Nurio, haftada bir kez kullanım için formüle edilmiştir. Veteriner hekiminizin önerisi doğrultusunda kullanım sıklığı haftada iki keze çıkarılabilir. Günlük kullanım önerilmemektedir.',
  },
  {
    question: 'Mama ile karıştırılabilir mi?',
    answer:
      'Evet. Nurio, kuru veya yaş mama ile kolaylıkla karıştırılabilir. Saşe içeriğini doğrudan günlük mama porsiyonunun üzerine ekleyip karıştırabilirsiniz.',
  },
  {
    question: 'Su veya süt içinde eritilebilir mi?',
    answer:
      'Evet. Nurio su veya süt içinde çözündürülerek da verilebilir. Bu yöntem özellikle mama ile karıştırmayı tercih etmeyen evcil hayvanlar için pratik bir alternatiftir.',
  },
  {
    question: 'Kedi ve köpek ürünü aynı mı?',
    answer:
      'Hayır. Nurio Dog ve Nurio Cat, farklı saşe boyutu ve dozaj miktarlarına sahip ayrı ürünlerdir. Her biri ilgili türün fizyolojik gereksinimleri göz önünde bulundurularak geliştirilmiştir. Ürünleri yalnızca etiketinde belirtilen tür için kullanınız.',
  },
  {
    question: 'Veteriner tavsiyesi gerekli mi?',
    answer:
      'Nurio, veteriner reçetesi gerektirmeyen bir takviye ürünüdür. Ancak evcil hayvanınızın mevcut sağlık durumuna bağlı olarak, başlamadan önce veteriner hekiminize danışmanızı öneririz. Kullanım sıklığının artırılması yalnızca veteriner önerisiyle yapılmalıdır.',
  },
  {
    question: 'Hangi kilo aralığında ne kadar kullanılır?',
    answer:
      '5 kg altı için 0,25 g; 5–20 kg için 0,5 g; 20–40 kg için 0,75 g; 40 kg üzeri için 1 g olarak önerilmektedir. Bu dozajlar genel kullanım rehberi niteliğindedir; özel sağlık durumlarında veteriner hekiminize danışınız.',
  },
];

export const navLinks: NavLink[] = [
  { label: 'Teknoloji', href: '#teknoloji' },
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Formülasyon', href: '#formulasyon' },
  { label: 'Dozaj', href: '#dozaj' },
  { label: 'SSS', href: '#sss' },
];

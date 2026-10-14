import type { Language } from '../LanguageContext';

// Ürünler sayfasında yayınladığın oyunlar ve uygulamalar listelenir.
// Öğrenci projeleri, denemeler ve ücretsiz çalışmalar "Projeler" sayfasında kalır.
//
// Yeni ürün eklemek için aşağıdaki diziye bir nesne eklemen yeterli.
// Görseli public/media/ klasörüne koyup yolunu "image" alanına yaz.
//
// Örnek:
// {
//   id: 'kelime-avi-mobile',
//   category: 'game',                 // 'game' | 'app'
//   status: 'released',               // 'released' | 'beta' | 'soon'
//   image: '/media/kelime.png',
//   year: '2026',
//   platforms: ['Android', 'Windows'],
//   text: {
//     tr: { title: 'Kelime Avı', description: 'Türkçe açıklama' },
//     en: { title: 'Word Hunt', description: 'English description' },
//     es: { title: 'Caza de Palabras', description: 'Descripción en español' },
//     fr: { title: 'Chasse aux mots', description: 'Description en français' },
//   },
//   links: {
//     store: 'https://play.google.com/store/apps/details?id=...',
//     download: '/media/kelime-avi-setup.exe',
//     web: 'https://...',
//   },
// },

export type ProductCategory = 'game' | 'app';
export type ProductStatus = 'released' | 'beta' | 'soon';

export interface Product {
  id: string;
  category: ProductCategory;
  status: ProductStatus;
  image?: string;
  year?: string;
  platforms: string[];
  text: Record<Language, { title: string; description: string }>;
  links?: {
    store?: string;
    download?: string;
    web?: string;
  };
}

export const products: Product[] = [];

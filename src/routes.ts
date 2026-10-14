// Menü sırası ve sayfa adresleri tek yerden yönetilir.
export const pages = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/hakkinda' },
  { key: 'education', path: '/egitim' },
  { key: 'skills', path: '/yetenekler' },
  { key: 'projects', path: '/projeler' },
  { key: 'products', path: '/urunler' },
  { key: 'contact', path: '/iletisim' },
] as const;

export type PageKey = (typeof pages)[number]['key'];

export const pathOf = (key: PageKey) => pages.find((p) => p.key === key)!.path;

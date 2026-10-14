import type { Language } from '../LanguageContext';

// Ürünler sayfasında geliştirdiğin/yayınladığın oyunlar ve uygulamalar listelenir.
// Öğrenci projeleri, denemeler ve ücretsiz çalışmalar "Projeler" sayfasında kalır.
//
// Yeni ürün eklemek için aşağıdaki diziye bir nesne eklemen yeterli.
// Görselleri public/media/ klasörüne koyup yollarını "images" alanına yaz (ilki kapak olur).
//
// Aynı ürün hem web sitesi hem uygulama olabilir: categories: ['web', 'app'].
// "Tümü" sekmesinde tek kart olarak görünür; "Uygulamalar" ve "Web Siteleri" sekmelerinde
// imagesByCategory içindeki o platforma ait görseller gösterilir (yoksa "images" kullanılır).
//   imagesByCategory: { web: ['/media/x_web.webp'], app: ['/media/x_mobil.webp'] }
//
// codeName: true olan ürünlerin başlığının önünde "Kod Adı:" yazar (geliştirme aşamasındakiler).
//
// Örnek:
// {
//   id: 'kelime-avi-mobile',
//   categories: ['game'],             // 'game' | 'app' | 'web' (birden fazla olabilir)
//   status: 'released',               // 'released' | 'beta' | 'dev' | 'planned' | 'soon'
//   images: ['/media/kelime.webp'],
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
//     download: 'https://drive.google.com/...',
//     web: 'https://...',
//   },
// },

export type ProductCategory = 'game' | 'app' | 'web';
export type ProductStatus = 'released' | 'beta' | 'dev' | 'planned' | 'soon';

export interface Product {
  id: string;
  categories: ProductCategory[];
  status: ProductStatus;
  codeName?: boolean;
  images?: string[];
  imagesByCategory?: Partial<Record<ProductCategory, string[]>>;
  year?: string;
  platforms: string[];
  text: Record<Language, { title: string; description: string }>;
  links?: {
    store?: string;
    download?: string;
    web?: string;
  };
}

export const products: Product[] = [
  {
    id: 'ogrnczm',
    categories: ['app', 'web'],
    status: 'planned',
    codeName: true,
    // Bitince: imagesByCategory: { web: [...web görselleri], app: [...mobil görselleri] }
    year: '2026',
    platforms: [],
    text: {
      tr: {
        title: 'OGRNCZM',
        description: 'Bizzat yaşadığım bir sorundan yola çıkarak öğrencilerin bu süreci çok daha kolay çözmesini hedefleyen bir web sitesi ve mobil uygulama. Planlama aşamasında; para kazanma amacı yok, tamamen ücretsiz olacak.',
      },
      en: {
        title: 'OGRNCZM',
        description: 'A website and mobile app born from a problem I experienced myself, aiming to make the solution much easier for students. Currently in planning; it is not meant to make money and will be completely free.',
      },
      es: {
        title: 'OGRNCZM',
        description: 'Un sitio web y una aplicación móvil que nacen de un problema que viví en primera persona, con el objetivo de facilitar mucho la solución a los estudiantes. En fase de planificación; no tiene fines de lucro y será completamente gratuita.',
      },
      fr: {
        title: 'OGRNCZM',
        description: "Un site web et une application mobile nés d'un problème que j'ai vécu moi-même, avec pour objectif de rendre la solution beaucoup plus simple pour les étudiants. En phase de planification ; sans but lucratif, entièrement gratuit.",
      },
    },
  },
  {
    id: 'shiftr',
    categories: ['game'],
    status: 'dev',
    codeName: true,
    images: ['/media/shiftr_karakter.webp', '/media/shiftr.webp'],
    year: '2026',
    platforms: ['Unity', 'C#'],
    text: {
      tr: {
        title: 'shiftR',
        description: "Unity ile hazırlanan 2.5D koşu oyunu. Bölümler parça parça üretiliyor; zıplanacak ve altından kayılacak engeller, fırlatılan mermiler ve mevsime göre değişen arka planlar var.",
      },
      en: {
        title: 'shiftR',
        description: "A 2.5D runner game made with Unity. Levels are generated chunk by chunk, with obstacles to jump over or slide under, incoming projectiles and backgrounds that change with the seasons.",
      },
      es: {
        title: 'shiftR',
        description: "Un juego de carreras 2.5D hecho con Unity. Los niveles se generan por partes, con obstáculos que saltar o esquivar deslizándose, proyectiles y fondos que cambian según la estación.",
      },
      fr: {
        title: 'shiftR',
        description: "Un jeu de course 2.5D réalisé avec Unity. Les niveaux sont générés morceau par morceau, avec des obstacles à sauter ou à esquiver en glissant, des projectiles et des décors qui changent selon les saisons.",
      },
    },
  },
  {
    id: 'p1rat3',
    categories: ['game'],
    status: 'dev',
    codeName: true,
    images: ['/media/p1rat3.webp', '/media/p1rat3_liman.webp'],
    year: '2026',
    platforms: ['Flutter', 'Android'],
    text: {
      tr: {
        title: 'p1r6t3',
        description: "Flutter tabanlı, özel bir oyun motoru üzerinde çalışan korsan oyunu. Limandan açılıp sonsuz denizde düşman gemileriyle savaşıyor, ganimet topluyor ve adaları keşfediyorsun. Hava durumu, mürettebat, gemi yükseltmeleri ve balina avı gibi mini oyunlar var.",
      },
      en: {
        title: 'p1r6t3',
        description: "A pirate game running on a custom game engine built with Flutter. You set sail from the harbor, fight enemy ships on an endless sea, collect loot and explore islands. It features weather, crew, ship upgrades and mini games such as whale hunting.",
      },
      es: {
        title: 'p1r6t3',
        description: "Un juego de piratas que funciona sobre un motor de juego propio hecho con Flutter. Zarpas del puerto, luchas contra barcos enemigos en un mar infinito, reúnes botín y exploras islas. Incluye clima, tripulación, mejoras del barco y minijuegos como la caza de ballenas.",
      },
      fr: {
        title: 'p1r6t3',
        description: "Un jeu de pirates qui tourne sur un moteur de jeu dédié construit avec Flutter. On quitte le port, on affronte des navires ennemis sur une mer infinie, on récolte du butin et on explore des îles. Météo, équipage, améliorations du navire et mini-jeux comme la chasse à la baleine sont au programme.",
      },
    },
  },
  {
    id: 'myplacecalled',
    categories: ['game'],
    status: 'dev',
    codeName: true,
    images: ['/media/myplacecalled.webp', '/media/myplacecalled_dukkan.webp'],
    year: '2026',
    platforms: ['Flutter', 'Android', 'Windows'],
    text: {
      tr: {
        title: 'myPlaceCalled',
        description: "Kendi kahve dükkanını açıp işlettiğin bir Flutter oyunu. Müşterilerin siparişlerini hazırlıyor, yeni tarifler ve makineler açıyor, personel alıp dükkanı dekore ediyorsun. Ülkelerin yarıştığı Dünya Lezzet Ligi de var.",
      },
      en: {
        title: 'myPlaceCalled',
        description: "A Flutter game where you open and run your own coffee shop. You prepare customer orders, unlock new recipes and machines, hire staff and decorate the shop. There is also a World Flavor League where countries compete.",
      },
      es: {
        title: 'myPlaceCalled',
        description: "Un juego en Flutter donde abres y gestionas tu propia cafetería. Preparas los pedidos de los clientes, desbloqueas nuevas recetas y máquinas, contratas personal y decoras el local. También hay una Liga Mundial del Sabor donde compiten los países.",
      },
      fr: {
        title: 'myPlaceCalled',
        description: "Un jeu Flutter où l'on ouvre et gère son propre café. On prépare les commandes des clients, on débloque de nouvelles recettes et machines, on recrute du personnel et on décore la boutique. Une Ligue mondiale des saveurs met aussi les pays en compétition.",
      },
    },
  },
];

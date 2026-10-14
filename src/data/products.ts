import type { Language } from '../LanguageContext';

// Ürünler sayfasında geliştirdiğin/yayınladığın oyunlar ve uygulamalar listelenir.
// Öğrenci projeleri, denemeler ve ücretsiz çalışmalar "Projeler" sayfasında kalır.
//
// Yeni ürün eklemek için aşağıdaki diziye bir nesne eklemen yeterli.
// Görselleri public/media/ klasörüne koyup yollarını "images" alanına yaz (ilki kapak olur).
//
// Örnek:
// {
//   id: 'kelime-avi-mobile',
//   category: 'game',                 // 'game' | 'app'
//   status: 'released',               // 'released' | 'beta' | 'dev' | 'soon'
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

export type ProductCategory = 'game' | 'app';
export type ProductStatus = 'released' | 'beta' | 'dev' | 'soon';

export interface Product {
  id: string;
  category: ProductCategory;
  status: ProductStatus;
  images?: string[];
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
    id: 'shiftr',
    category: 'game',
    status: 'dev',
    images: ['/media/shiftr_karakter.webp', '/media/shiftr.webp'],
    year: '2026',
    platforms: ['Unity', 'C#'],
    text: {
      tr: {
        title: 'shiftR',
        description: "Unity ile geliştirdiğim 2.5D koşu oyunu. Bölümler parça parça üretiliyor; zıplanacak ve altından kayılacak engeller, fırlatılan mermiler ve mevsime göre değişen arka planlar var.",
      },
      en: {
        title: 'shiftR',
        description: 'A 2.5D runner game I am building in Unity. Levels are generated chunk by chunk, with obstacles to jump over or slide under, incoming projectiles and backgrounds that change with the seasons.',
      },
      es: {
        title: 'shiftR',
        description: 'Un juego de carreras 2.5D que estoy desarrollando en Unity. Los niveles se generan por partes, con obstáculos que saltar o esquivar deslizándose, proyectiles y fondos que cambian según la estación.',
      },
      fr: {
        title: 'shiftR',
        description: "Un jeu de course 2.5D que je développe avec Unity. Les niveaux sont générés morceau par morceau, avec des obstacles à sauter ou à esquiver en glissant, des projectiles et des décors qui changent selon les saisons.",
      },
    },
  },
  {
    id: 'p1rat3',
    category: 'game',
    status: 'dev',
    images: ['/media/p1rat3.webp', '/media/p1rat3_liman.webp'],
    year: '2026',
    platforms: ['Flutter', 'Android'],
    text: {
      tr: {
        title: 'p1rat3',
        description: "Flutter üzerinde kendi oyun motorunu yazarak geliştirdiğim korsan oyunu. Limandan açılıp sonsuz denizde düşman gemileriyle savaşıyor, ganimet topluyor ve adaları keşfediyorsun. Hava durumu, mürettebat, gemi yükseltmeleri ve balina avı gibi mini oyunlar var.",
      },
      en: {
        title: 'p1rat3',
        description: 'A pirate game built on my own game engine written in Flutter. You set sail from the harbor, fight enemy ships on an endless sea, collect loot and explore islands. It features weather, crew, ship upgrades and mini games such as whale hunting.',
      },
      es: {
        title: 'p1rat3',
        description: 'Un juego de piratas creado sobre mi propio motor de juego escrito en Flutter. Zarpas del puerto, luchas contra barcos enemigos en un mar infinito, reúnes botín y exploras islas. Incluye clima, tripulación, mejoras del barco y minijuegos como la caza de ballenas.',
      },
      fr: {
        title: 'p1rat3',
        description: "Un jeu de pirates construit sur mon propre moteur de jeu écrit en Flutter. On quitte le port, on affronte des navires ennemis sur une mer infinie, on récolte du butin et on explore des îles. Météo, équipage, améliorations du navire et mini-jeux comme la chasse à la baleine sont au programme.",
      },
    },
  },
  {
    id: 'myplacecalled',
    category: 'game',
    status: 'dev',
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
        description: 'A Flutter game where you open and run your own coffee shop. You prepare customer orders, unlock new recipes and machines, hire staff and decorate the shop. There is also a World Flavor League where countries compete.',
      },
      es: {
        title: 'myPlaceCalled',
        description: 'Un juego en Flutter donde abres y gestionas tu propia cafetería. Preparas los pedidos de los clientes, desbloqueas nuevas recetas y máquinas, contratas personal y decoras el local. También hay una Liga Mundial del Sabor donde compiten los países.',
      },
      fr: {
        title: 'myPlaceCalled',
        description: "Un jeu Flutter où l'on ouvre et gère son propre café. On prépare les commandes des clients, on débloque de nouvelles recettes et machines, on recrute du personnel et on décore la boutique. Une Ligue mondiale des saveurs met aussi les pays en compétition.",
      },
    },
  },
];

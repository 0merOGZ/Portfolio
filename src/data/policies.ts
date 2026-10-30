// Ürünlerin gizlilik sözleşmeleri. Her sözleşme /sozlesmeler/<slug> adresinde yayınlanır
// ve ürün kartındaki "Gizlilik Sözleşmesi" butonundan açılır.
// (My Place Called sözleşmesi ayrı olarak components/PrivacyPolicy.tsx içinde durur.)

export interface PolicyLink {
  label: string;
  url: string;
}

export interface PolicyItem {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  link?: PolicyLink;
}

export interface PolicySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: PolicyItem[];
}

export interface PolicyLanguage {
  meta: { appLabel: string; developerLabel: string; updatedLabel: string; contactLabel: string; updated: string };
  sections: PolicySection[];
}

export interface Policy {
  slug: string;
  appName: string;
  developer: string;
  email: string;
  effectiveDate: { tr: string; en: string };
  tr: PolicyLanguage;
  en: PolicyLanguage;
}

const BEVERAGE_EMAIL = 'ogz.interactives@gmail.com';

export const beveragePolicy: Policy = {
  slug: 'BeverageAndBeverage',
  appName: 'Beverage & Beverage',
  developer: 'OGZ Productions',
  email: BEVERAGE_EMAIL,
  effectiveDate: { tr: '30 Ekim 2026', en: 'October 30, 2026' },
  tr: {
    meta: {
      appLabel: 'Uygulama Adı',
      developerLabel: 'Geliştirici / Yayıncı',
      updatedLabel: 'Yürürlük ve Son Güncelleme Tarihi',
      contactLabel: 'E-posta',
      updated: '30 Ekim 2026',
    },
    sections: [
      {
        title: '1. Genel Bakış',
        paragraphs: [
          'OGZ Productions ("biz", "bize" veya "bizim") tarafından geliştirilen Beverage & Beverage ("Oyun" veya "Uygulama"), tek oyunculu bir içecek üretimi ve işletme simülasyonu oyunudur. Gizliliğinize saygı duyuyoruz. Bu Gizlilik Politikası, Oyunu kullandığınızda hangi verilerin işlendiğini, neden işlendiğini ve haklarınızı açıklar.',
        ],
      },
      {
        title: '2. Doğrudan Toplamadığımız Veriler',
        paragraphs: [
          'Beverage & Beverage kullanıcı hesabı veya üyelik gerektirmez. Tarafımızca doğrudan şu kişisel veriler toplanmaz, istenmez ve saklanmaz:',
        ],
        bullets: [
          'Ad, soyad, e-posta adresi, telefon numarası veya posta adresi',
          'Hassas veya yaklaşık konum (GPS) verisi',
          'Rehber (kişiler), fotoğraf, kamera, mikrofon veya cihazdaki diğer dosyalar',
        ],
      },
      {
        title: '3. Cihazda Yerel Olarak Saklanan Veriler',
        paragraphs: [
          'Oyundaki ilerlemeniz (kayıt yuvaları, şirket durumu, oyun içi para/çek, açılan tarifler, başarımlar), ses/dil/gün süresi ayarlarınız ve reklam/satın alma önbellek durumu yalnızca kendi cihazınızın yerel depolama alanında saklanır. Bu veriler sunucularımıza gönderilmez. Oyunu cihazınızdan kaldırdığınızda (sildiğinizde) yerel oyun verileriniz de silinir.',
        ],
      },
      {
        title: '4. Üçüncü Taraf Hizmetler ve İşlenen Veriler',
        paragraphs: [
          'Oyunun mobil sürümlerinde (Android / iOS) reklam gösterimi, uygulama içi satın alma doğrulaması ve çökme tespiti için güvenilir üçüncü taraf yazılım geliştirme kitleri (SDK) kullanılır. PC / Steam sürümünde reklam ve uygulama içi satın alma bulunmaz.',
        ],
        items: [
          {
            title: 'a) Ödüllü Reklamlar — Google AdMob ve UMP',
            paragraphs: [
              'Oyunda zorunlu geçiş veya banner reklamı yoktur; yalnızca oyuncunun kendi isteğiyle oyun içi bonus kazanmak için başlattığı ödüllü reklamlar bulunur. Reklamlar Google AdMob tarafından sunulur.',
            ],
            bullets: [
              'İşlenen veriler: Cihazın reklam kimliği (Android Advertising ID / iOS IDFA), IP adresi (yaklaşık ülke/bölge tahmini için), cihaz modeli, işletim sistemi sürümü, dil ayarı ve reklam etkileşim/gösterim verileri.',
              'Amaç: Reklamların gösterilmesi, reklam sıklığının sınırlandırılması, ödül doğrulaması, analiz ve reklam sahteciliğinin (fraud) önlenmesi.',
              'İçerik derecesi: Gösterilen reklamlar genel izleyici kitlesine (G) uygun içerikle sınırlandırılmıştır.',
              "Rıza yönetimi (GDPR / AEA, Birleşik Krallık ve İsviçre): Avrupa Ekonomik Alanı (AEA), Birleşik Krallık ve İsviçre'deki kullanıcılara Google User Messaging Platform (UMP) aracılığıyla rıza formu sunulur. Tercihinizi istediğiniz zaman oyun içindeki Ayarlar → Gizlilik → Reklam izni bölümünden değiştirebilir veya cihaz ayarlarınızdan reklam kimliğinizi sıfırlayabilirsiniz.",
            ],
            link: { label: 'Gizlilik politikası', url: 'https://policies.google.com/technologies/ads' },
          },
          {
            title: 'b) Uygulama İçi Satın Alımlar — Google Play / App Store ve RevenueCat',
            paragraphs: ['Oyunda isteğe bağlı kalıcı ürünler ("Reklamsız" ve "Geliştiriciye Destek") sunulabilir.'],
            bullets: [
              "Ödeme işlemi: Tüm ödemeler doğrudan uygulama mağazası (Google Play veya Apple App Store) üzerinden gerçekleşir. Kredi kartı, banka kartı veya fatura bilgileriniz bize ya da RevenueCat'e ulaşmaz.",
              'İşlenen veriler: Satın alımları doğrulamak, yetkileri etkinleştirmek ve cihaz değiştirdiğinizde "Satın alımları geri yükle" işlevini çalıştırmak için RevenueCat hizmeti kullanılır. RevenueCat; cihaza özgü anonim bir uygulama kullanıcı kimliği (App User ID), satın alınan ürün kimliği, işlem makbuzu/jetonu, ülke bilgisi ve uygulama sürümünü işler.',
              'Amaç: Uygulama işlevselliği, satın alma doğrulaması ve dolandırıcılığın önlenmesi.',
            ],
            link: { label: 'Gizlilik politikası', url: 'https://www.revenuecat.com/privacy' },
          },
          {
            title: 'c) Hata ve Çökme Raporları — GlitchTip (Sentry SDK)',
            paragraphs: [
              'Oyunun kararlı çalışmasını sağlamak ve teknik hataları düzeltmek için açık kaynaklı hata takip hizmeti GlitchTip (sentry_flutter aracılığıyla) kullanılır.',
            ],
            bullets: [
              'İşlenen veriler: Yalnızca beklenmedik bir hata veya çökme meydana geldiğinde; hatanın kod satırı (stack trace), cihaz modeli, işletim sistemi sürümü, uygulama sürümü ve çalışma zamanı durumu gönderilir.',
              'Amaç: Hataların tespit edilmesi, giderilmesi ve uygulama performansının iyileştirilmesi. Bu raporlar kimliğinizi belirleyebilecek kişisel veri içermez.',
            ],
            link: { label: 'Gizlilik politikası', url: 'https://glitchtip.com/legal/privacy' },
          },
        ],
      },
      {
        title: '5. Çocukların Gizliliği',
        paragraphs: [
          'Beverage & Beverage genel izleyici kitlesine (PEGI 3 / Herkes) uygundur. 13 yaşın altındaki çocuklardan (veya ilgili yargı bölgesindeki dijital rıza yaşının altındaki bireylerden) bilerek kişisel bilgi toplamıyoruz. Bir çocuğun bize kişisel veri sağladığını fark ederseniz lütfen aşağıdaki iletişim adresinden bize ulaşın; ilgili veriyi derhal sileceğiz.',
        ],
      },
      {
        title: '6. Veri Güvenliği, Aktarım ve Saklama Süresi',
        bullets: [
          'Üçüncü taraf SDK\'lar tarafından iletilen tüm veriler aktarım sırasında şifrelenir (HTTPS / TLS).',
          'Kişisel verilerinizi hiçbir koşulda üçüncü taraflara satmıyoruz.',
          'Cihazdaki yerel veriler oyunu silene kadar cihazınızda kalır. Üçüncü taraf hizmet sağlayıcıların (AdMob, RevenueCat, GlitchTip) işlediği teknik kayıtlar, ilgili sağlayıcıların kendi veri saklama politikalarına tabidir.',
        ],
      },
      {
        title: '7. Kullanıcı Hakları (KVKK, GDPR ve CCPA Kapsamında)',
        paragraphs: [
          'Bulunduğunuz ülkenin yasalarına (6698 sayılı KVKK, AB GDPR vb.) göre; hakkınızda veri işlenip işlenmediğini öğrenme, bilgi talep etme, verilerin silinmesini isteme ve verdiğiniz reklam rızasını geri çekme hakkına sahipsiniz:',
        ],
        bullets: [
          'Yerel oyun verilerini silmek için: Uygulamayı cihazınızdan kaldırmanız veya cihaz ayarlarından uygulama verilerini temizlemeniz yeterlidir.',
          'Reklam kimliği ve rızası için: Oyun içi Ayarlar → Gizlilik menüsünden rıza tercihinizi güncelleyebilir veya telefonunuzun ayarlarından (Google / Gizlilik → Reklamlar) reklam kimliğinizi sıfırlayabilir/silebilirsiniz.',
          'Satın alma ve hata kayıtlarıyla ilgili talepler için: Aşağıdaki e-posta adresinden bize ulaşabilirsiniz.',
        ],
      },
      {
        title: '8. Bu Politikadaki Değişiklikler',
        paragraphs: [
          'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Güncellemeler bu sayfada yayınlandığı tarihte yürürlüğe girer ve üst kısımdaki "Son Güncelleme Tarihi" değiştirilir.',
        ],
      },
      {
        title: '9. İletişim',
        paragraphs: [
          'Gizlilik Politikamız veya verilerinizle ilgili her türlü soru ve silme talebiniz için bizimle iletişime geçebilirsiniz:',
        ],
        bullets: ['Geliştirici: OGZ Productions', `E-posta: ${BEVERAGE_EMAIL}`],
      },
    ],
  },
  en: {
    meta: {
      appLabel: 'App Name',
      developerLabel: 'Developer / Publisher',
      updatedLabel: 'Effective & Last Updated Date',
      contactLabel: 'Email',
      updated: 'October 30, 2026',
    },
    sections: [
      {
        title: '1. Overview',
        paragraphs: [
          'Beverage & Beverage (the "Game" or "App"), developed by OGZ Productions ("we", "us", or "our"), is a single-player beverage production and business simulation game. We respect your privacy. This Privacy Policy explains what information is processed when you play the Game, why it is processed, and your choices and rights.',
        ],
      },
      {
        title: '2. Data We Do Not Collect Directly',
        paragraphs: [
          'Beverage & Beverage does not require user registration or accounts. We do not directly collect, request, or store any personally identifiable information such as:',
        ],
        bullets: [
          'Your name, email address, phone number, or physical address',
          'Precise or coarse geographical location (GPS) data',
          'Contacts, photos, camera, microphone, or other files on your device',
        ],
      },
      {
        title: '3. Data Stored Locally on Your Device',
        paragraphs: [
          'Your game progress (save slots, company state, in-game currency/checks, unlocked recipes, achievements), audio/language/day-length settings, and local ad/purchase cache are stored strictly locally on your device. This data is not uploaded to our servers. Uninstalling the Game from your device permanently deletes your local game data.',
        ],
      },
      {
        title: '4. Third-Party Services and Data Processed',
        paragraphs: [
          'In the mobile versions of the Game (Android / iOS), we use trusted third-party Software Development Kits (SDKs) to provide optional rewarded ads, verify in-app purchases, and diagnose crashes. The PC / Steam version contains no ads and no in-app purchases.',
        ],
        items: [
          {
            title: 'a) Rewarded Advertising — Google AdMob & UMP',
            paragraphs: [
              'There are no forced interstitial or banner ads in the Game. We only offer optional rewarded ads that players may voluntarily watch to receive in-game bonuses. Ads are served by Google AdMob.',
            ],
            bullets: [
              'Data processed: Device Advertising ID (Android Advertising ID / iOS IDFA), IP address (used for approximate country/region estimation), device model, operating system version, language setting, and ad interaction/impression diagnostic data.',
              'Purpose: Serving ads, frequency capping, reward verification, analytics, and fraud prevention.',
              'Ad content rating: All ads are restricted to content suitable for a general audience (G).',
              "Consent management (GDPR / EEA, UK, and Switzerland): Users in the European Economic Area (EEA), the United Kingdom, and Switzerland are presented with a consent form via Google's User Messaging Platform (UMP). You can review or change your consent choices at any time inside the Game under Settings → Privacy → Ad Consent, or reset/delete your advertising ID in your device settings.",
            ],
            link: { label: 'Privacy Policy', url: 'https://policies.google.com/technologies/ads' },
          },
          {
            title: 'b) In-App Purchases — Google Play / App Store & RevenueCat',
            paragraphs: ['The Game offers optional non-consumable products (such as "Ad-Free" and "Support the Developer").'],
            bullets: [
              'Payment processing: All financial transactions are processed directly by the platform store (Google Play or Apple App Store). We and RevenueCat never receive or have access to your credit card, bank details, or billing address.',
              'Data processed: We use RevenueCat to validate purchase receipts, grant entitlements, and enable the "Restore Purchases" feature across devices. RevenueCat processes an anonymous App User ID, purchased product identifiers, transaction receipts/tokens, country, and app version.',
              'Purpose: App functionality, purchase validation, and fraud prevention.',
            ],
            link: { label: 'Privacy Policy', url: 'https://www.revenuecat.com/privacy' },
          },
          {
            title: 'c) Crash Reporting — GlitchTip (Sentry SDK)',
            paragraphs: [
              'To keep the Game stable and fix bugs, we use the open-source error tracking service GlitchTip (via sentry_flutter).',
            ],
            bullets: [
              'Data processed: Only when an unexpected error or crash occurs, a diagnostic report is sent containing the error stack trace, device model, OS version, app version, and runtime state.',
              'Purpose: Crash diagnostics, bug fixing, and stability improvement. These crash logs do not contain personally identifiable information.',
            ],
            link: { label: 'Privacy Policy', url: 'https://glitchtip.com/legal/privacy' },
          },
        ],
      },
      {
        title: "5. Children's Privacy",
        paragraphs: [
          'Beverage & Beverage is suitable for a general audience (PEGI 3 / Everyone). We do not knowingly collect personal information from children under the age of 13 (or the applicable age of digital consent in your jurisdiction). If you believe a child has provided personal information to us, please contact us at the email address below and we will promptly delete it.',
        ],
      },
      {
        title: '6. Data Security, Transfer, and Retention',
        bullets: [
          'All data transmitted by third-party SDKs is encrypted in transit using HTTPS / TLS.',
          'We never sell your data to third parties.',
          'Local game data remains on your device until you clear the app data or uninstall the Game. Technical records processed by third-party service providers (AdMob, RevenueCat, GlitchTip) are retained in accordance with their respective privacy and data retention policies.',
        ],
      },
      {
        title: '7. Your Rights and Choices (GDPR, KVKK, CCPA)',
        paragraphs: [
          'Depending on your jurisdiction, you have the right to request information about the data processed about you, request deletion, and withdraw your consent for personalized advertising:',
        ],
        bullets: [
          "To delete local game data: Simply uninstall the Game or clear the app's storage in your device settings.",
          "To manage ad consent & Advertising ID: Use Settings → Privacy inside the Game to update your consent preferences, or reset/delete your Advertising ID in your device's system settings (Settings → Google / Privacy → Ads).",
          'For purchase or crash record inquiries: Contact us via the email address below.',
        ],
      },
      {
        title: '8. Changes to This Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Any changes will take effect when posted on this page, with the "Effective & Last Updated Date" updated at the top.',
        ],
      },
      {
        title: '9. Contact Us',
        paragraphs: [
          'If you have any questions, concerns, or deletion requests regarding this Privacy Policy, please contact us:',
        ],
        bullets: ['Developer: OGZ Productions', `Email: ${BEVERAGE_EMAIL}`],
      },
    ],
  },
};

export const policies: Policy[] = [beveragePolicy];

// "Metni Kopyala" ve ham metin görünümü için düz metin üretir
export const policyToText = (policy: Policy) => {
  const block = (heading: string, lang: PolicyLanguage) => {
    const lines: string[] = [heading];
    lines.push(`${lang.meta.appLabel}: ${policy.appName}`);
    lines.push(`${lang.meta.developerLabel}: ${policy.developer}`);
    lines.push(`${lang.meta.updatedLabel}: ${lang.meta.updated}`);
    for (const s of lang.sections) {
      lines.push('', s.title);
      s.paragraphs?.forEach((p) => lines.push(p));
      s.bullets?.forEach((b) => lines.push(`* ${b}`));
      s.items?.forEach((it) => {
        lines.push('', it.title);
        it.paragraphs?.forEach((p) => lines.push(p));
        it.bullets?.forEach((b) => lines.push(`* ${b}`));
        if (it.link) lines.push(`* ${it.link.label}: ${it.link.url}`);
      });
    }
    return lines.join('\n');
  };
  return [
    block('TÜRKÇE — GİZLİLİK POLİTİKASI', policy.tr),
    block('ENGLISH — PRIVACY POLICY', policy.en),
  ].join('\n\n----------------------------------------\n\n');
};

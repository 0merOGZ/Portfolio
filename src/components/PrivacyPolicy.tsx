import React, { useState } from 'react';
import { ArrowLeft, Check, Copy, FileText, Globe, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export const rawPrivacyPolicyText = `# Gizlilik Politikası / Privacy Policy — My Place Called

> **Yayın Bağlantısı:** Google Play Console → **Uygulama içeriği → Gizlilik politikası** ve AdMob panelinde bu belgenin web bağlantısı istenir.
> Bu dosya hem Türkçe hem İngilizce olarak hazırlanmıştır. Tam kapsamlı sözleşme: docs/gizlilik_sozlesmesi.md.

**Uygulama / App:** My Place Called  
**Geliştirici / Developer:** OGZ Interactives  
**Paket Adı / Package:** com.omeroguz.myplacecalled  
**Son Güncelleme / Last Updated:** 24 Ekim 2026 / October 24, 2026  
**İletişim / Contact:** ogz.interactives@gmail.com  

---

## Türkçe

My Place Called ("Oyun"), tek kişilik bir dükkân işletme ve yemek pişirme simülasyonudur. Bu belge oyunun verileri nasıl işlediğini açıklar.

### 1. Toplanan Kişisel Veriler
Oyun sunucusuz çalışır; isim, e-posta, telefon, kesin konum gibi hiçbir kişisel veri bizim tarafımızdan toplanmaz. Dükkân adı, slogan, ilerleme ve ayarlar yalnızca cihazınızın yerel depolama alanında saklanır; oyunu sildiğinizde bu bilgiler de silinir.

### 2. Üçüncü Taraf Hizmetler
- **Google AdMob** (isteğe bağlı ödüllü reklamlar): Reklam göstermek, ölçmek ve sahteciliği önlemek için cihazın reklam kimliği (GAID) ve temel teknik bilgiler Google tarafından işlenebilir. Avrupa Ekonomik Alanı ve Birleşik Krallık'ta oyun açılışında Google'ın rıza formu (UMP) gösterilir; rıza verilmeden reklam isteği yapılmaz. Tercihinizi oyun içinden **Ayarlar → Gizlilik seçenekleri** ile istediğiniz zaman değiştirebilirsiniz. Oyundaki reklamlar kişiselleştirilmemiş (NPA) ve genel kitleye (G) uygun olarak istenir.  
  Google Politikası: https://policies.google.com/privacy
- **Google Play Faturalandırma / RevenueCat** (uygulama içi satın alımlar): Satın almanın doğrulanması için anonim bir kullanıcı kimliği ve işlem kodu işlenir. Kredi kartı ve ödeme bilgileriniz Google Play'de kalır, bize asla ulaşmaz.  
  RevenueCat Politikası: https://www.revenuecat.com/privacy

### 3. Çocukların Gizliliği
Oyun her yaştan kitleye uygundur. 13 yaş altındaki çocuklardan bilerek kişisel veri toplanmaz. Reklamlar aile dostu ve çocuklara uygun derecelendirmeyle sınırlandırılmıştır.

### 4. Veri Silme Hakları
Oyun harici sunucularda veri tutmadığı için silinecek bir hesap yoktur; uygulamayı kaldırmak cihazdaki tüm oyun verisini tamamen siler. Reklam kimliğinizi cihazınızın Android ayarlarından dilediğiniz an sıfırlayabilirsiniz.

---

## English

My Place Called ("the Game") is a single-player shop management and cooking simulation. This policy explains how data is handled.

### 1. Personal Data We Collect
The game runs serverless; we do not collect personal data such as your name, email, phone number, or precise location. Your shop name, slogan, currency, recipes, and settings are stored exclusively on your local device and are erased when the game is uninstalled.

### 2. Third-Party Services
- **Google AdMob** (optional rewarded ads): Google may process your device's advertising ID (GAID) and basic technical data to serve and measure ads and prevent fraud. In the EEA and UK, Google's consent dialog (UMP) is displayed on launch; no ad is requested without consent. You can adjust your choices at any time in **Settings → Privacy options**. Ads are requested as non-personalized (NPA) with family-friendly (G) content ratings.  
  Google Policy: https://policies.google.com/privacy
- **Google Play Billing / RevenueCat** (in-app purchases): An anonymous user token and transaction receipt are processed to verify digital items. Your payment details remain securely with Google Play and never reach us.  
  RevenueCat Policy: https://www.revenuecat.com/privacy

### 3. Children's Privacy
The game is family-friendly and suitable for all ages. It does not knowingly collect personal data from children under 13.

### 4. Data Deletion
Since we do not host online accounts or central servers, uninstalling the app permanently deletes all your game data from your device. You may reset or opt out of your advertising identifier via your device's system settings.`;

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeLang, setActiveLang] = useState<'both' | 'tr' | 'en'>('both');
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');

  const handleCopy = () => {
    navigator.clipboard.writeText(rawPrivacyPolicyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="pt-28 pb-24 md:pt-36">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Üst Yönlendirme ve Aksiyon Çubuğu */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/urunler"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            <span>{t.products.links?.backToProducts || 'Ürünlere Dön'}</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'formatted' ? 'raw' : 'formatted')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 transition-all duration-200"
            >
              <FileText size={14} className="text-purple-400" />
              <span>{viewMode === 'formatted' ? 'TXT / Ham Metin' : 'Belge Görünümü'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Kopyalandı!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Metni Kopyala</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* SÖZLEŞME KAĞIDI BLOĞU */}
        <div className="relative rounded-2xl overflow-hidden bg-[#faf8f2] text-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-amber-200/50">
          {/* Kağıt Doku / Üst Kenarlık */}
          <div className="h-2 w-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 opacity-80" />

          {/* Kağıt Başlık & Damga */}
          <div className="p-6 sm:p-10 pb-6 border-b border-amber-900/10 bg-[#f7f4ea]/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-900 border border-amber-900/15 mb-3">
                  <ShieldCheck size={14} />
                  <span>RESMİ SÖZLEŞME BELGESİ • LEGAL DOCUMENT</span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Gizlilik Politikası / Privacy Policy
                </h1>
                <p className="font-serif text-lg text-amber-950/70 italic mt-1">
                  My Place Called
                </p>
              </div>

              {/* Dil / Filtre Butonları */}
              {viewMode === 'formatted' && (
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-amber-900/5 border border-amber-900/10 self-start sm:self-center">
                  <button
                    onClick={() => setActiveLang('both')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeLang === 'both'
                        ? 'bg-amber-900 text-white shadow-sm'
                        : 'text-amber-900/70 hover:text-amber-950'
                    }`}
                  >
                    Tümü
                  </button>
                  <button
                    onClick={() => setActiveLang('tr')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeLang === 'tr'
                        ? 'bg-amber-900 text-white shadow-sm'
                        : 'text-amber-900/70 hover:text-amber-950'
                    }`}
                  >
                    Türkçe
                  </button>
                  <button
                    onClick={() => setActiveLang('en')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeLang === 'en'
                        ? 'bg-amber-900 text-white shadow-sm'
                        : 'text-amber-900/70 hover:text-amber-950'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Bilgi Kutusu */}
            <div className="grid sm:grid-cols-2 gap-3 mt-6 p-4 rounded-xl bg-white/70 border border-amber-900/10 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Uygulama / App:</span> My Place Called
              </div>
              <div>
                <span className="font-semibold text-slate-900">Geliştirici / Developer:</span> OGZ Interactives
              </div>
              <div>
                <span className="font-semibold text-slate-900">Paket Adı / Package:</span>{' '}
                <code className="px-1.5 py-0.5 rounded bg-amber-900/10 text-amber-950 font-mono text-[11px]">
                  com.omeroguz.myplacecalled
                </code>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Son Güncelleme / Last Updated:</span>{' '}
                <span className="text-emerald-800 font-medium">24 Ekim 2026 / October 24, 2026</span>
              </div>
              <div className="sm:col-span-2 flex items-center gap-1.5 pt-1 border-t border-amber-900/10">
                <Mail size={13} className="text-amber-800" />
                <span className="font-semibold text-slate-900">İletişim / Contact:</span>
                <a
                  href="mailto:ogz.interactives@gmail.com"
                  className="text-amber-900 hover:text-amber-950 underline font-medium"
                >
                  ogz.interactives@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Kağıt Gövdesi */}
          <div className="p-6 sm:p-10 font-serif leading-relaxed text-slate-800 text-sm sm:text-base">
            {viewMode === 'raw' ? (
              <div className="relative">
                <pre className="p-5 rounded-xl bg-[#201d18] text-[#e8e2d4] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap select-all border border-amber-900/20">
                  {rawPrivacyPolicyText}
                </pre>
              </div>
            ) : (
              <div className="space-y-8">
                {/* TÜRKÇE BÖLÜM */}
                {(activeLang === 'both' || activeLang === 'tr') && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 pb-2 border-b-2 border-amber-900/20">
                      <Globe size={18} className="text-amber-800" />
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">Türkçe</h2>
                    </div>

                    <p className="text-slate-700 leading-relaxed italic bg-amber-900/[0.04] p-4 rounded-lg border-l-4 border-amber-800">
                      <strong>My Place Called</strong> ("Oyun"), tek kişilik bir dükkân işletme ve yemek pişirme simülasyonudur. Bu belge oyunun verileri nasıl işlediğini açıklar.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          1. Toplanan Kişisel Veriler
                        </h3>
                        <p className="text-slate-700">
                          Oyun sunucusuz çalışır; isim, e-posta, telefon, kesin konum gibi hiçbir kişisel veri bizim tarafımızdan toplanmaz. Dükkân adı, slogan, ilerleme ve ayarlar <strong>yalnızca cihazınızın yerel depolama alanında</strong> saklanır; oyunu sildiğinizde bu bilgiler de silinir.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          2. Üçüncü Taraf Hizmetler
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li>
                            <strong>Google AdMob (isteğe bağlı ödüllü reklamlar):</strong> Reklam göstermek, ölçmek ve sahteciliği önlemek için cihazın reklam kimliği (GAID) ve temel teknik bilgiler Google tarafından işlenebilir. Avrupa Ekonomik Alanı ve Birleşik Krallık'ta oyun açılışında Google'ın rıza formu (UMP) gösterilir; rıza verilmeden reklam isteği yapılmaz. Tercihinizi oyun içinden <em>Ayarlar → Gizlilik seçenekleri</em> ile istediğiniz zaman değiştirebilirsiniz. Oyundaki reklamlar kişiselleştirilmemiş (NPA) ve genel kitleye (G) uygun olarak istenir.{' '}
                            <a
                              href="https://policies.google.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-800 hover:text-amber-950 underline font-sans text-xs inline-block ml-1"
                            >
                              Google Politikası ↗
                            </a>
                          </li>
                          <li>
                            <strong>Google Play Faturalandırma / RevenueCat (uygulama içi satın alımlar):</strong> Satın almanın doğrulanması için anonim bir kullanıcı kimliği ve işlem kodu işlenir. Kredi kartı ve ödeme bilgileriniz Google Play'de kalır, bize asla ulaşmaz.{' '}
                            <a
                              href="https://www.revenuecat.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-800 hover:text-amber-950 underline font-sans text-xs inline-block ml-1"
                            >
                              RevenueCat Politikası ↗
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          3. Çocukların Gizliliği
                        </h3>
                        <p className="text-slate-700">
                          Oyun her yaştan kitleye uygundur. 13 yaş altındaki çocuklardan bilerek kişisel veri toplanmaz. Reklamlar aile dostu ve çocuklara uygun derecelendirmeyle sınırlandırılmıştır.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          4. Veri Silme Hakları
                        </h3>
                        <p className="text-slate-700">
                          Oyun harici sunucularda veri tutmadığı için silinecek bir hesap yoktur; uygulamayı kaldırmak cihazdaki tüm oyun verisini tamamen siler. Reklam kimliğinizi cihazınızın Android ayarlarından dilediğiniz an sıfırlayabilirsiniz.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeLang === 'both' && <div className="border-t-2 border-dashed border-amber-900/20 my-8" />}

                {/* ENGLISH SECTION */}
                {(activeLang === 'both' || activeLang === 'en') && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 pb-2 border-b-2 border-amber-900/20">
                      <Globe size={18} className="text-amber-800" />
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">English</h2>
                    </div>

                    <p className="text-slate-700 leading-relaxed italic bg-amber-900/[0.04] p-4 rounded-lg border-l-4 border-amber-800">
                      <strong>My Place Called</strong> ("the Game") is a single-player shop management and cooking simulation. This policy explains how data is handled.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          1. Personal Data We Collect
                        </h3>
                        <p className="text-slate-700">
                          The game runs serverless; we do not collect personal data such as your name, email, phone number, or precise location. Your shop name, slogan, currency, recipes, and settings are stored <strong>exclusively on your local device</strong> and are erased when the game is uninstalled.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          2. Third-Party Services
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li>
                            <strong>Google AdMob (optional rewarded ads):</strong> Google may process your device's advertising ID (GAID) and basic technical data to serve and measure ads and prevent fraud. In the EEA and UK, Google's consent dialog (UMP) is displayed on launch; no ad is requested without consent. You can adjust your choices at any time in <em>Settings → Privacy options</em>. Ads are requested as non-personalized (NPA) with family-friendly (G) content ratings.{' '}
                            <a
                              href="https://policies.google.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-800 hover:text-amber-950 underline font-sans text-xs inline-block ml-1"
                            >
                              Google Policy ↗
                            </a>
                          </li>
                          <li>
                            <strong>Google Play Billing / RevenueCat (in-app purchases):</strong> An anonymous user token and transaction receipt are processed to verify digital items. Your payment details remain securely with Google Play and never reach us.{' '}
                            <a
                              href="https://www.revenuecat.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-800 hover:text-amber-950 underline font-sans text-xs inline-block ml-1"
                            >
                              RevenueCat Policy ↗
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          3. Children's Privacy
                        </h3>
                        <p className="text-slate-700">
                          The game is family-friendly and suitable for all ages. It does not knowingly collect personal data from children under 13.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">
                          4. Data Deletion
                        </h3>
                        <p className="text-slate-700">
                          Since we do not host online accounts or central servers, uninstalling the app permanently deletes all your game data from your device. You may reset or opt out of your advertising identifier via your device's system settings.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Kağıt Alt Bilgisi & Mühür */}
          <div className="p-6 bg-[#f4f0e4] border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-950/70 font-sans">
            <div>
              <span>OGZ Interactives © 2026 • Tüm Hakları Saklıdır / All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span>Yürürlükte / In Effect: 24 Ekim 2026</span>
            </div>
          </div>
        </div>

        {/* Alt Geri Dön Butonu */}
        <div className="mt-8 text-center">
          <Link
            to="/urunler"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            <span>{t.products.links?.backToProducts || 'Ürünlere Dön'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

import React, { useState } from 'react';
import { ArrowLeft, Check, Copy, FileText, Globe, Mail, ShieldCheck } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { policies, policyToText, PolicyLanguage, PolicySection } from '../data/policies';

// data/policies.ts içindeki sözleşmeleri /sozlesmeler/<slug> adresinde gösterir.
// Görünüm My Place Called sözleşmesiyle (PrivacyPolicy.tsx) aynıdır.

const Section = ({ section }: { section: PolicySection }) => (
  <div>
    <h3 className="text-base font-bold text-slate-900 font-sans mb-1.5">{section.title}</h3>
    {section.paragraphs?.map((p) => (
      <p key={p} className="text-slate-700 mb-2">{p}</p>
    ))}
    {section.bullets && (
      <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
        {section.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    )}
    {section.items && (
      <div className="space-y-4 mt-3">
        {section.items.map((item) => (
          <div key={item.title} className="pl-4 border-l-2 border-amber-900/15">
            <h4 className="text-sm sm:text-base font-semibold text-slate-900 font-sans mb-1">{item.title}</h4>
            {item.paragraphs?.map((p) => (
              <p key={p} className="text-slate-700 mb-2">{p}</p>
            ))}
            {item.bullets && (
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                {item.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1.5 text-amber-800 hover:text-amber-950 underline font-sans text-xs"
              >
                {item.link.label} ↗
              </a>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

const LanguageBlock = ({ title, lang }: { title: string; lang: PolicyLanguage }) => (
  <div className="space-y-5">
    <div className="flex items-center gap-3 pb-2 border-b-2 border-amber-900/20">
      <Globe size={18} className="text-amber-800" />
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">{title}</h2>
    </div>
    <div className="space-y-5">
      {lang.sections.map((s) => <Section key={s.title} section={s} />)}
    </div>
  </div>
);

const PolicyDocument = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeLang, setActiveLang] = useState<'both' | 'tr' | 'en'>('both');
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');

  const policy = policies.find((p) => p.slug === slug);
  if (!policy) return <Navigate to="/urunler" replace />;

  const rawText = policyToText(policy);
  const handleCopy = () => {
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const langButton = (key: 'both' | 'tr' | 'en', label: string) => (
    <button
      onClick={() => setActiveLang(key)}
      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
        activeLang === key ? 'bg-amber-900 text-white shadow-sm' : 'text-amber-900/70 hover:text-amber-950'
      }`}
    >
      {label}
    </button>
  );

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
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Kopyalandı!' : 'Metni Kopyala'}</span>
            </button>
          </div>
        </div>

        {/* Sözleşme Kâğıdı */}
        <div className="relative rounded-2xl overflow-hidden bg-[#faf8f2] text-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-amber-200/50">
          <div className="h-2 w-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 opacity-80" />

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
                <p className="font-serif text-lg text-amber-950/70 italic mt-1">{policy.appName}</p>
              </div>
              {viewMode === 'formatted' && (
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-amber-900/5 border border-amber-900/10 self-start sm:self-center">
                  {langButton('both', 'Tümü')}
                  {langButton('tr', 'Türkçe')}
                  {langButton('en', 'English')}
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-6 p-4 rounded-xl bg-white/70 border border-amber-900/10 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Uygulama / App:</span> {policy.appName}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Geliştirici / Developer:</span> {policy.developer}
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-slate-900">Yürürlük ve Son Güncelleme / Effective & Last Updated:</span>{' '}
                <span className="text-emerald-800 font-medium">
                  {policy.effectiveDate.tr} / {policy.effectiveDate.en}
                </span>
              </div>
              <div className="sm:col-span-2 flex items-center gap-1.5 pt-1 border-t border-amber-900/10">
                <Mail size={13} className="text-amber-800" />
                <span className="font-semibold text-slate-900">İletişim / Contact:</span>
                <a href={`mailto:${policy.email}`} className="text-amber-900 hover:text-amber-950 underline font-medium">
                  {policy.email}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 font-serif leading-relaxed text-slate-800 text-sm sm:text-base">
            {viewMode === 'raw' ? (
              <pre className="p-5 rounded-xl bg-[#201d18] text-[#e8e2d4] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap select-all border border-amber-900/20">
                {rawText}
              </pre>
            ) : (
              <div className="space-y-8">
                {(activeLang === 'both' || activeLang === 'tr') && <LanguageBlock title="Türkçe" lang={policy.tr} />}
                {activeLang === 'both' && <div className="border-t-2 border-dashed border-amber-900/20 my-8" />}
                {(activeLang === 'both' || activeLang === 'en') && <LanguageBlock title="English" lang={policy.en} />}
              </div>
            )}
          </div>

          <div className="p-6 bg-[#f4f0e4] border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-950/70 font-sans">
            <span>{policy.developer} © 2026 • Tüm Hakları Saklıdır / All Rights Reserved.</span>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span>Yürürlükte / In Effect: {policy.effectiveDate.tr}</span>
            </div>
          </div>
        </div>

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

export default PolicyDocument;

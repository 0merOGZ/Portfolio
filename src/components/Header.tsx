import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../locales';
import { pages } from '../routes';

const flagMap = {
  tr: '/media/tr_language.webp',
  en: '/media/en_language.webp',
  es: '/media/es_language.webp',
  fr: '/media/fr_language.webp',
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const { pathname } = useLocation();

  const menuItems = pages.map((p) => ({ name: t.menu[p.key], href: p.path }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/[0.06] shadow-lg' : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Site İsmi - En Sol (yer tutucu olarak duruyor, görünmez) */}
          <div aria-hidden className="invisible select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Bahnschrift, sans-serif', minWidth: 220, fontWeight: 'bold', fontSize: '1.75em' }}>
            0merOGZ Portfolio
          </div>

          {/* Menü - Ortalanmış */}
          <div className="hidden xl:flex flex-1 justify-center items-center gap-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full font-display text-[17px] font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] h-[2px] w-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Dil Seçici - En Sağ */}
          <div className="flex items-center ml-auto">
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/90 rounded-full border border-slate-700 text-gray-200 font-medium shadow transition-all duration-300 focus:outline-none"
                style={{ fontFamily: 'Bahnschrift, sans-serif', fontWeight: 'bold', fontSize: '1.75em' }}
                onClick={() => setLangMenuOpen((v) => !v)}
              >
                <img src={flagMap[language]} alt={t.language} className="w-6 h-6 rounded-full border border-slate-600" />
                <span className="hidden sm:inline">{t.languageOption}</span>
              </button>
              {/* Dropdown */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-slate-800 border border-slate-700 rounded-lg shadow-lg animate-fade-in-up z-50">
                  {(['tr','en','es','fr'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangMenuOpen(false); }}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-slate-700 transition-all duration-200 ${lang === language ? 'bg-slate-700/60' : ''}`}
                      style={{ fontFamily: 'Bahnschrift, sans-serif', fontWeight: 'bold', fontSize: '1.75em' }}
                    >
                      <img src={flagMap[lang]} alt={lang} className="w-5 h-5 rounded-full border border-slate-600" />
                      <span>{translations[lang].language}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden mt-4 p-4 bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-white/[0.06]">
            {menuItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl font-display text-xl font-medium transition-colors duration-300 ${
                    isActive ? 'text-white bg-white/[0.07]' : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-gradient-to-r from-purple-400 to-blue-400' : 'bg-slate-600'}`} />
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
            {/* Mobile Language Selector */}
            <div className="mt-4">
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/90 rounded-full border border-slate-700 text-gray-200 font-medium shadow transition-all duration-300 focus:outline-none w-full justify-center"
                  style={{ fontFamily: 'Bahnschrift, sans-serif', fontWeight: 'bold', fontSize: '1.75em' }}
                  onClick={() => setLangMenuOpen((v) => !v)}
                >
                  <img src={flagMap[language]} alt={t.language} className="w-6 h-6 rounded-full border border-slate-600" />
                  <span>{t.languageOption}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-slate-800 border border-slate-700 rounded-lg shadow-lg animate-fade-in-up z-50">
                    {(['tr','en','es','fr'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangMenuOpen(false); }}
                        className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-slate-700 transition-all duration-200 ${lang === language ? 'bg-slate-700/60' : ''}`}
                        style={{ fontFamily: 'Bahnschrift, sans-serif', fontWeight: 'bold', fontSize: '1.75em' }}
                      >
                        <img src={flagMap[lang]} alt={lang} className="w-5 h-5 rounded-full border border-slate-600" />
                        <span>{translations[lang].language}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
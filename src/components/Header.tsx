import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../locales';

const flagMap = {
  tr: '/media/tr_language.png',
  en: '/media/en_language.png',
  es: '/media/es_language.png',
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { name: t.menu.home, href: '#home' },
    { name: t.menu.about, href: '#about' },
    { name: t.menu.education, href: '#education' },
    { name: t.menu.skills, href: '#skills' },
    { name: t.menu.projects, href: '#projects' },
    { name: t.menu.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Site İsmi - En Sol */}
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Bahnschrift, sans-serif', minWidth: 220, fontWeight: 'bold', fontSize: '1.75em' }}>
            0merOGZ Portfolio
          </div>

          {/* Menü - Ortalanmış ve Times New Roman */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
                style={{ fontFamily: 'Times New Roman, Times, serif', letterSpacing: 0.5, fontWeight: 'bold', fontSize: '1.75em' }}
              >
                {item.name}
              </button>
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
                  {(['tr','en','es'] as const).map((lang) => (
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
            className="md:hidden text-white ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 bg-slate-800/95 backdrop-blur-sm rounded-lg">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Times New Roman, Times, serif', letterSpacing: 0.5, fontWeight: 'bold', fontSize: '1.75em' }}
              >
                {item.name}
              </button>
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
                    {(['tr','en','es'] as const).map((lang) => (
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
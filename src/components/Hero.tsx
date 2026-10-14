import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { pathOf } from '../routes';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Türk Bayrağı Sol Üst Köşe */}
      {/*<div className="hidden md:block absolute top-20 left-4 z-20">
        <img
          src="/media/tr.png"
          alt={t.hero.flagAlt}
          className="w-[336px] h-[336px] rounded-full object-cover border-2 border-white shadow-lg"
        />
      </div> */}
      {/* Arka plan artık PageBackground bileşeninden geliyor */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profil Avatarı */}
          <div className="mb-8">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[448px] md:h-[448px] mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mt-8 sm:mt-16 md:mt-24 shadow-[0_0_80px_-10px_rgba(139,92,246,0.45)]">
              <img
                src="/media/pp.jpg"
                alt={t.hero.profileAlt}
                className="w-full h-full object-cover rounded-full bg-slate-800"
              />
            </div>
          </div>

          {/* Ad Soyad ve Yaş */}
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-3">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>
          {/* <h2 className="text-xl md:text-2xl text-gray-300 mb-2 font-light">24 Yaşında • Bilgisayar Mühendisi</h2> */}
          <h3 className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-6">{t.hero.location}</h3>
          <p className="text-lg md:text-xl text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/media/cv.pdf" download className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30">
              <Download size={20} />
              {t.hero.cv}
            </a>
            <Link to={pathOf('projects')} className="group border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-purple-400/50 text-slate-200 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
              {t.hero.ctaProjects}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Sosyal Medya Linkleri */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/0merOGZ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/ömer-oğuz-a73140354" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:omeryasiroguz@gmail.com" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
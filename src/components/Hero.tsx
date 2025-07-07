import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Türk Bayrağı Sol Üst Köşe */}
      {/*<div className="hidden md:block absolute top-20 left-4 z-20">
        <img
          src="/media/tr.png"
          alt={t.hero.flagAlt}
          className="w-[336px] h-[336px] rounded-full object-cover border-2 border-white shadow-lg"
        />
      </div> */}
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profil Avatarı */}
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-[448px] md:h-[448px] mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mt-8 sm:mt-16 md:mt-24">
              <img
                src="/media/pp.jpg"
                alt={t.hero.profileAlt}
                className="w-full h-full object-cover rounded-full bg-slate-800"
              />
            </div>
          </div>

          {/* Ad Soyad ve Yaş */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>
          {/* <h2 className="text-xl md:text-2xl text-gray-300 mb-2 font-light">24 Yaşında • Bilgisayar Mühendisi</h2> */}
          <h3 className="text-lg text-gray-400 mb-4">{t.hero.location}</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/media/cv.pdf" download className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              {t.hero.cv}
            </a>
          </div> <br></br><br></br>

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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/[0.06] bg-slate-950/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {t.hero.name}. {t.contact.copyright}
        </p>
        <div className="flex items-center gap-5 text-slate-500">
          <a href="https://github.com/0merOGZ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/ömer-oğuz-a73140354" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:omeryasiroguz@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { pages, PageKey } from '../routes';

interface SectionHeaderProps {
  page: PageKey;
  description?: string;
}

const SectionHeader = ({ page, description }: SectionHeaderProps) => {
  const { t } = useLanguage();
  const index = pages.findIndex((p) => p.key === page) + 1;
  return (
    <div className="text-center mb-14 md:mb-16">
      <div className="inline-flex items-center gap-3 mb-5 text-xs font-semibold tracking-[0.3em] text-purple-300/80">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400/70" />
        {String(index).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/70" />
      </div>
      <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {t.menu[page]}
        </span>
      </h1>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;

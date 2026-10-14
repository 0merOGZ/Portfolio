import React from 'react';
import { PageKey } from '../routes';

type Pattern = 'dots' | 'grid' | 'lines';

interface Variant {
  // Her sayfanın kendine ait iki ışık (glow) noktası ve bir deseni var.
  // Renkler sitenin mor-mavi tonundan sapmayacak şekilde seçildi.
  glows: [string, string];
  pattern: Pattern;
  base: string;
}

const variants: Record<PageKey, Variant> = {
  home: {
    base: 'linear-gradient(160deg, #0f172a 0%, #131030 55%, #0f172a 100%)',
    glows: [
      'radial-gradient(40rem 30rem at 15% 20%, rgba(147, 51, 234, 0.22), transparent 70%)',
      'radial-gradient(36rem 28rem at 85% 80%, rgba(59, 130, 246, 0.18), transparent 70%)',
    ],
    pattern: 'dots',
  },
  about: {
    base: 'linear-gradient(180deg, #0f172a 0%, #111633 100%)',
    glows: [
      'radial-gradient(38rem 26rem at 85% 10%, rgba(99, 102, 241, 0.2), transparent 70%)',
      'radial-gradient(34rem 26rem at 10% 90%, rgba(168, 85, 247, 0.14), transparent 70%)',
    ],
    pattern: 'grid',
  },
  education: {
    base: 'linear-gradient(200deg, #0f172a 0%, #0c1a33 100%)',
    glows: [
      'radial-gradient(40rem 28rem at 10% 15%, rgba(37, 99, 235, 0.2), transparent 70%)',
      'radial-gradient(30rem 24rem at 90% 85%, rgba(139, 92, 246, 0.14), transparent 70%)',
    ],
    pattern: 'lines',
  },
  skills: {
    base: 'linear-gradient(180deg, #0f172a 0%, #150f2e 100%)',
    glows: [
      'radial-gradient(44rem 26rem at 50% 0%, rgba(124, 58, 237, 0.22), transparent 70%)',
      'radial-gradient(36rem 24rem at 50% 100%, rgba(59, 130, 246, 0.14), transparent 70%)',
    ],
    pattern: 'grid',
  },
  projects: {
    base: 'linear-gradient(160deg, #0f172a 0%, #0e1630 100%)',
    glows: [
      'radial-gradient(40rem 28rem at 90% 10%, rgba(59, 130, 246, 0.2), transparent 70%)',
      'radial-gradient(36rem 28rem at 5% 85%, rgba(126, 34, 206, 0.16), transparent 70%)',
    ],
    pattern: 'dots',
  },
  products: {
    base: 'linear-gradient(200deg, #0f172a 0%, #1a1030 100%)',
    glows: [
      'radial-gradient(40rem 28rem at 15% 10%, rgba(192, 38, 211, 0.16), transparent 70%)',
      'radial-gradient(38rem 28rem at 90% 90%, rgba(79, 70, 229, 0.2), transparent 70%)',
    ],
    pattern: 'grid',
  },
  contact: {
    base: 'linear-gradient(180deg, #0f172a 0%, #120f2b 100%)',
    glows: [
      'radial-gradient(46rem 26rem at 50% 105%, rgba(147, 51, 234, 0.22), transparent 70%)',
      'radial-gradient(30rem 22rem at 5% 5%, rgba(37, 99, 235, 0.14), transparent 70%)',
    ],
    pattern: 'lines',
  },
};

const patternClass: Record<Pattern, string> = {
  dots: 'bg-pattern-dots',
  grid: 'bg-pattern-grid',
  lines: 'bg-pattern-lines',
};

const PageBackground = ({ page }: { page: PageKey }) => {
  const v = variants[page];
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      {/* key sayesinde sayfa değiştiğinde arka plan yumuşakça geçiş yapar */}
      <div key={page} className="absolute inset-0 animate-bg-in">
        <div className="absolute inset-0" style={{ background: v.base }} />
        <div className="absolute inset-0" style={{ background: v.glows.join(',') }} />
        <div className={`absolute inset-0 bg-pattern-mask ${patternClass[v.pattern]}`} />
      </div>
      {/* Üst ve alt kenarlarda hafif kararma: derinlik hissi */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent" />
    </div>
  );
};

export default PageBackground;

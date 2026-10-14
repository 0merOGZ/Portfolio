import React, { useState } from 'react';
import { AppWindow, Download, Gamepad2, Globe, Layers, Rocket, Store } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SectionHeader from './SectionHeader';
import { products, ProductCategory, ProductStatus } from '../data/products';

type Filter = 'all' | ProductCategory;

const statusStyle: Record<ProductStatus, string> = {
  released: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  beta: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
  soon: 'bg-blue-500/15 text-blue-300 border-blue-400/30',
};

const categoryIcon: Record<ProductCategory, React.ReactNode> = {
  game: <Gamepad2 size={16} />,
  app: <AppWindow size={16} />,
};

const Products = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');

  const filters: { key: Filter; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: t.products.all, icon: <Layers size={16} /> },
    { key: 'game', label: t.products.games, icon: <Gamepad2 size={16} /> },
    { key: 'app', label: t.products.apps, icon: <AppWindow size={16} /> },
  ];

  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter);
  const countOf = (key: Filter) => (key === 'all' ? products.length : products.filter((p) => p.category === key).length);

  return (
    <section id="products" className="pt-32 pb-24 md:pt-36">
      <div className="container mx-auto px-6">
        <SectionHeader page="products" description={t.products.desc} />

        {/* Kategori filtresi */}
        {products.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-purple-400/50 text-white'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {f.icon}
                {f.label}
                <span className="text-xs text-slate-400">{countOf(f.key)}</span>
              </button>
            ))}
          </div>
        )}

        {visible.length === 0 ? (
          /* Henüz ürün yoksa */
          <div className="card-glass max-w-xl mx-auto p-10 text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/10 flex items-center justify-center text-purple-200">
              <Rocket size={28} />
            </div>
            <h2 className="font-display text-2xl font-semibold text-white mb-3">{t.products.emptyTitle}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">{t.products.emptyDesc}</p>
            <div className="flex justify-center gap-3 text-slate-500">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-sm">
                <Gamepad2 size={16} /> {t.products.games}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-sm">
                <AppWindow size={16} /> {t.products.apps}
              </span>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((product) => {
              const text = product.text[language];
              return (
                <article key={product.id} className="group card-glass card-glass-hover hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div className="relative overflow-hidden aspect-video bg-slate-800">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={text.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        {product.category === 'game' ? <Gamepad2 size={48} /> : <AppWindow size={48} />}
                      </div>
                    )}
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${statusStyle[product.status]}`}>
                      {t.products.status[product.status]}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3 gap-3">
                      <h3 className="font-display text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {text.title}
                      </h3>
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm shrink-0">
                        {categoryIcon[product.category]}
                        {product.year}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{text.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.platforms.map((platform) => (
                        <span key={platform} className="bg-blue-500/15 text-blue-200 px-2 py-1 rounded-md text-xs font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {product.links?.store && (
                        <a href={product.links.store} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                          <Store size={16} className="mr-2" />
                          {t.products.links.store}
                        </a>
                      )}
                      {product.links?.download && (
                        <a href={product.links.download} download className="flex items-center justify-center flex-1 border border-white/15 hover:border-purple-400 text-slate-300 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                          <Download size={16} className="mr-2" />
                          {t.products.links.download}
                        </a>
                      )}
                      {product.links?.web && (
                        <a href={product.links.web} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 border border-white/15 hover:border-purple-400 text-slate-300 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                          <Globe size={16} className="mr-2" />
                          {t.products.links.web}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

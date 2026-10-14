import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageBackground from './components/PageBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Products from './components/Products';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { pages, PageKey } from './routes';

const pageComponents: Record<PageKey, React.ComponentType> = {
  home: Hero,
  about: About,
  education: Education,
  skills: Skills,
  projects: Projects,
  products: Products,
  contact: Contact,
};

function Layout() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const current = pages.find((p) => p.path === pathname)?.key ?? 'home';

  // Sayfa değişince en üste dön ve sekme başlığını güncelle
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    document.title = current === 'home'
      ? 'Ömer OĞUZ Portfolio Website'
      : `${t.menu[current]} | Ömer OĞUZ Portfolio`;
  }, [current, t]);

  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <PageBackground page={current} />
      <Header />
      <main key={pathname} className="flex-1 animate-page-in">
        <Routes>
          {pages.map(({ key, path }) => {
            const Page = pageComponents[key];
            return <Route key={key} path={path} element={<Page />} />;
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

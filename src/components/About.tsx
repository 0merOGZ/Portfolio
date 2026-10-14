import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useLanguage();
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t.about?.cleanCode,
      description: t.about?.cleanCodeDesc
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t.about?.creative,
      description: t.about?.creativeDesc
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.about?.teamwork,
      description: t.about?.teamworkDesc
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t.about?.goalOriented,
      description: t.about?.goalOrientedDesc
    }
  ];

  return (
    <section id="about" className="pt-32 pb-24 md:pt-36">
      <div className="container mx-auto px-6">
        <SectionHeader page="about" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t.about.intro} Ömer Yasir OĞUZ.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.about.p3}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glass card-glass-hover hover:-translate-y-1 p-6"
              >
                <div className="text-purple-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
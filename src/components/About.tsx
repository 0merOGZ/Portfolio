import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

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
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.menu.about}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t.about.intro} Ömer Yasir OĞUZ.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.about.p3}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
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
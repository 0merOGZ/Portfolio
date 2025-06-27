import React from 'react';
import { useLanguage } from '../LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React', level: 65 },
        { name: 'Next.js', level: 45 },
        { name: 'HTML', level: 30 }
      ]
    },
    {
      title: t.skills.backend,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 60 },
        { name: 'Java', level: 35 }
      ]
    },
    {
      title: t.skills.other,
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'MC Word,Excel & PowerPoint', level: 80 },
        { name: 'Celtx', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.menu.skills}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.skills.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
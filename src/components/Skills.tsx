import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const { t } = useLanguage();
  // Çubuklar sayfa açılınca 0'dan dolarak gelsin
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setFilled(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React', level: 50 },
        { name: 'Next.js', level: 45 },
        { name: 'HTML', level: 55 }
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
    <section id="skills" className="pt-32 pb-24 md:pt-36">
      <div className="container mx-auto px-6">
        <SectionHeader page="skills" description={t.skills.desc} />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-glass card-glass-hover p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-700/60 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: filled ? `${skill.level}%` : '0%' }}
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
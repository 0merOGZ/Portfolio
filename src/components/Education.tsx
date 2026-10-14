import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SectionHeader from './SectionHeader';

const Education = () => {
  const { t } = useLanguage();
  const educationData = t.educationData;
  const courses = [
    'C++ and OOP Design',
    'GUI Design with Tkinter, David LOVE',
    'Basic Flutter',
    'SQL Server Install and Integration',
    'Beginner Python',
    'Celtx Screenplay Editor'
  ];
  // Türkçe sabit kurum isimleri
  const institutions = [
    'Beykoz Üniversitesi - Beykoz/İSTANBUL',
    'Mustafa Saffet Anadolu Lisesi - Kadıköy/İSTANBUL',
  ];

  return (
    <section id="education" className="pt-32 pb-24 md:pt-36">
      <div className="container mx-auto px-6">
        <SectionHeader page="education" description={t.education?.desc} />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-purple-400" />
              {t.education.history}
            </h3>
            <div className="space-y-8">
              {educationData.map((edu: any, index: number) => (
                <div
                  key={index}
                  className="relative card-glass card-glass-hover p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-purple-400 mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-purple-400 font-medium text-sm">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-blue-400 font-medium mb-2">
                        {institutions[index]}
                      </p>
                      <p className="text-slate-400 mb-3 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div className="space-y-8">
            {/* Additional Courses */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <BookOpen className="mr-3 text-purple-400" />
                {t.education.courses}
              </h3>
              <div className="space-y-2">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="card-glass card-glass-hover !rounded-xl !shadow-none p-3"
                  >
                    <p className="text-slate-300 text-sm">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
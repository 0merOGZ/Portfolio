import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const educationData = t.educationData;
  const courses = [
    'C++ and OOP Design',
    'GUI Design with Tkinter, David LOVE',
    'Basic Flutter',
    'SQL Server Install and Integration',
    'Beginer Python',
    'Celtx Screenplay Editor',
  ];
  // Türkçe sabit kurum isimleri
  const institutions = [
    'Beykoz Üniversitesi - Beykoz/İSTANBUL',
    'Mustafa Saffet Anadolu Lisesi - Kadıköy/İSTANBUL',
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.menu.education}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.education?.desc}
          </p>
        </div>

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
                  className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
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
                      <p className="text-gray-400 mb-3 leading-relaxed">
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
                    className="bg-slate-800/30 p-3 rounded-lg border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <p className="text-gray-300 text-sm">
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
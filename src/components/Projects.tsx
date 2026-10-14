import React from 'react';
import { ExternalLink, Github, Calendar, Images, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const { t } = useLanguage();
  const projects = t.projectsData;
  // Sıralama: en yeni proje sol üstte, en eski sağ altta.
  // Bu listelerin sırası locales.ts içindeki projectsData sırasıyla aynı olmalı.
  const images = [
    '/media/heic2jpg.webp',
    '/media/mpeg2mp4.webp',
    '/media/todo.webp',
    '/media/kelime.webp',
    '/media/db.webp',
    '/media/bjk.webp',
    '/media/quiz.webp',
  ];
  const technologies = [
    ['C#', '.NET 9', 'Magick.NET', 'JavaScript'],
    ['C#', '.NET 9', 'FFmpeg', 'Console App'],
    ['.net', 'ASP Core', 'Tailwind CSS'],
    ['Python', 'Tkinter', 'SQLite', 'OOP', 'PyInstaller'],
    ['SQL', 'SQL Server', 'SSMS'],
    ['Python', 'Machine Learning', 'AI', 'Deep Learning'],
    ['Python', 'Tkinter', 'SQLite'],
  ];
  // Demo (exe vb.) ve Görseller butonları için Drive linkleri.
  // Boş bırakılan ('') butonlar sitede görünmez; linki yapıştırınca buton otomatik çıkar.
  const liveUrls = [
    '', // heic2jpg -> heic2jpg.exe Drive linki
    '', // mpeg2mp4 -> mpeg2mp4.exe Drive linki
    '',
    'https://drive.google.com/drive/folders/1eLNt-wJrAi5MR8l1nO0hZlgcgGHLTq3V?usp=drive_link', // Kelime Avı
    '',
    '',
    '', // General Quiz -> General Quiz.exe Drive linki
  ];
  const mediaUrls = [
    '', // heic2jpg görseller
    '', // mpeg2mp4 görseller
    '', // TodoList görseller
    '', // Kelime Avı görseller
    '', // Veritabanı görseller
    '', // Blackjack AI görseller
    '', // General Quiz görseller
  ];
  // Proje raporları (PDF). Boş olanlarda Rapor butonu görünmez.
  const reportUrls = [
    '',
    '',
    '',
    '',
    '/media/db_report.pdf', // Araba Satış/Kiralama Galeri Veritabanı
    '',
    '',
  ];
  const githubUrls = [
    'https://github.com/0merOGZ/heic2jpg',
    'https://github.com/0merOGZ/mpeg2mp4',
    'https://github.com/0merOGZ/toDoList_MyTasks',
    'https://github.com/0merOGZ/kelimeOyunu',
    '',
    'https://github.com/HasancanCakicioglu/Custom-BlackJack-Environment-ReinforcementLearning',
    '',
  ];
  const dates = ['2026', '2026', '2025', '2025', '2024', '2023', '2023'];

  return (
    <section id="projects" className="pt-32 pb-24 md:pt-36">
      <div className="container mx-auto px-6">
        <SectionHeader page="projects" description={t.projects.desc} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <div
              key={index}
              className="group card-glass card-glass-hover hover:-translate-y-1 overflow-hidden h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={images[index]}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {dates[index]}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies[index].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {liveUrls[index] && (
                    <a
                      href={liveUrls[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {t.projects.demo}
                    </a>
                  )}
                  {mediaUrls[index] && (
                    <a
                      href={mediaUrls[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      <Images size={16} className="mr-2" />
                      {t.projects.media}
                    </a>
                  )}
                  {reportUrls[index] && (
                    <a
                      href={reportUrls[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      <FileText size={16} className="mr-2" />
                      {t.projects.report}
                    </a>
                  )}
                  {githubUrls[index] && (
                    <a
                      href={githubUrls[index]}
                      className="flex items-center justify-center flex-1 border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      {t.projects.code}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projects = t.projectsData;
  const images = [
    '/media/todo.png',
    '/media/kelime.png',
    '/media/bjk.jpg',
    '/media/db.png',
  ];
  const technologies = [
    ['.net', 'ASP Core', 'Tailwind CSS'],
    ['Python', 'Tkinter', 'Pygame', 'OOP', 'SQL'],
    ['Python', 'Machine Learning', 'AI', 'Deep Learning'],
    ['SQL', 'SQL Server', 'SSMS'],
  ];
  const liveUrls = [
    '#',
    'https://drive.google.com/drive/folders/1eLNt-wJrAi5MR8l1nO0hZlgcgGHLTq3V?usp=drive_link',
    '#',
    '#',
  ];
  const githubUrls = [
    'https://github.com/0merOGZ/toDoList_MyTasks',
    'https://github.com/0merOGZ/kelimeOyunu',
    'https://github.com/HasancanCakicioglu/Custom-BlackJack-Environment-ReinforcementLearning',
    '#',
  ];
  const dates = ['2025', '2025', '2023', '2024'];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.menu.projects}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.projects.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <div
              key={index}
              className="group bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={images[index]}
                  alt={project.title}
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
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {dates[index]}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
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
                <div className="flex space-x-3 mt-auto">
                  {liveUrls[index] && liveUrls[index] !== '#' && (
                    <a
                      href={liveUrls[index]}
                      download={liveUrls[index].endsWith('.exe')}
                      className="flex items-center justify-center flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {t.projects.demo}
                    </a>
                  )}
                  {githubUrls[index] && githubUrls[index] !== '#' && (
                    <a
                      href={githubUrls[index]}
                      className="flex items-center justify-center flex-1 border border-slate-600 hover:border-purple-500 text-gray-300 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
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
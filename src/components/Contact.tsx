import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sunucu olmadığı için mesaj, ziyaretçinin e-posta uygulamasında hazır olarak açılır
    const body = `${formData.message}

— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:omeryasiroguz@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: t.contactInfo[0].title,
      value: 'omeryasiroguz@gmail.com',
      link: 'mailto:omeryasiroguz@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: t.contactInfo[1].title,
      value: 'Üsküdar/İSTANBUL',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/0merOGZ',
      color: 'hover:text-slate-400'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ömer-oğuz-a73140354',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="pt-32 pb-24 md:pt-36">
      <div className="container mx-auto px-6">
        <SectionHeader page="contact" description={t.contact.desc} />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t.contact.info}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 card-glass card-glass-hover p-4 !rounded-xl group"
                  >
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        {info.title}
                      </h4>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t.contact.social}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-glass card-glass-hover p-3 !rounded-xl text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Available for Work */}
            <div className="bg-gradient-to-r from-purple-500/15 to-blue-500/15 p-6 rounded-2xl border border-purple-400/25 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white mb-2">
                {t.contact.partnership}
              </h3>
              <p className="text-slate-300 mb-4">
                {t.contact.partnershipDesc}
              </p>
              <div className="flex gap-2 items-center">
                <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                  🔴 {t.contact.notAvailable}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t.contact.sendMessage}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 card-glass p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder={t.contact.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 resize-none transition-colors duration-300"
                  placeholder={t.contact.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{t.contact.send}</span>
              </button>
              <p className="text-slate-500 text-xs text-center">{t.contact.mailHint}</p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
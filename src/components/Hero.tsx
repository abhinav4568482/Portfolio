import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter, Instagram, AlertCircle, Code } from 'lucide-react';
import EnhancedBackground from './EnhancedBackground';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const jobTitles = [
    'Web Developer',
    'UI/UX Designer',
    'React Enthusiast'
  ];
  const typedTitle = useTypingEffect(jobTitles, 120, 1200);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setError(null);
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Abhinav_Singh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    } catch (err) {
      console.error('Download error:', err);
      setError('Download failed. Please try again.');
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0d1117] pt-24 sm:pt-28 md:pt-32"
      style={{ scrollMarginTop: '96px' }}
    >
      {/* Animated Background Layer */}
      <EnhancedBackground />
      {/* Spotlight Glow Behind Profile Image */}
      <div className="absolute left-1/2 top-[120px] -translate-x-1/2 z-10 pointer-events-none">
        <div className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-radial from-blue-500/40 via-purple-500/30 to-transparent blur-3xl opacity-60"></div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image with Enhanced Ring/Glow */}
          <div className="mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-[200px] md:h-[200px] float-vertical relative">
            <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-2xl opacity-70 z-0"></div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl shadow-blue-500/40 ring-4 ring-blue-400/40 ring-offset-2 ring-offset-[#0d1117] w-full h-full relative z-10"
              style={{ boxShadow: '0 8px 40px 0 rgba(59,130,246,0.30), 0 0 48px 12px rgba(139,92,246,0.18)' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1117] flex items-center justify-center">
                <img
                  src="/images/profile.jpg"
                  alt="Abhinav Singh"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'drop-shadow(0 0 32px #6366f1bb)' }}
                  draggable="false"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-center font-[ClashDisplay,sans-serif] drop-shadow-[0_4px_32px_rgba(59,130,246,0.18)]"
            style={{
              fontFamily: 'Clash Display, sans-serif',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 24px rgba(59,130,246,0.18), 0 1px 0 #fff2',
            }}
          >
            Abhinav Singh
          </motion.h1>
          {/* Typing Animated Job Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-16 flex items-center justify-center"
          >
            <span className="text-2xl md:text-3xl font-semibold text-blue-400 font-sans">
              {typedTitle}
              <span className="inline-block w-2 h-7 bg-blue-400 ml-1 animate-pulse align-middle rounded-sm" />
            </span>
          </motion.div>
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Turning ideas into impactful web & mobile experiences.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={!isDownloading ? { scale: 1.08, y: -4, boxShadow: '0 0 0 4px #3b82f6aa' } : {}}
              whileTap={!isDownloading ? { scale: 0.97 } : {}}
              className={`group flex items-center justify-center w-[220px] h-[52px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-blue-400/70 focus:ring-2 focus:ring-blue-400/50 ${isDownloading ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            >
              {isDownloading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Download className="w-5 h-5 group-hover:animate-pulse group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="ml-2">Download Resume</span>
                </>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, y: -4, boxShadow: '0 0 0 4px #60a5fa99' }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="group flex items-center gap-2 border-2 border-blue-400 text-blue-400 bg-gradient-to-r from-blue-900/30 to-purple-900/30 hover:bg-blue-400 hover:text-[#0d1117] px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl focus:ring-2 focus:ring-blue-400/50"
            >
              <Mail className="w-5 h-5 group-hover:animate-pulse group-hover:translate-x-1 transition-transform duration-300" />
              Contact Me
            </motion.button>
          </motion.div>
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 mt-4 text-red-400"
            >
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{error}</span>
            </motion.div>
          )}
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/abhinav4568482', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/avinvxsingh', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/avinv99', label: 'Twitter' },
              { icon: Instagram, href: 'https://www.instagram.com/avinvxsingh/', label: 'Instagram' },
              { icon: Code, href: 'https://leetcode.com/u/abhichristine765/', label: 'LeetCode' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 bg-gray-800 text-gray-300 hover:text-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter, Instagram, AlertCircle, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Frontend Developer',
    'Software Engineer',
    'MERN Stack Enthusiast',
    'Flutter Developer',
    'Problem Solver'
  ];

  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0d1117]">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Bubbles */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-500/20 rounded-full blur-sm"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500/15 rounded-full blur-sm"
          animate={{
            y: [0, -40, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-500/25 rounded-full blur-sm"
          animate={{
            y: [0, -25, 0],
            x: [0, 30, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/6 w-5 h-5 bg-indigo-500/20 rounded-full blur-sm"
          animate={{
            y: [0, -35, 0],
            x: [0, -25, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/6 right-1/3 w-2 h-2 bg-emerald-500/30 rounded-full blur-sm"
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/4 w-3.5 h-3.5 bg-rose-500/20 rounded-full blur-sm"
          animate={{
            y: [0, -22, 0],
            x: [0, -18, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        {/* Glowing Particles */}
        <motion.div
          className="absolute top-1/2 left-1/5 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-3/4 left-1/2 w-1 h-1 bg-cyan-400/50 rounded-full"
          animate={{
            y: [0, -12, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {/* Primary Wave */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          animate={{
            x: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient1)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Secondary Wave */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#waveGradient2)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#c084fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Tertiary Wave */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          animate={{
            x: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
        >
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#waveGradient3)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" />
              <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0891b2" stopOpacity="0.15" />
              <stop offset="75%" stopColor="#0e7490" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Subtle Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/src/images/profile.jpg" 
                alt="Abhinav Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-[#e6edf3]"
          >
            Abhinav Singh
          </motion.h1>

          {/* Animated Titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-16 flex items-center justify-center"
          >
            <motion.h2
              key={currentTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-medium text-blue-400"
            >
              {titles[currentTitle]}
            </motion.h2>
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
              whileHover={!isDownloading ? { scale: 1.05 } : {}}
              whileTap={!isDownloading ? { scale: 0.95 } : {}}
              className={`flex items-center justify-center w-[220px] h-[52px] bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${isDownloading ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            >
              {isDownloading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span className="ml-2">Download Resume</span>
                </>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0d1117] px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
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
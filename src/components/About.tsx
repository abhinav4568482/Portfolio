import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Heart, Code, Users } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = {
    technical: ['React', 'Flutter', 'Python', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'C++', 'HTML/CSS', 'Git'],
    soft: ['Teamwork', 'Communication', 'Problem Solving', 'Time Management']
  };

  const interests = ['Building projects', 'Reading about AI', 'Hackathons', 'Blogging', 'Ghazals'];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <AuroraBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: '0 0 15px rgba(96, 165, 250, 0.5)' }}>
              About Me
            </h2>
            <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio & Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate software engineer with a love for creating innovative solutions that make a difference. 
                  My journey in tech began with curiosity and has evolved into a deep commitment to building impactful 
                  web and mobile applications.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science Engineering with a focus on Software Engineering, 
                  I combine academic knowledge with hands-on experience to tackle real-world challenges.
                </p>
              </div>

              {/* Education */}
              <motion.div
                whileHover={{ scale: 1.02,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                 }}
                className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-blue-800/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300">
                  <strong>B.Tech CSE (Software Engineering)</strong><br />
                  SRM Institute of Science and Technology<br />
                  Kattankulathur, Tamil Nadu<br />
                  <strong className="text-blue-400">CGPA: 9.40/10</strong>
                </p>
              </motion.div>

              {/* Interests */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}
                className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-purple-800/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Technical Skills */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
                className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-green-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skills.technical.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 p-2 bg-gray-800/70 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' }}
                className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-orange-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skills.soft.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 p-2 bg-gray-800/70 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}
                className="p-6 rounded-xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Fun Facts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🌙 Loves coding late at night</li>
                  <li>🐕 Owns a dog named Zoro</li>
                  <li>🎵 Listens to ghazals while coding</li>
                  <li>🚀 Currently exploring Edge AI & Kubernetes</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
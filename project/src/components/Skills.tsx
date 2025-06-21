import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Cloud, Palette, Users } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'green',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 80 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'Tools',
      icon: Cloud,
      color: 'teal',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Vercel', level: 80 },
        { name: 'Netlify', level: 75 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'pink',
      skills: [
        { name: 'Leadership', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Creativity', level: 88 },
        { name: 'Problem Solving', level: 92 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-800/50 text-blue-400 shadow-blue-500/20',
      green: 'from-green-500 to-green-600 border-green-800/50 text-green-400 shadow-green-500/20',
      purple: 'from-purple-500 to-purple-600 border-purple-800/50 text-purple-400 shadow-purple-500/20',
      orange: 'from-orange-500 to-orange-600 border-orange-800/50 text-orange-400 shadow-orange-500/20',
      teal: 'from-teal-500 to-teal-600 border-teal-800/50 text-teal-400 shadow-teal-500/20',
      pink: 'from-pink-500 to-pink-600 border-pink-800/50 text-pink-400 shadow-pink-500/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities and professional competencies.
            </p>
            <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color).split(' ');
              return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, boxShadow: `0 10px 20px -5px var(--tw-shadow-color)` }}
                className={`p-6 rounded-2xl border bg-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ${colorClasses[2]} shadow-` + category.color +'-500/10'}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[0]} ${colorClasses[1]}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${colorClasses[3]}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2.5 rounded-full bg-gradient-to-r ${colorClasses[0]} ${colorClasses[1]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )})}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of software development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
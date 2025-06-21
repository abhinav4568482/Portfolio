import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Smartphone, Brain, Shield, Stethoscope, Hand } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Epidemic Prediction System – Nipah Virus Risk Index Mapper',
      description: 'A web-based system to assess Nipah virus risk in India using K-Means clustering (k=4) on 6 key indicators. Features dynamic choropleth maps for visualization. Institute: SRM Institute of Science and Technology. (Mar 2025 – May 2025)',
      tech: ['Python', 'Pandas', 'K-Means Clustering', 'Flask', 'Geo-mapping'],
      icon: Stethoscope,
      gradient: 'from-purple-600 to-red-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'PromptInn',
      description: 'A comprehensive MERN stack hotel booking application with user authentication, real-time availability, and secure payment integration.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      icon: Smartphone,
      gradient: 'from-blue-500 to-purple-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Stock Market Predictor',
      description: 'Deep learning model using LSTM networks for stock price prediction, enhanced with sentiment analysis using BERT and VADER.',
      tech: ['Python', 'TensorFlow', 'LSTM', 'BERT', 'VADER'],
      icon: Brain,
      gradient: 'from-green-500 to-teal-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Emergency Button App',
      description: 'Flutter-based safety application for women with real-time location sharing, emergency contacts, and instant alert system.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      icon: Shield,
      gradient: 'from-red-500 to-pink-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Pneumonia Detection using CNN',
      description: 'AI-powered healthcare solution using Convolutional Neural Networks to detect pneumonia from chest X-ray images.',
      tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Keras'],
      icon: Stethoscope,
      gradient: 'from-indigo-500 to-blue-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Sign Language to Text and Speech',
      description: 'Computer vision project that translates sign language gestures into text and speech using machine learning algorithms.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Text-to-Speech'],
      icon: Hand,
      gradient: 'from-orange-500 to-red-600',
      github: '#',
      demo: '#'
    }
  ];

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

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              My Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming complex challenges into elegant solutions through cutting-edge technology and creative problem-solving.
            </p>
            <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Want to see more of my work?
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
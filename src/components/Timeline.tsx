import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Code, BookOpen, School, Star, Shield } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'red' | 'yellow';
  details?: {
    [key: string]: string;
  };
}

const TimelineCard: React.FC<{ events: TimelineEvent[]; title: string }> = ({ events, title }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-400',
      green: 'bg-green-500 text-green-400',
      purple: 'bg-purple-500 text-purple-400',
      orange: 'bg-orange-500 text-orange-400',
      teal: 'bg-teal-500 text-teal-400',
      red: 'bg-red-500 text-red-400',
      yellow: 'bg-yellow-500 text-yellow-400',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gray-900/50 p-8 rounded-2xl shadow-xl border border-white/10"
    >
      <h3 className="text-3xl font-bold text-white mb-8 text-center">{title}</h3>
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 30 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-start sm:justify-center sm:odd:flex-row-reverse gap-6"
            >
              <div
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full shadow-lg ${getColorClasses(event.color).split(' ')[0]}`}
              >
                <event.icon className="w-5 h-5 text-white" />
              </div>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                className="w-full sm:w-5/12 bg-gray-800/60 p-6 rounded-xl shadow-lg border border-transparent transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className={`w-5 h-5 ${getColorClasses(event.color).split(' ')[1]}`} />
                  <span className={`text-lg font-bold ${getColorClasses(event.color).split(' ')[1]}`}>
                    {event.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
                {event.details && (
                  <div className="mt-3 border-t border-gray-700 pt-3">
                    {Object.entries(event.details).map(([key, value]) => (
                      <p key={key} className="text-sm text-gray-400">
                        <span className="font-semibold">{key}:</span> {value}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const educationEvents: TimelineEvent[] = [
    {
      year: '2018',
      title: 'Class 10',
      description: 'Completed my secondary education with a strong academic record.',
      icon: School,
      color: 'blue',
      details: {
        'School': 'GPS International School, Gurugram',
        'Board': 'CBSE',
        'Score': '90.25%',
      },
    },
    {
      year: '2019',
      title: 'TES Indian Army Qualified',
      description: 'Cleared the Technical Entry Scheme and appeared for the SSB Interview.',
      icon: Shield,
      color: 'red',
    },
    {
      year: '2019',
      title: 'Maths Olympiad Winner',
      description: 'Won the Maths Olympiad at the school level, showcasing strong analytical skills.',
      icon: Star,
      color: 'yellow',
    },
    {
      year: '2020',
      title: 'Class 12',
      description: 'Completed my higher secondary education, focusing on science and mathematics.',
      icon: School,
      color: 'blue',
      details: {
        'School': 'Kendriya Vidyalaya, Sector 14, Gurugram, Haryana',
        'Board': 'CBSE',
      },
    },
    {
      year: '2020',
      title: 'NDA Written Qualified',
      description: 'Cleared the National Defence Academy written exam and appeared for the SSB Interview in Bangalore.',
      icon: Shield,
      color: 'red',
    },
    {
      year: '2020 - 2024',
      title: 'B.Tech in Computer Science',
      description: 'Pursuing my undergraduate degree with a focus on core computer science principles and software development.',
      icon: BookOpen,
      color: 'green',
    },
  ];

  const techJourneyEvents: TimelineEvent[] = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning programming with C++ and discovered my passion for problem-solving.',
      icon: Code,
      color: 'purple'
    },
    {
      year: '2021',
      title: 'Web Development Foundations',
      description: 'Mastered HTML, CSS, and JavaScript. Built my first interactive web applications.',
      icon: BookOpen,
      color: 'teal'
    },
    {
      year: '2022',
      title: 'React & Modern Frontend',
      description: 'Dove deep into the React ecosystem and modern frontend development practices, including state management and hooks.',
      icon: Code,
      color: 'purple'
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      description: 'Expanded to backend with Node.js, Express, and databases, building complete MERN applications.',
      icon: Award,
      color: 'orange'
    },
    {
      year: '2024',
      title: 'AI/ML & Mobile Development',
      description: 'Exploring AI/ML with Python and cross-platform mobile development with Flutter.',
      icon: BookOpen,
      color: 'teal'
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of my academic achievements and professional growth.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="space-y-16">
          <TimelineCard title="Education & Achievements" events={educationEvents} />
          <TimelineCard title="Tech Journey" events={techJourneyEvents} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
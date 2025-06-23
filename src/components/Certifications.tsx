import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartHandshake, Link as LinkIcon, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AuroraBackground from './AuroraBackground';

interface Item {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  description?: string;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow';
}

const awards: Item[] = [
  {
    title: 'Best Innovation Award – Smart Waste Management System',
    issuer: 'Department of Physics and Nanotechnology, SRM Institute',
    date: 'Nov 2022',
    link: '#',
    icon: Award,
    color: 'yellow',
  },
];

const certifications: Item[] = [
  { title: 'NPTEL – Data Mining', issuer: 'IIT Madras', date: 'Mar 2025', link: '#', icon: ShieldCheck, color: 'blue' },
  { title: 'Oracle Cloud Infrastructure 2023 Certified Foundations', issuer: 'Oracle', date: 'Jan 2025', link: '#', icon: ShieldCheck, color: 'red' },
  { title: 'Cisco Networking Academy – Introduction to Data Science', issuer: 'Cisco', date: 'Oct 2024', link: '#', icon: ShieldCheck, color: 'blue' },
  { title: 'IBM Cognitive Class – Python for Data Science', issuer: 'IBM', date: 'Jan 2025', link: '#', icon: ShieldCheck, color: 'blue' },
  { title: 'AWS Academy Graduate – AWS Machine Learning', issuer: 'Amazon Web Services', date: 'Jan 2023', link: '#', icon: ShieldCheck, color: 'orange' },
];

const volunteering: Item[] = [
  {
    title: 'Savya Sanchi Rural and Urban Development Centre',
    issuer: 'Volunteer – Community Development',
    date: 'Jan 2024 – May 2024',
    link: '#',
    description: 'Worked in tribal villages across Seoni, Madhya Pradesh through door-to-door sessions and community workshops on education, healthcare, and government schemes.',
    icon: HeartHandshake,
    color: 'green',
  },
];

const ItemCard: React.FC<Item> = (item) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-900/30 text-blue-400 border-blue-500/30',
      green: 'bg-green-900/30 text-green-400 border-green-500/30',
      purple: 'bg-purple-900/30 text-purple-400 border-purple-500/30',
      orange: 'bg-orange-900/30 text-orange-400 border-orange-500/30',
      red: 'bg-red-900/30 text-red-400 border-red-500/30',
      yellow: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 border ${getColorClasses(item.color)}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${getColorClasses(item.color).split(' ')[0]}`}>
          <item.icon className={`w-6 h-6 ${getColorClasses(item.color).split(' ')[1]}`} />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white">{item.title}</h4>
          <p className={`font-semibold ${getColorClasses(item.color).split(' ')[1]}`}>{item.issuer}</p>
          <div className="flex items-center text-sm text-gray-400 mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{item.date}</span>
          </div>
          {item.description && (
            <p className="text-gray-300 mt-3">{item.description}</p>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              <span>View Certificate</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <AuroraBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: '0 0 15px rgba(96, 165, 250, 0.5)' }}>
            Certifications & Awards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my commitment to continuous learning and excellence.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="space-y-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 relative inline-block">
              <span className="relative z-10">Awards</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/50 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-1 gap-8">
              {awards.map((item, index) => <ItemCard key={index} {...item} />)}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 relative inline-block">
              <span className="relative z-10">Certifications</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-500/50 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((item, index) => <ItemCard key={index} {...item} />)}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 relative inline-block">
              <span className="relative z-10">Volunteering Experience</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500/50 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-1 gap-8">
              {volunteering.map((item, index) => <ItemCard key={index} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
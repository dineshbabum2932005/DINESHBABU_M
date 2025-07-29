import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaDatabase, FaCodeBranch, FaTrophy } from 'react-icons/fa';

const certs = [
  {
    title: 'MongoDB Course Completion',
    icon: <FaDatabase size={30} className="text-green-600" />,
    description: 'Completed a hands-on MongoDB course, covering CRUD operations, indexing, aggregation, and schema design.'
  },
  {
    title: 'NPTEL - Human Computer Intraction',
    icon: <FaMedal size={30} className="text-yellow-500" />,
    description: 'Certified by NPTEL for completing Course of Human Computer Intraction.'
  },
  {
    title: 'NPTEL - Privacy & Security Online Social Media.',
    icon: <FaMedal size={30} className="text-yellow-500" />,
    description: 'Certified by NPTEL for Completing Course of Privacy & Security Online Social Media.'
  },
  {
    title: 'Hackathon Participation',
    icon: <FaTrophy size={30} className="text-indigo-500" />,
    description: 'Actively participated in a national-level Hackathon focused on building real-time problem-solving applications.'
  }
];

const Certifications = () => (
  <motion.section
    id="certifications"
    className="py-24 px-8 bg-gray-100 dark:bg-gray-900"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {certs.map((cert, i) => (
        <motion.div
          key={i}
          className="bg-white/90 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center gap-4 mb-3">
            {cert.icon}
            <h3 className="text-xl font-semibold">{cert.title}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Certifications;

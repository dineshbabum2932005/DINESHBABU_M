import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech - Information Technology",
    institute: "Kongu Engineering College, Perundurai",
    year: "2022 - 2026",
    cgpa: "CGPA: 7.10",
  },
  {
    title: "HSC - BIO MATHS",
    institute: "Vivekanandha Vidhyalaya Hr. Sec. School, Oddanchatram",
    year: "2021 - 2022",
    cgpa: "Percentage: 73.7%",
  },
  {
    title: "SSLC",
    institute: "Vivekanandha Vidhyalaya Hr. Sec. School, Oddanchatram",
    year: "2019 - 2020",
    cgpa: "Percentage: 77.6%",
  },
];

const Education = () => (
  <motion.section
    id="education"
    className="py-24 px-8 bg-white dark:bg-gray-900"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-center mb-10">🎓 Education</h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-white/90 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition duration-300 relative"
          whileHover={{ scale: 1.03 }}
        >
          <div className="absolute -top-6 left-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg">
            <FaGraduationCap size={20} />
          </div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-1">{edu.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{edu.institute}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
          <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">{edu.cgpa}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Education;

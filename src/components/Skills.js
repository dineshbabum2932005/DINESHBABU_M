import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { FaJava, FaReact, FaAngular, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiC } from 'react-icons/si';

const skills = [
  { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
  { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "Angular", icon: <FaAngular className="text-[#dd1b16]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
  { name: "MySQL", icon: <FaDatabase className="text-[#00758f]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#ffcb2b]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#f34f29]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#e34c26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#264de4]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: "C", icon: <SiC className="text-gray-400" /> }
];

const Skills = () => (
  <motion.section
    id="skills"
    className="py-24 px-8 bg-white dark:bg-gray-900"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Tech Arsenal</h2>

    {/* Marquee for dynamic interaction */}
    <Marquee speed={60} gradient={false} className="mb-12">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center justify-center mx-6 px-6 py-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 hover:scale-110 transition-transform duration-300"
        >
          <div className="text-3xl">{skill.icon}</div>
          <span className="ml-3 font-semibold text-lg dark:text-white">{skill.name}</span>
        </div>
      ))}
    </Marquee>

    {/* Grid-based skill cards */}
    
  </motion.section>
);

export default Skills;

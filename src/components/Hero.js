import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import yourPhoto from '../assets/yourphoto.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";



const GlassCube = () => (
  <Float speed={1.5} rotationIntensity={3} floatIntensity={2}>
    <mesh>
      <boxGeometry args={[2.8, 2.8, 2.8]} />
      <meshStandardMaterial
        color="#6366F1"
        metalness={1}
        roughness={0.05}
        transparent={true}
        opacity={0.85}
        envMapIntensity={1.5}
      />
    </mesh>
  </Float>
);

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-24 max-w-6xl mx-auto overflow-hidden"
  >
    {/* ✨ Background Particles */}
    <ParticlesBackground />

    {/* ✍️ Left Side - Text */}
    <motion.div
      className="flex-1 z-10"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Hello, I'm <span className="text-indigo-500">Dineshbabu M</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl">
        Full Stack Developer & Creative UI/UX Designer.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#projects"
    className="px-6 py-3 w-44 text-center rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition duration-300"
  >
    View My Work
  </a>
  <a
    href="/DINESHBABU-M-Resume.pdf"
    download="DINESHBABU-M-Resume.pdf"
    className="px-6 py-3 w-44 text-center rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
  >
    📄 Download CV
  </a>
</div>

      {/* 🔗 Social Icons */}
<div className="mt-6 flex gap-5 text-2xl">
  <a
    href="https://github.com/dineshbabum2932005"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-indigo-600 transition"
    title="GitHub"
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/dineshbabu-m"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-indigo-600 transition"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a
  href="tel:+918220235173" // <- replace with your real phone number
  className="text-gray-600 hover:text-indigo-600 transition"
  title="Phone"
>
  <FaPhone />
</a>

  <a
    href="mailto:dinesh2932005@gmail.com"
    className="text-gray-600 hover:text-indigo-600 transition"
    title="Email"
  >
    <FaEnvelope />
  </a>
  <a
    href="https://leetcode.com/u/dineshbabum_022/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-indigo-600 transition"
    title="LeetCode"
  >
    <SiLeetcode />
  </a>
</div>

    </motion.div>

    {/* 💎 Right Side - Profile & Cube */}
    <motion.div
      className="flex-1 z-10 flex flex-col items-center gap-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* 📸 Creative Profile Image */}
      <div className="relative group w-52 h-52 rounded-[40%] overflow-hidden shadow-xl border-4 border-indigo-500 transform hover:scale-105 transition duration-500">
        <img
          src={yourPhoto}
          alt="Dineshbabu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[40%]" />
      </div>

      {/* 🎨 3D Cube */}
      <div className="w-full h-[360px] md:h-[460px]">
        <Canvas camera={{ position: [5, 5, 5], fov: 55 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Environment preset="sunset" />
          <GlassCube />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </motion.div>
  </section>
);

export default Hero;

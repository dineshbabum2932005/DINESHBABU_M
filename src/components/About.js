import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="py-24 px-8 bg-gray-50 dark:bg-gray-800"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-center mb-6">
      The Journey of&nbsp;Dineshbabu
    </h2>

    <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
      I began tinkering with code to understand how the web works—today I build
      <strong className="text-indigo-600"> full‑stack products</strong> that
      balance elegant{" "}
      <strong className="text-indigo-600">UI&nbsp;/&nbsp;UX&nbsp;design</strong>{" "}
      with scalable architecture. My toolkit spans&nbsp;React, Node, and
      MongoDB, but my process always starts with people: mapping user journeys,
      sketching wireframes, and prototyping in&nbsp;Figma before a single line
      of code. I thrive on turning complex ideas into intuitive experiences—and
      I’m always exploring emerging tech like 3‑D interactions and AR to make
      products that feel&nbsp;future‑ready.
    </p>

    <div className="max-w-4xl mx-auto mt-10 grid gap-6 md:grid-cols-3 text-sm">
      <div className="bg-white/80 dark:bg-gray-700 rounded-lg p-6 shadow">
        <h3 className="font-semibold mb-2">Frontend Craft</h3>
        <p>
          React • Tailwind  • Accessibility &
          responsive design.
        </p>
      </div>

      <div className="bg-white/80 dark:bg-gray-700 rounded-lg p-6 shadow">
        <h3 className="font-semibold mb-2">Backend Engineering</h3>
        <p>
          Node.js • Express • MongoDB • REST APIs • Auth • EmailJS / Nodemailer.
        </p>
      </div>

      <div className="bg-white/80 dark:bg-gray-700 rounded-lg p-6 shadow">
        <h3 className="font-semibold mb-2">UI/UX Mindset</h3>
        <p>
          Design thinking • Figma & Adobe XD • User flows • Prototyping •
          Usability testing.
        </p>
      </div>
    </div>
  </motion.section>
);

export default About;

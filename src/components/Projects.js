import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => (
  <motion.section
    id="projects"
    className="py-24 px-8 bg-white dark:bg-gray-900"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-center mb-10">Crafted With Code</h2>

    <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">

      {/* Event Booking System */}
      <div className="rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg"
          alt="Event Booking System"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Event Booking System</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A full-stack platform for managing and booking various events, complete with login, calendar, and admin dashboard.
          </p>
          <a
            href="https://event-booking-system-eight-iota.vercel.app/"
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site
          </a>
        </div>
      </div>

      {/* Rice Mart */}
      <div className="rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src="https://img.freepik.com/free-photo/overhead-view-four-different-types-organic-rice-grains_23-2147883373.jpg?semt=ais_hybrid&w=740"
          alt="Rice Mart"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Rice Mart</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A digital solution for a real-world rice mart station. It features an intuitive interface for product display, customer interaction, and smooth ordering.
          </p>
          <a
            href="https://rice-mart.vercel.app/"
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site
          </a>
        </div>
      </div>

    </div>
  </motion.section>
);

export default Projects;

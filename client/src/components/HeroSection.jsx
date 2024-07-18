import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to CodePrep
        </motion.h2>
        <p className="text-lg mb-8">
          Your ultimate platform to prepare for software development roles with adaptive learning quizzes.
        </p>
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;

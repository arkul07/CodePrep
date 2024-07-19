import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto text-center'>
        <motion.h2
          className='text-4xl font-bold mb-4'
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to CodePrep
        </motion.h2>
        <p className='text-lg mb-8'>
          Your ultimate platform to prepare for software development roles with
          adaptive learning quizzes.
        </p>
        <div className="flex justify-evenly">
        <Link to="/signup">
        <motion.button
          className='bg-blue-500 text-white px-6 py-3 rounded'
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
        </Link>
        <Link to ='/login'>
        <motion.button
          className='bg-green-500 text-white px-12 py-2 rounded'
          whileHover={{ scale: 1.1 }}
        >
          Login
        </motion.button>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

"use client"

import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} className="min-h-screen flex items-center overflow-x-hidden">Contact</motion.section>
  )
}

export default Contact
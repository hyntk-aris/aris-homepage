"use client"

import { motion } from "framer-motion"

// Security Shield Visual
export function SecurityShield() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl"
      >
        🛡️
      </motion.div>
    </div>
  )
}

// Quality Card Visual
export function QualityCard() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 rounded-3xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl"
      >
        ✓
      </motion.div>
    </div>
  )
}

// Professional Toggle Visual
export function ProfessionalToggle() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl"
      >
        👥
      </motion.div>
    </div>
  )
}

// Companion Chart Visual
export function CompanionChart() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl"
      >
        📈
      </motion.div>
    </div>
  )
}

// Connection Network Visual
export function ConnectionNetwork() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl"
      >
        🔗
      </motion.div>
    </div>
  )
}

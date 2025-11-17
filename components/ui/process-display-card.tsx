"use client"

import { motion, AnimatePresence } from "framer-motion"

export interface ProcessStep {
  id: number
  title: string
  description: string
  details: string
}

interface ProcessDisplayCardProps {
  step: ProcessStep
}

export default function ProcessDisplayCard({ step }: ProcessDisplayCardProps) {
  return (
    <div className="relative h-full rounded-xl overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-100" />

      {/* Content Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-0 left-0 z-10 p-[48px] flex flex-col gap-4 max-w-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
            {step.title}
          </h3>
          <p className="text-base text-neutral-600 leading-relaxed">
            {step.details}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

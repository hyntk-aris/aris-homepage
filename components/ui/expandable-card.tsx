"use client"

import { motion } from "framer-motion"
import { useOutsideClick } from "@/lib/hooks/useOutsideClick"
import { useRef, useEffect } from "react"
import { X } from "lucide-react"
import {
  SecurityShield,
  QualityCard,
  ProfessionalToggle,
  CompanionChart,
  ConnectionNetwork,
} from "./why-choose-us-visuals"

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  content: string
  cta: string
  visualType: string
}

interface ExpandableCardProps {
  item: WhyChooseUsItem
  isActive: boolean
  onOpen: () => void
  onClose: () => void
}

const visualComponents: Record<string, React.ComponentType> = {
  security_shield: SecurityShield,
  quality_card: QualityCard,
  professional_toggle: ProfessionalToggle,
  companion_chart: CompanionChart,
  connection_network: ConnectionNetwork,
}

export function ExpandableCard({
  item,
  isActive,
  onOpen,
  onClose,
}: ExpandableCardProps) {
  const ref = useOutsideClick(onClose)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "8px"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0"
    }
  }, [isActive])
  
  const VisualComponent = visualComponents[item.visualType] || SecurityShield

  return (
    <>
      {/* Closed State - Grid Item */}
      {!isActive && (
        <motion.button
          layoutId={`card-${item.id}`}
          onClick={onOpen}
          className="w-full h-full rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group relative"
          whileHover={{ y: -4 }}
        >
          {/* Visual Area - Fill entire card */}
          <motion.div layoutId={`visual-${item.id}`} className="absolute inset-0">
            <VisualComponent />
          </motion.div>

          {/* Text Overlay - Bottom */}
          <motion.div
            layoutId={`content-${item.id}`}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-center justify-between"
          >
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-600 transition-colors flex-shrink-0"
            >
              +
            </motion.div>
          </motion.div>
        </motion.button>
      )}

      {/* Expanded State - Modal */}
      {isActive && (
        <>
          {/* Backdrop - z-40 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          />

            {/* Modal - z-50 Fixed Center */}
            <motion.div
              ref={ref as any}
              layoutId={`card-${item.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 50,
                width: "min(90vw, 800px)",
                maxHeight: "min(85vh, 90vh)",
                boxSizing: "border-box",
              }}
              className="bg-white rounded-3xl shadow-2xl overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X size={20} />
              </motion.button>

              {/* Modal Content */}
              <div className="p-6 md:p-10 pt-2">
                <motion.div layoutId={`visual-${item.id}`} className="w-full h-64 md:h-72 mb-6 rounded-2xl overflow-hidden">
                  <VisualComponent />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  {item.title}
                </h2>

                <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="bg-neutral-50 rounded-2xl p-6 mb-8 border border-neutral-200">
                  <p className="text-neutral-700 leading-relaxed text-base">
                    {item.content}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  {item.cta}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
    </>
  )
}

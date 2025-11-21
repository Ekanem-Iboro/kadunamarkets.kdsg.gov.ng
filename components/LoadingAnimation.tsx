import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

export function LoadingAnimation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 relative">
        {/* Animated Building Icon */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2980B9] border-r-[#5DADE2]"
            style={{
              width: '80px',
              height: '80px',
              top: '-10px',
              left: '-10px',
            }}
          />
          {/* <div className="bg-gradient-to-br from-[#2980B9] to-[#5DADE2] p-6 rounded-2xl">
            <Building2 className="h-12 w-12 text-white" />
          </div> */}
        </motion.div>

        {/* Loading Text with dots animation */}
        <motion.div className="text-center">
          {/* <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">
            Loading Hall Data
          </h2> */}
          <p className="text-gray-600 flex items-center justify-center gap-1">
            <span>Please wait</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
            >
              .
            </motion.span>
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: [-200, 400] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-full w-32 bg-gradient-to-r from-[#2980B9] to-[#5DADE2] rounded-full"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.cos(i) * 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute w-2 h-2 bg-[#2980B9] rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                bottom: '20%',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

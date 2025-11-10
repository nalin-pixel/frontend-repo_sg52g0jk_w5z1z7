import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
        >
          Your Next-Gen Shopping Arena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
        >
          A sleek experience inspired by the classics, elevated with immersive 3D and fluid motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#trending" className="pointer-events-auto rounded-full bg-white text-black px-6 py-3 font-medium shadow hover:shadow-lg transition">Shop trending</a>
          <a href="#deals" className="pointer-events-auto rounded-full bg-transparent border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition">Today’s deals</a>
        </motion.div>
      </div>
    </section>
  )
}

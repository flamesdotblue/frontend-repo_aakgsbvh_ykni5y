import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-zinc-950/70 dark:via-zinc-950/50 dark:to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Find Your Next Address with
          <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent"> Bluepeak Realty</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-300"
        >
          Premium homes, commercial spaces, and investment properties across India. Transparent advice, curated listings, and end‑to‑end assistance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#properties" className="rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-500 active:translate-y-0">Browse Properties</a>
          <a href="#contact" className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-50 active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">Get in Touch</a>
        </motion.div>
      </div>
    </section>
  );
}

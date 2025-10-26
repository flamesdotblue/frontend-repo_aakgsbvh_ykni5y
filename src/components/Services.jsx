import { motion } from 'framer-motion';
import { Handshake, FileCheck, MapPin, Building2 } from 'lucide-react';

const variants = {
  off: { opacity: 0, y: 40 },
  on: { opacity: 1, y: 0 },
};

export default function Services() {
  const items = [
    { icon: Building2, title: 'Buying & Selling', desc: 'End‑to‑end advisory for residential and commercial transactions.' },
    { icon: Handshake, title: 'Home Loans', desc: 'Tie‑ups with top banks for competitive mortgage options.' },
    { icon: MapPin, title: 'Location Intelligence', desc: 'Data‑backed micro‑market analysis across Indian cities.' },
    { icon: FileCheck, title: 'Legal & Compliance', desc: 'Title diligence, documentation, RERA support, and registration.' },
  ];

  return (
    <motion.section
      id="services"
      initial="off"
      whileInView="on"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.h2 variants={variants} className="text-3xl font-bold sm:text-4xl">Services</motion.h2>
      <motion.p variants={variants} className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
        Everything you need for a seamless property journey in India.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <motion.div key={idx} variants={variants} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-indigo-600/10 text-indigo-700 dark:text-indigo-400">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-300">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

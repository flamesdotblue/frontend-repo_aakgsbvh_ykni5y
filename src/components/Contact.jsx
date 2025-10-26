import { motion } from 'framer-motion';

const variants = {
  off: { opacity: 0, y: 40 },
  on: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="off"
      whileInView="on"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.h2 variants={variants} className="text-3xl font-bold sm:text-4xl">Contact Us</motion.h2>
      <motion.p variants={variants} className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
        Speak to a dedicated advisor. We typically respond within a few hours.
      </motion.p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.form variants={variants} onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input required className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"/>
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input required className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"/>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"/>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"/>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button className="rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-indigo-500">Send Enquiry</button>
            <a href="mailto:sales@bluepeakrealty.in" className="text-sm font-medium text-indigo-700 underline">sales@bluepeakrealty.in</a>
          </div>
        </motion.form>

        <motion.div variants={variants} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">Our Offices</h3>
          <ul className="mt-3 space-y-3 text-zinc-700 dark:text-zinc-300">
            <li>
              <p className="font-medium">Mumbai</p>
              <p className="text-sm">Bandra Kurla Complex, Mumbai 400051</p>
            </li>
            <li>
              <p className="font-medium">Bengaluru</p>
              <p className="text-sm">Indiranagar, Bengaluru 560038</p>
            </li>
            <li>
              <p className="font-medium">Hyderabad</p>
              <p className="text-sm">HITEC City, Hyderabad 500081</p>
            </li>
          </ul>
          <div className="mt-6 rounded-xl bg-indigo-600/10 p-4 text-sm text-indigo-800 dark:text-indigo-300">
            Registered under RERA. All transactions are carried out in accordance with applicable Indian laws and regulations.
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

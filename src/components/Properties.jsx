import { motion } from 'framer-motion';

const listings = [
  {
    id: 1,
    title: 'Luxury 3BHK in Bandra, Mumbai',
    price: '₹4.2 Cr',
    badge: 'Featured',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Premium Villa in Whitefield, Bengaluru',
    price: '₹6.9 Cr',
    badge: 'New',
    img: 'https://images.unsplash.com/photo-1505692794403-34cb4b69772a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Grade-A Office, Gachibowli, Hyderabad',
    price: '₹2.8 Cr',
    badge: 'Lease',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Sea‑view Apartment in Kochi',
    price: '₹1.6 Cr',
    badge: 'Hot',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1600&auto=format&fit=crop',
  },
];

const cardVariants = {
  off: { opacity: 0, y: 40 },
  on: { opacity: 1, y: 0 },
};

export default function Properties() {
  return (
    <motion.section
      id="properties"
      initial="off"
      whileInView="on"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.h2 variants={cardVariants} className="text-3xl font-bold sm:text-4xl">Featured Properties</motion.h2>
      <motion.p variants={cardVariants} className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
        Curated homes and commercial spaces in prime Indian locations.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {listings.map((item) => (
          <motion.article
            key={item.id}
            variants={cardVariants}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute left-3 top-3 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white">
                {item.badge}
              </div>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">Starting at</p>
              <p className="text-xl font-bold text-indigo-600">{item.price}</p>
              <a href="#contact" className="mt-3 inline-block rounded-full border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 transition hover:-translate-y-0.5 hover:bg-indigo-50 dark:hover:bg-indigo-950">Enquire</a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

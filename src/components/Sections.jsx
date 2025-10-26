import { useEffect, useRef, useState } from 'react';
import { Home, Shield, MapPin, Phone, Building2, Star } from 'lucide-react';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0 }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative z-10 -mt-20 space-y-24 bg-transparent pb-24">
      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <span className="mb-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">Why Choose Us</span>
                <h2 className="mt-2 text-3xl font-bold">Trusted, transparent, and tailored to you</h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-300">We simplify buying, selling, and leasing across India with expert advisory, verified listings, and end‑to‑end assistance including site visits, loan facilitation, and legal checks.</p>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <Shield className="mt-1 h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold">Verified Properties</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Each listing is vetted for clear titles and builder credibility.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold">Expert Guidance</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Dedicated advisors to match your needs and budget.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold">Pan‑India Coverage</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Prime locations in Mumbai, Pune, Bengaluru, NCR, and more.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Home className="mt-1 h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold">End‑to‑End Support</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">From discovery and site visits to loans and registration.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50 to-fuchsia-50 shadow-inner dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-800">
                    <div className="flex h-full items-center justify-center">
                      <Building2 className="h-10 w-10 text-indigo-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Properties</h2>
              <p className="text-zinc-600 dark:text-zinc-300">Hand‑picked projects delivering quality and value.</p>
            </div>
            <a href="#contact" className="hidden rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 md:block">Get Full List</a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              title: 'Skyline Residences, Mumbai',
              tag: '2 & 3 BHK',
              price: 'From ₹1.2 Cr',
            }, {
              title: 'Tech Park Towers, Bengaluru',
              tag: 'Grade‑A Offices',
              price: 'Lease/Rent',
            }, {
              title: 'Green Enclave, Pune',
              tag: 'Villas',
              price: 'From ₹85 Lakh',
            }].map((p, idx) => (
              <Reveal key={p.title} delay={idx * 120}>
                <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-100 to-fuchsia-100 dark:from-zinc-800 dark:to-zinc-800">
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow backdrop-blur dark:bg-zinc-900/80 dark:text-white">{p.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.price}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <a href="#contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Enquire Now →</a>
                      <div className="text-xs text-zinc-500">RERA compliant</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-zinc-600 dark:text-zinc-300">Everything you need for a seamless property journey.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Home className="h-6 w-6 text-indigo-600" />, title: 'Home Buying', desc: 'Personalised discovery with shortlists matched to your lifestyle.' },
                { icon: <Building2 className="h-6 w-6 text-indigo-600" />, title: 'Commercial', desc: 'Grade‑A office, retail, and co‑working spaces across cities.' },
                { icon: <Shield className="h-6 w-6 text-indigo-600" />, title: 'Legal & Loans', desc: 'Title diligence, documentation, and home loan assistance.' },
                { icon: <Phone className="h-6 w-6 text-indigo-600" />, title: 'Post‑Sale Support', desc: 'Registration, possession, and tenant management help.' },
              ].map((s, idx) => (
                <Reveal key={s.title} delay={idx * 120}>
                  <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900">
                    <div className="mb-3 inline-flex rounded-xl bg-indigo-50 p-3 dark:bg-indigo-500/10">{s.icon}</div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-3xl font-bold">Book a free consultation</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Tell us your goals and we will curate the best options for you.</p>
              <form className="mt-6 grid grid-cols-1 gap-4">
                <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900" placeholder="Your name" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900" placeholder="Email" />
                  <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900" placeholder="Phone" />
                </div>
                <textarea rows={4} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900" placeholder="What are you looking for?" />
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500">Submit Enquiry</button>
              </form>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-8 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">We typically respond within a few hours during working days.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p><span className="font-medium">Email:</span> support@bluepeakrealty.in</p>
                <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
                <p><span className="font-medium">Locations:</span> Mumbai • Pune • Bengaluru • NCR</p>
              </div>
              <div className="mt-6 rounded-2xl border border-indigo-200 bg-white p-4 text-sm dark:border-indigo-900/40 dark:bg-zinc-950">
                <p className="font-medium">RERA & Compliance</p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">We only work with RERA‑registered projects and developers. Documentation and diligence handled by our trusted legal partners.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

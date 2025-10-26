import { useState } from 'react';
import { Menu, X, Home, Building2, Phone, Shield, FileText, Info } from 'lucide-react';

function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 mx-4 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="prose max-w-none dark:prose-invert">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [policy, setPolicy] = useState(null);

  const toggle = () => setOpen((o) => !o);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-lg">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm leading-tight text-zinc-500 dark:text-zinc-400">Bluepeak</p>
            <p className="-mt-0.5 text-lg font-semibold">Realty India</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200">Home</a>
          <a href="#properties" className="text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200">Properties</a>
          <a href="#services" className="text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200">Services</a>
          <a href="#contact" className="text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200">Contact</a>
          <button onClick={() => setPolicy('privacy')} className="text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200">Privacy</button>
          <button onClick={() => setPolicy('terms')} className="text-sm font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-200">Terms</button>
          <a href="#contact" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">Book a Consultation</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={toggle}
          className="relative grid h-11 w-11 place-items-center rounded-xl border border-zinc-200 bg-white shadow-md transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 md:hidden"
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-full origin-center bg-zinc-900 transition-transform duration-300 ease-in-out dark:bg-white ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-full origin-center bg-zinc-900 transition-opacity duration-200 dark:bg-white ${open ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-full origin-center bg-zinc-900 transition-transform duration-300 ease-in-out dark:bg-white ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-[max-height] duration-500 overflow-hidden ${open ? 'max-h-[60vh]' : 'max-h-0'}`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          <a onClick={() => setOpen(false)} href="#home" className="flex items-center gap-3 rounded-lg p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <Home className="h-5 w-5 text-indigo-600" /> <span>Home</span>
          </a>
          <a onClick={() => setOpen(false)} href="#properties" className="flex items-center gap-3 rounded-lg p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <Building2 className="h-5 w-5 text-indigo-600" /> <span>Properties</span>
          </a>
          <a onClick={() => setOpen(false)} href="#services" className="flex items-center gap-3 rounded-lg p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <Shield className="h-5 w-5 text-indigo-600" /> <span>Services</span>
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="flex items-center gap-3 rounded-lg p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <Phone className="h-5 w-5 text-indigo-600" /> <span>Contact</span>
          </a>
          <div className="my-2 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          <button onClick={() => setPolicy('privacy')} className="flex w-full items-center gap-3 rounded-lg p-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800"><FileText className="h-5 w-5 text-indigo-600"/> Privacy Policy</button>
          <button onClick={() => setPolicy('terms')} className="flex w-full items-center gap-3 rounded-lg p-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800"><Info className="h-5 w-5 text-indigo-600"/> Terms & Conditions</button>
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={policy === 'privacy'}
        title="Privacy Policy"
        onClose={() => setPolicy(null)}
      >
        <p>We value your privacy. Bluepeak Realty India collects only the information you provide (name, email, phone) to respond to your enquiries and offer property advisory services. We do not sell your data. Data is processed for legitimate business interests and stored securely. You may request access, correction, or deletion anytime by contacting support@bluepeakrealty.in.</p>
        <h4>Usage</h4>
        <ul>
          <li>Lead follow‑ups and consultation scheduling</li>
          <li>Property recommendations tailored to your preferences</li>
          <li>Regulatory compliance and fraud prevention</li>
        </ul>
        <h4>Cookies</h4>
        <p>We use essential cookies for site functionality and analytics to improve experience. You can control cookies in your browser settings.</p>
        <h4>Contact</h4>
        <p>Email: support@bluepeakrealty.in • Phone: +91-98765-43210</p>
      </Modal>

      <Modal
        open={policy === 'terms'}
        title="Terms & Conditions"
        onClose={() => setPolicy(null)}
      >
        <p>By using this website you agree to our terms. Property information is provided for guidance only and may change without notice. All transactions are subject to verification, availability, and regulatory approvals as per Indian law.</p>
        <h4>Advisory Only</h4>
        <p>Listings and prices are indicative; nothing herein constitutes a binding offer.</p>
        <h4>Liability</h4>
        <p>We are not liable for indirect or consequential loss from use of this website.</p>
        <h4>Jurisdiction</h4>
        <p>All disputes are subject to the courts of Mumbai, India.</p>
      </Modal>
    </header>
  );
}

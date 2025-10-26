import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Services from './components/Services';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Bluepeak Realty India. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#properties" className="hover:text-indigo-600">Properties</a>
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24 border-t border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {year} Bluepeak Realty India. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#properties" className="hover:text-indigo-600">Properties</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

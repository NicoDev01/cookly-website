import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MotionButton from '../ui/motion-button';

const navLinks = [
  { href: '#features', label: 'Importieren' },
  { href: '#photo-feature', label: 'Digitalisieren' },
  { href: '#ingredient-search', label: 'Suchen' },
  { href: '#meal-planner', label: 'Wochenplan' },
  { href: '#shopping-list', label: 'Einkaufsliste' },
  { href: '#pricing', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center" style={{ paddingLeft: 'clamp(1.5rem, 15vw, 14rem)', paddingRight: 'clamp(1.5rem, 15vw, 14rem)' }}>
      <nav className="pointer-events-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-full px-6 py-2 md:px-8 md:py-3 flex justify-between items-center w-full relative z-50">
        <div className="flex items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus:outline-none"
            aria-label="Zur Startseite scrollen"
          >
            <img src="/green-logo.webp" alt="Cookly" className="h-7 md:h-9 w-auto" width="1792" height="576" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1 text-base font-medium text-slate-600">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-full transition-all ${
                activeSection === href.slice(1)
                  ? 'bg-slate-100 text-slate-900'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MotionButton label="Downloaden" classes="hidden md:block" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-brand hover:bg-slate-200 transition-colors"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} className="text-brand" /> : <Menu size={20} className="text-brand" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="pointer-events-auto absolute top-full mt-2 w-full max-w-[calc(100vw-2rem)] bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-[2rem] p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium px-4 py-2 rounded-xl transition-colors ${
                  activeSection === href.slice(1)
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <MotionButton label="Kostenlos laden" classes="w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

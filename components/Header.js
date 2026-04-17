"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Главная" },
    { href: "#services", label: "Услуги" },
    { href: "#masters", label: "Мастера" },
    { href: "#gallery", label: "Галерея" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-graphite/95 backdrop-blur shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-2xl tracking-widest text-cream">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-copper">
            <path d="M6 18 L18 6 M8 18 a2 2 0 1 1 -4 0 a2 2 0 1 1 4 0" />
          </svg>
          BRUTUS
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/80 hover:text-copper text-sm uppercase tracking-wider transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
          Записаться
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Меню"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-graphite/98 border-t border-cream/10 px-6 py-5">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/80 hover:text-copper uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMenuOpen(false)} className="btn-primary mt-2">
              Записаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

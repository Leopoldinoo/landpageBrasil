"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Início", id: "inicio" },
  { label: "Sobre a Copa", id: "copa" },
  { label: "Jogadores", id: "jogadores" },
  { label: "Estatísticas", id: "estatisticas" },
  { label: "Contato", id: "contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/20" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("inicio")}
          className="font-display text-lg text-foreground tracking-wider"
        >
          🇧🇷 <span className="text-primary">CBF</span>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-body text-foreground/60 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("jogadores")}
          className="hidden lg:block px-5 py-2 border border-primary/50 text-primary font-body font-semibold text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Ver Jogadores
        </button>

        <button
          className="lg:hidden text-foreground/80"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/20 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-2.5 text-foreground/70 hover:text-primary font-body text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="absolute inset-0 opacity-5">
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px bg-primary"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
            <span className="text-primary text-xs">★★★★★</span>
            <span className="text-foreground/70 font-body text-sm">
              Pentacampeões do Mundo
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground leading-none tracking-tight"
        >
          SELEÇÃO
          <br />
          <span className="text-primary">BRASILEIRA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-lg sm:text-xl md:text-2xl text-foreground/40 mt-4 tracking-widest uppercase"
        >
          Rumo ao Hexa
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-body text-foreground/50 mt-6 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          A maior tradição do futebol mundial. Cinco estrelas, uma nação, um só
          coração.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => scrollTo("jogadores")}
            className="px-8 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Explorar o Elenco
          </button>
          <button
            onClick={() => scrollTo("copa")}
            className="px-8 py-3.5 border border-foreground/20 text-foreground/80 font-body font-semibold text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Copa 2026
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("copa")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-primary transition-colors"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}

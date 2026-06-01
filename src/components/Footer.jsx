"use client";

import { Heart } from "lucide-react";

const LINKS = [
  {
    title: "Navegação",
    items: ["Início", "Sobre a Copa", "Jogadores", "Estatísticas"],
  },
  {
    title: "Redes Sociais",
    items: ["Instagram", "Twitter / X", "YouTube", "Facebook"],
  },
  {
    title: "Mais",
    items: [
      "CBF Oficial",
      "FIFA.com",
      "Regras do Jogo",
      "Política de Privacidade",
    ],
  },
];

export default function Footer() {
  const scrollTo = (id) => {
    const map = {
      Início: "inicio",
      "Sobre a Copa": "copa",
      Jogadores: "jogadores",
      Estatísticas: "estatisticas",
    };
    if (map[id])
      document.getElementById(map[id])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contato" className="border-t border-border/30 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xs">★★★★★</span>
              <span className="font-display text-lg text-foreground">CBF</span>
            </div>
            <p className="font-body text-foreground/40 text-sm leading-relaxed">
              Uma homenagem à maior seleção de futebol do mundo. Projeto criado
              com paixão pelo futebol brasileiro.
            </p>
          </div>

          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-bold text-foreground/70 text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="font-body text-foreground/40 text-sm hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-foreground/30 text-sm">
            "Brasil, a pátria de chuteiras 🇧🇷"
          </p>
          <p className="font-body text-foreground/25 text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-primary" /> para o
            futebol brasileiro
          </p>
        </div>
      </div>
    </footer>
  );
}

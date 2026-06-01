"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PlayerCard from "./PlayerCard";
import PlayerModal from "./PlayerModal";
import { PLAYERS } from "../lib/playersData";

const POSITIONS = ["Todos", "Goleiro", "Defesa", "Meio-campo", "Ataque"];
const POSITION_MAP = {
  Defesa: ["Zagueiro", "Lateral-direito", "Lateral-esquerdo"],
  "Meio-campo": ["Volante", "Meia", "Meia-atacante"],
  Ataque: ["Atacante", "Ponta"],
  Goleiro: ["Goleiro"],
};

export default function PlayersSection() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "Todos"
      ? PLAYERS
      : PLAYERS.filter((p) => POSITION_MAP[filter]?.includes(p.posicao));

  return (
    <section id="jogadores" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-primary font-semibold text-sm tracking-widest uppercase">
            O Elenco
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mt-2">
            Jogadores da <span className="text-primary">Seleção</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              onClick={() => setFilter(pos)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                filter === pos
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border/30 text-foreground/50 hover:text-foreground hover:border-primary/30"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((player, i) => (
            <PlayerCard
              key={player.nome}
              player={player}
              index={i}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && (
        <PlayerModal player={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

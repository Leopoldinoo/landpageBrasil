"use client";

import { motion } from "framer-motion";
import { Globe, Users, Trophy, Calendar, MapPin, Zap } from "lucide-react";

const INFO_CARDS = [
  { icon: MapPin, label: "Países-sede", value: "EUA, Canadá e México" },
  { icon: Users, label: "Seleções", value: "48 times" },
  { icon: Calendar, label: "Período", value: "Jun–Jul 2026" },
  { icon: Trophy, label: "Estádios", value: "16 arenas" },
  { icon: Globe, label: "Continentes", value: "6 representados" },
  { icon: Zap, label: "Partidas", value: "104 jogos" },
];

export default function CopaInfo() {
  return (
    <section id="copa" className="py-20 sm:py-28 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-primary font-semibold text-sm tracking-widest uppercase">
            A Maior Competição
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
            Copa do Mundo FIFA <span className="text-primary">2026</span>
          </h2>
          <p className="font-body text-foreground/50 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A edição mais grandiosa da história com 48 seleções em três países
            anfitriões.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-card border border-border/30 flex items-start gap-3"
            >
              <card.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-foreground/40 text-xs uppercase tracking-wide">
                  {card.label}
                </p>
                <p className="font-body text-foreground font-semibold text-sm mt-0.5">
                  {card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

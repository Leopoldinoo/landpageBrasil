"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Shirt, Star, Calendar } from "lucide-react";

const STATS = [
  {
    icon: Trophy,
    value: "5",
    label: "Copas do Mundo",
    desc: "1958, 1962, 1970, 1994, 2002",
  },
  {
    icon: Target,
    value: "237",
    label: "Gols em Copas",
    desc: "Maior artilharia da história",
  },
  {
    icon: Shirt,
    value: "114",
    label: "Jogos em Copas",
    desc: "Todas as edições disputadas",
  },
  {
    icon: Star,
    value: "79",
    label: "Gols do Neymar",
    desc: "Maior artilheiro da Seleção",
  },
  {
    icon: Calendar,
    value: "22",
    label: "Copas Disputadas",
    desc: "Única seleção em todas",
  },
];

export default function StatisticsSection() {
  return (
    <section id="estatisticas" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-primary font-semibold text-sm tracking-widest uppercase">
            Legado Histórico
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
            Números que fazem <span className="text-primary">história</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-card border border-border/30 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl text-foreground">
                {stat.value}
              </p>
              <p className="font-body text-foreground/60 text-sm font-semibold mt-1">
                {stat.label}
              </p>
              <p className="font-body text-foreground/30 text-xs mt-1">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

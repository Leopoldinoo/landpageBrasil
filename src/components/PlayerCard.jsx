import { motion } from "framer-motion";

export default function PlayerCard({ player, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={() => onClick(player)}
      className="group rounded-2xl overflow-hidden bg-card border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {player.image ? (
          <img
            src={player.image}
            alt={player.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-8xl text-foreground/10">
              {player.numero}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-body font-semibold rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
          {player.posicao}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-display text-base text-foreground">
          {player.nome}
        </h3>
        <p className="font-body text-foreground/40 text-sm mt-0.5">
          {player.clube}
        </p>
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/20">
          <div className="text-center">
            <p className="font-display text-primary text-sm">{player.jogos}</p>
            <p className="font-body text-foreground/40 text-xs">Jogos</p>
          </div>
          <div className="text-center">
            <p className="font-display text-primary text-sm">{player.gols}</p>
            <p className="font-body text-foreground/40 text-xs">Gols</p>
          </div>
          <div className="text-center">
            <p className="font-display text-primary text-sm">
              #{player.numero}
            </p>
            <p className="font-body text-foreground/40 text-xs">Camisa</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

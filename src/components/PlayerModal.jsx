import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const POSITION_COLORS = {
  Goleiro: "text-emerald-400",
  Zagueiro: "text-blue-400",
  "Lateral-direito": "text-cyan-400",
  "Lateral-esquerdo": "text-cyan-400",
  Volante: "text-amber-400",
  Meia: "text-purple-400",
  "Meia-atacante": "text-purple-400",
  Atacante: "text-red-400",
  Ponta: "text-orange-400",
};

export default function PlayerModal({ player, onClose }) {
  if (!player) return null;
  const posColor = POSITION_COLORS[player.posicao] || "text-primary";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card border border-border/30 rounded-3xl overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            {player.image ? (
              <img
                src={player.image}
                alt={player.nome}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-secondary/40 via-card to-muted flex items-center justify-center">
                <span className="font-display text-9xl text-foreground/10">
                  {player.numero}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-6">
              <span className="font-display text-6xl text-primary/30">
                {player.numero}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 -mt-8 relative">
            <span
              className={`font-body text-sm font-semibold tracking-wider uppercase ${posColor}`}
            >
              {player.posicao}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mt-1">
              {player.nome}
            </h2>
            <p className="font-body text-foreground/50 mt-1">{player.clube}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "Idade", value: `${player.idade} anos` },
                { label: "Altura", value: player.altura },
                { label: "Pé", value: player.pe },
                { label: "Camisa", value: `Nº ${player.numero}` },
                { label: "Jogos", value: player.jogos },
                { label: "Gols", value: player.gols },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl bg-accent/30 border border-border/20 text-center"
                >
                  <p className="font-display text-xl text-primary">{s.value}</p>
                  <p className="font-body text-foreground/40 text-xs mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

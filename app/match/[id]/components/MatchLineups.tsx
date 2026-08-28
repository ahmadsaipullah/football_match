import Image from "next/image";
import type { MatchLineup } from "@/app/lib/types";

interface MatchLineupsProps {
  lineups: MatchLineup[];
}

export default function MatchLineups({ lineups }: MatchLineupsProps) {
  if (lineups.length < 2) {
    return (
      <div className="card p-8 text-center">
        <p className="text-[#64748b]">Lineups not available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {lineups.map((lineup, idx) => (
        <div key={idx} className="card p-5">
          {/* Team header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1e2433]">
            <div className="flex items-center gap-3">
              <Image
                src={lineup.team.logo}
                alt={lineup.team.name}
                width={28}
                height={28}
                unoptimized
              />
              <div>
                <h3 className="text-sm font-bold">{lineup.team.name}</h3>
                <p className="text-xs text-[#64748b]">
                  Coach: {lineup.coach.name}
                </p>
              </div>
            </div>
            <div className="px-3 py-1 bg-[#10b981]/10 rounded-lg">
              <span className="text-sm font-bold text-[#10b981]">
                {lineup.formation}
              </span>
            </div>
          </div>

          {/* Starting XI */}
          <div className="mb-4">
            <h4 className="text-[0.65rem] uppercase tracking-wider text-[#64748b] font-semibold mb-2">
              Starting XI
            </h4>
            <div className="space-y-1">
              {lineup.startXI.map((item) => (
                <div
                  key={item.player.id}
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/3 transition"
                >
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-bold bg-[#1e2433] rounded-full text-[#94a3b8]">
                    {item.player.number}
                  </span>
                  <span className="text-sm flex-1">{item.player.name}</span>
                  <span className="text-[0.6rem] uppercase text-[#64748b] font-medium px-1.5 py-0.5 bg-[#1e2433] rounded">
                    {item.player.pos}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Substitutes */}
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-wider text-[#64748b] font-semibold mb-2">
              Substitutes
            </h4>
            <div className="space-y-1">
              {lineup.substitutes.map((item) => (
                <div
                  key={item.player.id}
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/3 transition opacity-70"
                >
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-bold bg-[#1e2433] rounded-full text-[#64748b]">
                    {item.player.number}
                  </span>
                  <span className="text-sm text-[#94a3b8] flex-1">
                    {item.player.name}
                  </span>
                  <span className="text-[0.6rem] uppercase text-[#64748b] font-medium px-1.5 py-0.5 bg-[#1e2433] rounded">
                    {item.player.pos}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

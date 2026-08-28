import Image from "next/image";
import type { PlayerStatistics } from "@/app/lib/types";

interface TopScorersProps {
  players: PlayerStatistics[];
}

export default function TopScorers({ players }: TopScorersProps) {
  if (players.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-[#64748b]">No top scorers data available.</p>
      </div>
    );
  }

  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[0.65rem] uppercase tracking-wider text-[#64748b] border-b border-[#1e2433]">
            <th className="text-left px-4 py-3 w-8">#</th>
            <th className="text-left px-2 py-3">Player</th>
            <th className="text-left px-2 py-3 hidden sm:table-cell">Team</th>
            <th className="text-center px-2 py-3 w-10">⚽</th>
            <th className="text-center px-2 py-3 w-10">🅰</th>
            <th className="text-center px-2 py-3 w-10">Apps</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, idx) => {
            const stats = p.statistics[0];
            return (
              <tr
                key={p.player.id}
                className="border-b border-[#1e2433]/50 hover:bg-[#1a1f2e] transition"
              >
                <td className="px-4 py-3 font-bold text-[#64748b]">
                  {idx + 1}
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={p.player.photo}
                      alt={p.player.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                      unoptimized
                    />
                    <div>
                      <span className="font-medium block">
                        {p.player.name}
                      </span>
                      <span className="text-[0.65rem] text-[#64748b]">
                        {p.player.nationality}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 hidden sm:table-cell">
                  <div className="flex items-center gap-2">
                    {stats?.team && (
                      <Image
                        src={stats.team.logo}
                        alt={stats.team.name}
                        width={18}
                        height={18}
                        unoptimized
                      />
                    )}
                    <span className="text-[#94a3b8] text-xs">
                      {stats?.team?.name}
                    </span>
                  </div>
                </td>
                <td className="text-center px-2 py-3 font-bold text-[#10b981]">
                  {stats?.goals.total ?? 0}
                </td>
                <td className="text-center px-2 py-3 text-[#94a3b8]">
                  {stats?.goals.assists ?? 0}
                </td>
                <td className="text-center px-2 py-3 text-[#94a3b8]">
                  {stats?.games.appearences ?? 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

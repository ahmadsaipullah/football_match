import Image from "next/image";
import type { Standing } from "@/app/lib/types";

interface StandingsTableProps {
  standings: Standing[];
}

function getZoneClass(description: string | null): string {
  if (!description) return "";
  const d = description.toLowerCase();
  if (d.includes("champions league")) return "zone-cl";
  if (d.includes("europa league")) return "zone-el";
  if (d.includes("conference")) return "zone-ecl";
  if (d.includes("relegation")) return "zone-rel";
  return "";
}

function FormDots({ form }: { form: string | null }) {
  if (!form) return null;
  return (
    <div className="flex items-center gap-0.5">
      {form.split("").map((char, i) => (
        <span
          key={i}
          className={`w-4 h-4 rounded-full text-[0.55rem] font-bold flex items-center justify-center ${
            char === "W"
              ? "form-w text-white"
              : char === "D"
              ? "form-d text-black"
              : "form-l text-white"
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default function StandingsTable({ standings }: StandingsTableProps) {
  if (standings.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-[#64748b]">Standings not available.</p>
      </div>
    );
  }

  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[0.65rem] uppercase tracking-wider text-[#64748b] border-b border-[#1e2433]">
            <th className="text-left px-4 py-3 w-8">#</th>
            <th className="text-left px-2 py-3">Team</th>
            <th className="text-center px-2 py-3 w-8">P</th>
            <th className="text-center px-2 py-3 w-8">W</th>
            <th className="text-center px-2 py-3 w-8">D</th>
            <th className="text-center px-2 py-3 w-8">L</th>
            <th className="text-center px-2 py-3 w-10">GF</th>
            <th className="text-center px-2 py-3 w-10">GA</th>
            <th className="text-center px-2 py-3 w-10">GD</th>
            <th className="text-center px-2 py-3 w-10 font-bold">Pts</th>
            <th className="text-center px-2 py-3 w-24 hidden sm:table-cell">
              Form
            </th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row) => (
            <tr
              key={row.rank}
              className={`border-b border-[#1e2433]/50 hover:bg-[#1a1f2e] transition ${getZoneClass(
                row.description
              )}`}
            >
              <td className="px-4 py-2.5 font-bold text-[#64748b]">
                {row.rank}
              </td>
              <td className="px-2 py-2.5">
                <div className="flex items-center gap-2">
                  <Image
                    src={row.team.logo}
                    alt={row.team.name}
                    width={20}
                    height={20}
                    unoptimized
                  />
                  <span className="font-medium truncate max-w-[140px]">
                    {row.team.name}
                  </span>
                </div>
              </td>
              <td className="text-center px-2 py-2.5 text-[#94a3b8]">
                {row.all.played}
              </td>
              <td className="text-center px-2 py-2.5 text-[#94a3b8]">
                {row.all.win}
              </td>
              <td className="text-center px-2 py-2.5 text-[#94a3b8]">
                {row.all.draw}
              </td>
              <td className="text-center px-2 py-2.5 text-[#94a3b8]">
                {row.all.lose}
              </td>
              <td className="text-center px-2 py-2.5 text-[#94a3b8]">
                {row.all.goals.for}
              </td>
              <td className="text-center px-2 py-2.5 text-[#94a3b8]">
                {row.all.goals.against}
              </td>
              <td
                className={`text-center px-2 py-2.5 font-semibold ${
                  row.goalsDiff > 0
                    ? "text-[#10b981]"
                    : row.goalsDiff < 0
                    ? "text-[#ef4444]"
                    : "text-[#94a3b8]"
                }`}
              >
                {row.goalsDiff > 0 ? `+${row.goalsDiff}` : row.goalsDiff}
              </td>
              <td className="text-center px-2 py-2.5 font-bold text-white">
                {row.points}
              </td>
              <td className="text-center px-2 py-2.5 hidden sm:table-cell">
                <div className="flex justify-center">
                  <FormDots form={row.form} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="flex items-center gap-4 px-4 py-3 text-[0.6rem] text-[#64748b] border-t border-[#1e2433]">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]" /> Champions League
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b]" /> Europa League
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#10b981]" /> Conference League
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#ef4444]" /> Relegation
        </span>
      </div>
    </div>
  );
}

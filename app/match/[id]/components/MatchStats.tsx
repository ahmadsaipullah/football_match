import type { FixtureTeamStatistic } from "@/app/lib/types";

interface MatchStatsProps {
  statistics: FixtureTeamStatistic[];
}

function parseStatValue(value: string | number | null): number {
  if (value === null) return 0;
  if (typeof value === "number") return value;
  return parseFloat(value.replace("%", "")) || 0;
}

function StatBar({
  label,
  homeValue,
  awayValue,
  isPercentage = false,
}: {
  label: string;
  homeValue: string | number | null;
  awayValue: string | number | null;
  isPercentage?: boolean;
}) {
  const homeNum = parseStatValue(homeValue);
  const awayNum = parseStatValue(awayValue);
  const total = homeNum + awayNum || 1;
  const homeWidth = (homeNum / total) * 100;
  const awayWidth = (awayNum / total) * 100;

  const displayHome =
    isPercentage || (typeof homeValue === "string" && homeValue.includes("%"))
      ? homeValue
      : homeNum;
  const displayAway =
    isPercentage || (typeof awayValue === "string" && awayValue.includes("%"))
      ? awayValue
      : awayNum;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span
          className={`font-semibold tabular-nums ${
            homeNum > awayNum ? "text-[#10b981]" : "text-[#94a3b8]"
          }`}
        >
          {displayHome ?? 0}
        </span>
        <span className="text-xs text-[#64748b]">{label}</span>
        <span
          className={`font-semibold tabular-nums ${
            awayNum > homeNum ? "text-[#3b82f6]" : "text-[#94a3b8]"
          }`}
        >
          {displayAway ?? 0}
        </span>
      </div>
      <div className="flex items-center gap-1 h-1.5">
        <div className="flex-1 flex justify-end">
          <div
            className="h-full rounded-full bg-[#10b981] animate-bar-fill"
            style={{ width: `${homeWidth}%` }}
          />
        </div>
        <div className="w-px h-3 bg-[#1e2433]" />
        <div className="flex-1">
          <div
            className="h-full rounded-full bg-[#3b82f6] animate-bar-fill"
            style={{ width: `${awayWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function MatchStats({ statistics }: MatchStatsProps) {
  if (statistics.length < 2) {
    return (
      <div className="card p-8 text-center">
        <p className="text-[#64748b]">No statistics available yet.</p>
      </div>
    );
  }

  const homeStats = statistics[0];
  const awayStats = statistics[1];

  const statOrder = [
    "Ball Possession",
    "Total Shots",
    "Shots on Goal",
    "Shots off Goal",
    "Corner Kicks",
    "Fouls",
    "Yellow Cards",
    "Red Cards",
    "Offsides",
    "Total passes",
    "Passes accurate",
    "Passes %",
  ];

  return (
    <div className="card p-6 space-y-5">
      {/* Team headers */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1e2433]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10b981]" />
          <span className="text-sm font-semibold">
            {homeStats.team.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            {awayStats.team.name}
          </span>
          <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
        </div>
      </div>

      {/* Stats */}
      {statOrder.map((statName) => {
        const homeStat = homeStats.statistics.find(
          (s) => s.type === statName
        );
        const awayStat = awayStats.statistics.find(
          (s) => s.type === statName
        );
        if (!homeStat && !awayStat) return null;

        return (
          <StatBar
            key={statName}
            label={statName}
            homeValue={homeStat?.value ?? 0}
            awayValue={awayStat?.value ?? 0}
          />
        );
      })}
    </div>
  );
}

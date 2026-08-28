import Link from "next/link";
import Image from "next/image";
import { Tv, Clock } from "lucide-react";
import { format } from "date-fns";
import type { Fixture } from "@/app/lib/types";

interface MatchCardProps {
  fixture: Fixture;
}

function isLive(status: string): boolean {
  return ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(status);
}

function isFinished(status: string): boolean {
  return ["FT", "AET", "PEN"].includes(status);
}

function StatusBadge({ fixture }: { fixture: Fixture }) {
  const { status } = fixture;

  if (isLive(status.short)) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <span className="badge-live flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse-live" />
          {status.elapsed}&apos;
        </span>
      </div>
    );
  }

  if (isFinished(status.short)) {
    return <span className="badge-ft">{status.short}</span>;
  }

  // Not started
  return (
    <span className="badge-ns flex items-center gap-1">
      <Clock size={10} />
      {format(new Date(fixture.date), "HH:mm")}
    </span>
  );
}

export default function MatchCard({ fixture }: MatchCardProps) {
  const live = isLive(fixture.status.short);
  const finished = isFinished(fixture.status.short);

  return (
    <Link
      href={`/match/${fixture.id}`}
      className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-[#1a1f2e] ${
        live ? "bg-[#141821] border border-[#1e2433]" : ""
      }`}
    >
      {/* Status */}
      <div className="w-14 shrink-0 flex justify-center">
        <StatusBadge fixture={fixture} />
      </div>

      {/* Teams & Score */}
      <div className="flex-1 min-w-0">
        {/* Home Team */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 min-w-0">
            <Image
              src={fixture.teams.home.logo}
              alt={fixture.teams.home.name}
              width={18}
              height={18}
              className="rounded-sm shrink-0"
              unoptimized
            />
            <span
              className={`text-sm truncate ${
                fixture.teams.home.winner
                  ? "text-white font-semibold"
                  : "text-[#94a3b8]"
              }`}
            >
              {fixture.teams.home.name}
            </span>
          </div>
          <span
            className={`text-sm font-bold tabular-nums w-6 text-right ${
              live
                ? "text-white"
                : fixture.teams.home.winner
                ? "text-white"
                : "text-[#94a3b8]"
            }`}
          >
            {fixture.goals.home !== null ? fixture.goals.home : "-"}
          </span>
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Image
              src={fixture.teams.away.logo}
              alt={fixture.teams.away.name}
              width={18}
              height={18}
              className="rounded-sm shrink-0"
              unoptimized
            />
            <span
              className={`text-sm truncate ${
                fixture.teams.away.winner
                  ? "text-white font-semibold"
                  : "text-[#94a3b8]"
              }`}
            >
              {fixture.teams.away.name}
            </span>
          </div>
          <span
            className={`text-sm font-bold tabular-nums w-6 text-right ${
              live
                ? "text-white"
                : fixture.teams.away.winner
                ? "text-white"
                : "text-[#94a3b8]"
            }`}
          >
            {fixture.goals.away !== null ? fixture.goals.away : "-"}
          </span>
        </div>
      </div>

      {/* HT Score & Stream */}
      <div className="flex flex-col items-end gap-1 shrink-0 w-16">
        {(live || finished) &&
          fixture.score.halftime.home !== null && (
            <span className="text-[0.6rem] text-[#64748b]">
              HT: {fixture.score.halftime.home}-
              {fixture.score.halftime.away}
            </span>
          )}
        {fixture.hasStream && (
          <span className="stream-badge flex items-center gap-1">
            <Tv size={9} />
            LIVE
          </span>
        )}
      </div>
    </Link>
  );
}

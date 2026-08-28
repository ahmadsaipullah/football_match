import { Suspense } from "react";
import { format } from "date-fns";
import { getCountries, getFixtures, getLeagues } from "./lib/api";
import type { Fixture, MatchFilter } from "./lib/types";
import Sidebar from "./components/Sidebar";
import MatchStatusFilter from "./components/MatchStatusFilter";
import DatePicker from "./components/DatePicker";
import LeagueGroup from "./components/LeagueGroup";
import LoadingSkeleton from "./components/LoadingSkeleton";
import AutoRefresh from "./components/AutoRefresh";
import { Activity, Trophy, Globe, Tv } from "lucide-react";

function groupFixturesByLeague(fixtures: Fixture[]) {
  const groups = new Map<number, Fixture[]>();
  for (const fixture of fixtures) {
    const leagueId = fixture.league.id;
    if (!groups.has(leagueId)) {
      groups.set(leagueId, []);
    }
    groups.get(leagueId)!.push(fixture);
  }
  return groups;
}

function filterFixtures(fixtures: Fixture[], filter: MatchFilter): Fixture[] {
  switch (filter) {
    case "live":
      return fixtures.filter((f) =>
        ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(f.status.short)
      );
    case "finished":
      return fixtures.filter((f) =>
        ["FT", "AET", "PEN"].includes(f.status.short)
      );
    case "scheduled":
      return fixtures.filter((f) =>
        ["NS", "TBD"].includes(f.status.short)
      );
    default:
      return fixtures;
  }
}

async function MatchContent({
  filter,
  dateParam,
}: {
  filter: MatchFilter;
  dateParam: string;
}) {
  const [fixtures, leagues, countries] = await Promise.all([
    getFixtures({ date: dateParam }),
    getLeagues(),
    getCountries(),
  ]);

  const liveCount = fixtures.filter((f) =>
    ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(f.status.short)
  ).length;

  const filtered = filterFixtures(fixtures, filter);
  const grouped = groupFixturesByLeague(filtered);

  // Sort groups: live matches first
  const sortedGroups = [...grouped.entries()].sort(([, a], [, b]) => {
    const aHasLive = a.some((f) =>
      ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(f.status.short)
    );
    const bHasLive = b.some((f) =>
      ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(f.status.short)
    );
    if (aHasLive && !bHasLive) return -1;
    if (!aHasLive && bHasLive) return 1;
    return 0;
  });

  return (
    <div className="flex gap-6">
      <Sidebar leagues={leagues} countries={countries} />

      <div className="flex-1 min-w-0">
        {/* Filters & Date */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <MatchStatusFilter liveCount={liveCount} />
          {filter !== "live" && <DatePicker />}
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-6 mb-6 px-1">
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <Activity size={12} className="text-[#10b981]" />
            <span>
              <span className="text-white font-semibold">{filtered.length}</span>{" "}
              matches
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <Trophy size={12} className="text-[#f59e0b]" />
            <span>
              <span className="text-white font-semibold">{grouped.size}</span>{" "}
              leagues
            </span>
          </div>
          {liveCount > 0 && (
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse-live" />
              <span>
                <span className="text-[#ef4444] font-semibold">{liveCount}</span>{" "}
                live now
              </span>
            </div>
          )}
        </div>

        {/* Match Groups */}
        {sortedGroups.length > 0 ? (
          <div className="space-y-4">
            {sortedGroups.map(([leagueId, leagueFixtures]) => (
              <LeagueGroup
                key={leagueId}
                league={leagueFixtures[0].league}
                fixtures={leagueFixtures}
              />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <div className="text-4xl mb-3">⚽</div>
            <h3 className="text-lg font-semibold text-[#f1f5f9] mb-1">
              No matches found
            </h3>
            <p className="text-sm text-[#64748b]">
              Try selecting a different date or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const filter = ((searchParams?.filter as string) || "all") as MatchFilter;
  const dateParam = (searchParams?.date as string) || format(new Date(), "yyyy-MM-dd");

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <AutoRefresh intervalMs={60000} />
      {/* Hero */}
      <div className="mb-6 p-6 rounded-2xl bg-gradient-to-r from-[#10b981]/10 via-[#3b82f6]/10 to-[#8b5cf6]/10 border border-[#1e2433]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
                Live Football Scores
              </span>
            </h1>
            <p className="text-sm text-[#94a3b8]">
              1,200+ leagues • Real-time updates • Live streaming
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex flex-col items-center px-4 py-2 bg-[#141821] rounded-xl border border-[#1e2433]">
              <Globe size={18} className="text-[#3b82f6] mb-1" />
              <span className="text-xs font-bold text-white">190+</span>
              <span className="text-[0.6rem] text-[#64748b]">Countries</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 bg-[#141821] rounded-xl border border-[#1e2433]">
              <Trophy size={18} className="text-[#f59e0b] mb-1" />
              <span className="text-xs font-bold text-white">1,200+</span>
              <span className="text-[0.6rem] text-[#64748b]">Leagues</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 bg-[#141821] rounded-xl border border-[#1e2433]">
              <Tv size={18} className="text-[#ef4444] mb-1" />
              <span className="text-xs font-bold text-white">Live</span>
              <span className="text-[0.6rem] text-[#64748b]">Streaming</span>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <MatchContent filter={filter} dateParam={dateParam} />
      </Suspense>
    </div>
  );
}

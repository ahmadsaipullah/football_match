import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, User, Clock, Tv } from "lucide-react";
import { format } from "date-fns";
import {
  getFixtures,
  getFixtureEvents,
  getFixtureStatistics,
  getFixtureLineups,
  getStreams,
} from "@/app/lib/api";
import MatchEvents from "./components/MatchEvents";
import MatchStats from "./components/MatchStats";
import MatchLineups from "./components/MatchLineups";
import LiveStreamPlayer from "./components/LiveStreamPlayer";
import MatchDetailTabs from "./components/MatchDetailTabs";

export default async function MatchPage(props: PageProps<"/match/[id]">) {
  const { id } = await props.params;

  const [fixtures, events, statistics, lineups, streams] = await Promise.all([
    getFixtures({ id }),
    getFixtureEvents(id),
    getFixtureStatistics(id),
    getFixtureLineups(id),
    getStreams(Number(id)),
  ]);

  const fixture = fixtures[0];
  if (!fixture) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-xl text-[#94a3b8]">Match not found</p>
        <Link href="/" className="text-[#10b981] text-sm mt-4 inline-block">
          ← Back to matches
        </Link>
      </div>
    );
  }

  const isLive = ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(
    fixture.status.short
  );
  const isFinished = ["FT", "AET", "PEN"].includes(fixture.status.short);

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition mb-4"
      >
        <ArrowLeft size={14} />
        Back to matches
      </Link>

      {/* Scoreboard Hero */}
      <div
        className={`relative rounded-2xl overflow-hidden mb-6 ${
          isLive
            ? "bg-gradient-to-br from-[#ef4444]/10 via-[#141821] to-[#141821] border border-[#ef4444]/20"
            : "bg-gradient-to-br from-[#10b981]/10 via-[#141821] to-[#3b82f6]/10 border border-[#1e2433]"
        }`}
      >
        {/* League info */}
        <div className="flex items-center justify-center gap-2 pt-5 pb-2">
          <Image
            src={fixture.league.logo}
            alt={fixture.league.name}
            width={20}
            height={20}
            unoptimized
          />
          <span className="text-sm text-[#94a3b8]">
            {fixture.league.name}
          </span>
          {fixture.league.round && (
            <span className="text-xs text-[#64748b]">
              — {fixture.league.round}
            </span>
          )}
        </div>

        {/* Score */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 py-6 px-4">
          {/* Home */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <Image
              src={fixture.teams.home.logo}
              alt={fixture.teams.home.name}
              width={64}
              height={64}
              className="sm:w-20 sm:h-20"
              unoptimized
            />
            <span className="text-sm sm:text-base font-semibold text-center">
              {fixture.teams.home.name}
            </span>
          </div>

          {/* Score Center */}
          <div className="flex flex-col items-center gap-1">
            {isLive || isFinished ? (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-bold tabular-nums">
                    {fixture.goals.home}
                  </span>
                  <span className="text-2xl text-[#64748b]">-</span>
                  <span className="text-4xl sm:text-5xl font-bold tabular-nums">
                    {fixture.goals.away}
                  </span>
                </div>
                {fixture.score.halftime.home !== null && (
                  <span className="text-xs text-[#64748b]">
                    HT: {fixture.score.halftime.home} -{" "}
                    {fixture.score.halftime.away}
                  </span>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#f59e0b]">
                  {format(new Date(fixture.date), "HH:mm")}
                </span>
                <span className="text-xs text-[#64748b]">
                  {format(new Date(fixture.date), "dd MMM yyyy")}
                </span>
              </div>
            )}
            {/* Status Badge */}
            <div className="mt-2">
              {isLive ? (
                <span className="badge-live flex items-center gap-1.5 px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse-live" />
                  {fixture.status.elapsed}&apos; {fixture.status.short}
                </span>
              ) : isFinished ? (
                <span className="badge-ft px-3 py-1">Full Time</span>
              ) : (
                <span className="badge-ns px-3 py-1">Not Started</span>
              )}
            </div>
          </div>

          {/* Away */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <Image
              src={fixture.teams.away.logo}
              alt={fixture.teams.away.name}
              width={64}
              height={64}
              className="sm:w-20 sm:h-20"
              unoptimized
            />
            <span className="text-sm sm:text-base font-semibold text-center">
              {fixture.teams.away.name}
            </span>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-center gap-4 pb-5 text-xs text-[#64748b]">
          {fixture.venue.name && (
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {fixture.venue.name}, {fixture.venue.city}
            </span>
          )}
          {fixture.referee && (
            <span className="flex items-center gap-1">
              <User size={11} />
              {fixture.referee}
            </span>
          )}
        </div>
      </div>

      {/* Tabs Content */}
      <MatchDetailTabs
        events={events}
        statistics={statistics}
        lineups={lineups}
        streams={streams}
        fixture={fixture}
      />
    </div>
  );
}

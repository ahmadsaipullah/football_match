import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tv, ExternalLink, Zap, Wifi } from "lucide-react";
import { getStreams, getFixtures } from "@/app/lib/api";
import type { Fixture, LiveStream } from "@/app/lib/types";

async function StreamingContent() {
  const [streams, fixtures] = await Promise.all([
    getStreams(),
    getFixtures(),
  ]);

  // Group streams by match
  const matchIds = [...new Set(streams.map((s) => s.matchId))];
  const fixtureMap = new Map(fixtures.map((f) => [f.id, f]));

  return (
    <div className="space-y-4">
      {matchIds.map((matchId) => {
        const fixture = fixtureMap.get(matchId);
        const matchStreams = streams.filter((s) => s.matchId === matchId);
        if (!fixture) return null;

        const isLive = ["1H", "2H", "HT", "ET", "P", "BT"].includes(
          fixture.status.short
        );

        return (
          <div key={matchId} className="card overflow-hidden">
            {/* Match header */}
            <Link
              href={`/match/${matchId}`}
              className="flex items-center justify-between gap-4 px-5 py-4 bg-[#0f1219] hover:bg-[#141821] transition"
            >
              <div className="flex items-center gap-4 min-w-0">
                {isLive && (
                  <span className="badge-live flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse-live" />
                    {fixture.status.elapsed}&apos;
                  </span>
                )}
                <div className="flex items-center gap-2 min-w-0">
                  <Image
                    src={fixture.teams.home.logo}
                    alt={fixture.teams.home.name}
                    width={24}
                    height={24}
                    unoptimized
                  />
                  <span className="text-sm font-semibold truncate">
                    {fixture.teams.home.name}
                  </span>
                  <span className="text-xs text-[#64748b]">vs</span>
                  <span className="text-sm font-semibold truncate">
                    {fixture.teams.away.name}
                  </span>
                  <Image
                    src={fixture.teams.away.logo}
                    alt={fixture.teams.away.name}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={fixture.league.logo}
                  alt={fixture.league.name}
                  width={18}
                  height={18}
                  unoptimized
                />
                <span className="text-xs text-[#64748b] hidden sm:inline">
                  {fixture.league.name}
                </span>
              </div>
            </Link>

            {/* Streams */}
            <div className="divide-y divide-[#1e2433]/50">
              {matchStreams.map((stream) => (
                <a
                  key={stream.id}
                  href={stream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-3 hover:bg-[#1a1f2e] transition group"
                >
                  <div className="flex items-center gap-3">
                    <Tv size={14} className="text-[#ef4444]" />
                    <span className="text-sm font-medium group-hover:text-[#10b981] transition">
                      {stream.broadcaster}
                    </span>
                    <span
                      className={`text-[0.6rem] font-bold px-2 py-0.5 rounded ${
                        stream.quality === "4K"
                          ? "bg-[#8b5cf6]/15 text-[#8b5cf6]"
                          : "bg-[#10b981]/15 text-[#10b981]"
                      }`}
                    >
                      {stream.quality}
                    </span>
                    {stream.isFree && (
                      <span className="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-[#f59e0b]/15 text-[#f59e0b]">
                        FREE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#64748b]">
                      {stream.language}
                    </span>
                    <ExternalLink
                      size={12}
                      className="text-[#64748b] group-hover:text-[#10b981]"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StreamingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#f97316] flex items-center justify-center">
            <Tv size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#ef4444] to-[#f97316] bg-clip-text text-transparent">
                Live Streaming
              </span>
            </h1>
            <p className="text-sm text-[#64748b]">
              Watch live football matches from official broadcasters
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-3 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg mb-6">
        <p className="text-xs text-[#f59e0b]">
          ⚠️ All streaming links redirect to official broadcasters (Vidio, RCTI+,
          beIN Sports, etc.). Availability varies by region.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skeleton h-32 rounded-xl" />
            ))}
          </div>
        }
      >
        <StreamingContent />
      </Suspense>
    </div>
  );
}

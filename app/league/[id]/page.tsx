import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getLeagues, getStandings, getFixtures, getTopScorers } from "@/app/lib/api";
import LeagueDetailTabs from "./components/LeagueDetailTabs";

export default async function LeaguePage(props: PageProps<"/league/[id]">) {
  const { id } = await props.params;

  const [leagues, standings, fixtures, topScorers] = await Promise.all([
    getLeagues({ id }),
    getStandings(id, "2024"),
    getFixtures({ league: id, season: "2024" }),
    getTopScorers(id, "2024"),
  ]);

  const league = leagues[0];
  if (!league) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-xl text-[#94a3b8]">League not found</p>
        <Link href="/" className="text-[#10b981] text-sm mt-4 inline-block">
          ← Back to matches
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition mb-4"
      >
        <ArrowLeft size={14} />
        Back to matches
      </Link>

      {/* League Header */}
      <div className="card p-6 mb-6 flex items-center gap-5">
        <Image
          src={league.logo}
          alt={league.name}
          width={56}
          height={56}
          unoptimized
        />
        <div>
          <h1 className="text-xl font-bold">{league.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            {league.country.flag && (
              <Image
                src={league.country.flag}
                alt={league.country.name}
                width={16}
                height={12}
                unoptimized
              />
            )}
            <span className="text-sm text-[#94a3b8]">
              {league.country.name}
            </span>
            <span className="text-xs text-[#64748b]">•</span>
            <span className="text-xs text-[#64748b]">
              {league.type} • Season {league.season}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <LeagueDetailTabs
        standings={standings}
        fixtures={fixtures}
        topScorers={topScorers}
      />
    </div>
  );
}

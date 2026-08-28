import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Trophy } from "lucide-react";
import { getLeagues } from "@/app/lib/api";

export default async function LeaguesByCountryPage(
  props: PageProps<"/leagues/[country]">
) {
  const { country } = await props.params;
  const decodedCountry = decodeURIComponent(country);
  const leagues = await getLeagues({ country: decodedCountry });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back */}
      <Link
        href="/countries"
        className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition mb-4"
      >
        <ArrowLeft size={14} />
        Back to countries
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">{decodedCountry}</h1>
        <p className="text-sm text-[#64748b]">
          {leagues.length} league{leagues.length !== 1 ? "s" : ""} & cup
          {leagues.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Leagues */}
      {leagues.length > 0 ? (
        <div className="grid gap-3">
          {leagues.map((league) => (
            <Link
              key={league.id}
              href={`/league/${league.id}`}
              className="card flex items-center gap-4 px-5 py-4 group hover:border-[#10b981]/30 transition"
            >
              <Image
                src={league.logo}
                alt={league.name}
                width={40}
                height={40}
                className="rounded-lg shrink-0"
                unoptimized
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold group-hover:text-[#10b981] transition">
                  {league.name}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-[#64748b]">{league.type}</span>
                  <span className="text-[#1e2433]">•</span>
                  <span className="text-xs text-[#64748b]">
                    Season {league.season}
                  </span>
                </div>
              </div>
              <Trophy size={16} className="text-[#64748b] group-hover:text-[#f59e0b] transition" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="card p-12 text-center">
          <p className="text-[#64748b]">
            No leagues found for {decodedCountry}.
          </p>
        </div>
      )}
    </div>
  );
}

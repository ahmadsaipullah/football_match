"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronDown, ChevronRight, Search } from "lucide-react";
import type { League, Country } from "@/app/lib/types";

interface SidebarProps {
  leagues: League[];
  countries: Country[];
}

const popularLeagueIds = [39, 140, 78, 135, 61, 2, 128, 307];

export default function Sidebar({ leagues, countries }: SidebarProps) {
  const [search, setSearch] = useState("");
  const [showAllCountries, setShowAllCountries] = useState(false);

  const popularLeagues = leagues.filter((l) =>
    popularLeagueIds.includes(l.id)
  );

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayCountries = showAllCountries
    ? filteredCountries
    : filteredCountries.slice(0, 12);

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto pb-8 pr-2">
        {/* Search */}
        <div className="relative mb-4">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]"
          />
          <input
            type="text"
            placeholder="Search leagues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#141821] border border-[#1e2433] rounded-lg pl-9 pr-3 py-2 text-sm text-[#f1f5f9] placeholder:text-[#64748b] focus:outline-none focus:border-[#10b981]/50 transition"
          />
        </div>

        {/* Popular Leagues */}
        <div className="mb-6">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#64748b] mb-2 px-3">
            ★ Popular Leagues
          </h3>
          <div className="space-y-0.5">
            {popularLeagues.map((league) => (
              <Link
                key={league.id}
                href={`/league/${league.id}`}
                className="sidebar-link"
              >
                <Image
                  src={league.logo}
                  alt={league.name}
                  width={20}
                  height={20}
                  className="rounded-sm"
                  unoptimized
                />
                <span className="truncate">{league.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#64748b] mb-2 px-3">
            🌍 Countries
          </h3>
          <div className="space-y-0.5">
            {displayCountries.map((country) => (
              <Link
                key={country.name}
                href={`/leagues/${encodeURIComponent(country.name)}`}
                className="sidebar-link"
              >
                {country.flag ? (
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={20}
                    height={14}
                    className="rounded-sm"
                    unoptimized
                  />
                ) : (
                  <span className="w-5 text-center">🌐</span>
                )}
                <span className="truncate">{country.name}</span>
              </Link>
            ))}
          </div>
          {filteredCountries.length > 12 && (
            <button
              onClick={() => setShowAllCountries(!showAllCountries)}
              className="flex items-center gap-1 text-[#10b981] text-xs font-medium mt-2 px-3 hover:underline"
            >
              {showAllCountries ? (
                <>
                  <ChevronDown size={12} /> Show less
                </>
              ) : (
                <>
                  <ChevronRight size={12} /> Show all (
                  {filteredCountries.length})
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

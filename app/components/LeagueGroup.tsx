"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import MatchCard from "./MatchCard";
import type { Fixture, League } from "@/app/lib/types";

interface LeagueGroupProps {
  league: League;
  fixtures: Fixture[];
}

export default function LeagueGroup({ league, fixtures }: LeagueGroupProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="animate-fade-in">
      {/* League Header */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center gap-3 px-4 py-2.5 bg-[#0f1219] rounded-t-lg border border-[#1e2433] border-b-0 hover:bg-[#141821] transition group"
      >
        {league.country.flag ? (
          <Image
            src={league.country.flag}
            alt={league.country.name}
            width={18}
            height={13}
            className="rounded-sm shrink-0"
            unoptimized
          />
        ) : (
          <span className="text-sm shrink-0">🌐</span>
        )}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-[#64748b] text-xs font-medium">
            {league.country.name}:
          </span>
          <Link
            href={`/league/${league.id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-semibold text-[#f1f5f9] hover:text-[#10b981] transition truncate"
          >
            {league.name}
          </Link>
          {league.round && (
            <span className="text-[0.65rem] text-[#64748b] shrink-0">
              — {league.round}
            </span>
          )}
        </div>
        {collapsed ? (
          <ChevronDown size={14} className="text-[#64748b]" />
        ) : (
          <ChevronUp size={14} className="text-[#64748b]" />
        )}
      </button>

      {/* Matches */}
      {!collapsed && (
        <div className="border border-[#1e2433] border-t-0 rounded-b-lg bg-[#0f1219]/50 divide-y divide-[#1e2433]/50">
          {fixtures.map((fixture) => (
            <MatchCard key={fixture.id} fixture={fixture} />
          ))}
        </div>
      )}
    </div>
  );
}

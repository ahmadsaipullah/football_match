"use client";

import { useState } from "react";
import { TableProperties, Calendar, Award } from "lucide-react";
import type { Standing, Fixture, PlayerStatistics } from "@/app/lib/types";
import StandingsTable from "./StandingsTable";
import FixturesList from "./FixturesList";
import TopScorers from "./TopScorers";

interface LeagueDetailTabsProps {
  standings: Standing[];
  fixtures: Fixture[];
  topScorers: PlayerStatistics[];
}

const tabs = [
  { key: "standings", label: "Standings", icon: TableProperties },
  { key: "fixtures", label: "Fixtures", icon: Calendar },
  { key: "scorers", label: "Top Scorers", icon: Award },
];

export default function LeagueDetailTabs({
  standings,
  fixtures,
  topScorers,
}: LeagueDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("standings");

  return (
    <div>
      <div className="flex items-center gap-1 border-b border-[#1e2433] mb-6 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all border-b-2 shrink-0 ${
                activeTab === tab.key
                  ? "border-[#10b981] text-[#10b981]"
                  : "border-transparent text-[#94a3b8] hover:text-white"
              }`}
            >
              <Icon size={15} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="animate-fade-in">
        {activeTab === "standings" && <StandingsTable standings={standings} />}
        {activeTab === "fixtures" && <FixturesList fixtures={fixtures} />}
        {activeTab === "scorers" && <TopScorers players={topScorers} />}
      </div>
    </div>
  );
}

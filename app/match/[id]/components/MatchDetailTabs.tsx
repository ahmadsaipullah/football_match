"use client";

import { useState } from "react";
import { BarChart3, Clock, Users, Tv } from "lucide-react";
import type {
  Fixture,
  FixtureEvent,
  FixtureTeamStatistic,
  MatchLineup,
  LiveStream,
} from "@/app/lib/types";
import MatchEvents from "./MatchEvents";
import MatchStats from "./MatchStats";
import MatchLineups from "./MatchLineups";
import LiveStreamPlayer from "./LiveStreamPlayer";

interface MatchDetailTabsProps {
  events: FixtureEvent[];
  statistics: FixtureTeamStatistic[];
  lineups: MatchLineup[];
  streams: LiveStream[];
  fixture: Fixture;
}

const tabs = [
  { key: "events", label: "Events", icon: Clock },
  { key: "stats", label: "Statistics", icon: BarChart3 },
  { key: "lineups", label: "Lineups", icon: Users },
  { key: "stream", label: "Streaming", icon: Tv },
];

export default function MatchDetailTabs({
  events,
  statistics,
  lineups,
  streams,
  fixture,
}: MatchDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div>
      {/* Tab navigation */}
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
              {tab.key === "stream" && streams.length > 0 && (
                <span className="stream-badge ml-1">{streams.length}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in">
        {activeTab === "events" && (
          <MatchEvents events={events} fixture={fixture} />
        )}
        {activeTab === "stats" && <MatchStats statistics={statistics} />}
        {activeTab === "lineups" && <MatchLineups lineups={lineups} />}
        {activeTab === "stream" && <LiveStreamPlayer streams={streams} />}
      </div>
    </div>
  );
}

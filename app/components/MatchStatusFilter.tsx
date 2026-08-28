"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { MatchFilter } from "@/app/lib/types";

interface MatchStatusFilterProps {
  liveCount?: number;
}

const filters: { key: MatchFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "live", label: "Live" },
  { key: "finished", label: "Finished" },
  { key: "scheduled", label: "Scheduled" },
];

export default function MatchStatusFilter({
  liveCount = 0,
}: MatchStatusFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = (searchParams.get("filter") as MatchFilter) || "all";

  function setFilter(filter: MatchFilter) {
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-1 bg-[#141821] rounded-xl p-1 border border-[#1e2433] overflow-x-auto no-scrollbar max-w-full w-full sm:w-auto">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
            current === f.key
              ? "bg-[#10b981]/15 text-[#10b981] shadow-sm"
              : "text-[#94a3b8] hover:text-white hover:bg-white/5"
          }`}
        >
          {f.label}
          {f.key === "live" && liveCount > 0 && (
            <span className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse-live" />
              <span className="text-[0.65rem] font-bold text-[#ef4444]">
                {liveCount}
              </span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

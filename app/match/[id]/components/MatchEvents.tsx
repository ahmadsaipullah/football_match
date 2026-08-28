import Image from "next/image";
import type { FixtureEvent, Fixture } from "@/app/lib/types";

interface MatchEventsProps {
  events: FixtureEvent[];
  fixture: Fixture;
}

function EventIcon({ type, detail }: { type: string; detail: string }) {
  if (type === "Goal") {
    if (detail === "Own Goal") return <span className="text-base">🔴</span>;
    if (detail === "Penalty") return <span className="text-base">⚽️</span>;
    return <span className="text-base">⚽</span>;
  }
  if (type === "Card") {
    if (detail.includes("Red")) return <span className="text-base">🟥</span>;
    return <span className="text-base">🟨</span>;
  }
  if (type === "subst") return <span className="text-base">🔄</span>;
  if (type === "Var") return <span className="text-base">📹</span>;
  return <span className="text-base">•</span>;
}

export default function MatchEvents({ events, fixture }: MatchEventsProps) {
  if (events.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-[#64748b]">No events recorded yet.</p>
      </div>
    );
  }

  const sortedEvents = [...events].sort(
    (a, b) => a.time.elapsed - b.time.elapsed
  );

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1e2433]" />

      <div className="space-y-3">
        {sortedEvents.map((event, idx) => {
          const isHome = event.team.id === fixture.teams.home.id;

          return (
            <div
              key={idx}
              className={`flex items-center gap-3 ${
                isHome ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Event content */}
              <div
                className={`flex-1 flex items-center gap-3 ${
                  isHome ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`card px-4 py-2.5 flex items-center gap-3 max-w-xs ${
                    event.type === "Goal"
                      ? "border-[#10b981]/30 bg-[#10b981]/5"
                      : ""
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {event.player.name}
                    </p>
                    {event.assist.name && (
                      <p className="text-xs text-[#64748b]">
                        Assist: {event.assist.name}
                      </p>
                    )}
                    <p className="text-[0.65rem] text-[#64748b]">
                      {event.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center - time + icon */}
              <div className="flex flex-col items-center z-10 shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#141821] border border-[#1e2433] flex items-center justify-center">
                  <EventIcon type={event.type} detail={event.detail} />
                </div>
                <span className="text-[0.6rem] font-bold text-[#94a3b8] mt-0.5">
                  {event.time.elapsed}&apos;
                  {event.time.extra ? `+${event.time.extra}` : ""}
                </span>
              </div>

              {/* Spacer */}
              <div className="flex-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

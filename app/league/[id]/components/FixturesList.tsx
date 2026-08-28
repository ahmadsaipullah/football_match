import type { Fixture } from "@/app/lib/types";
import MatchCard from "@/app/components/MatchCard";

interface FixturesListProps {
  fixtures: Fixture[];
}

export default function FixturesList({ fixtures }: FixturesListProps) {
  if (fixtures.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-[#64748b]">No fixtures available.</p>
      </div>
    );
  }

  const sorted = [...fixtures].sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="card divide-y divide-[#1e2433]/50">
      {sorted.map((fixture) => (
        <MatchCard key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
}

import LoadingSkeleton from "./components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Hero skeleton */}
      <div className="mb-6 p-6 rounded-2xl skeleton h-24" />
      <LoadingSkeleton />
    </div>
  );
}
